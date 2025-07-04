'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Cross2Icon, PlusIcon, ImageIcon, SaveIcon } from '@radix-ui/react-icons';

interface ArticleEditorProps {
  initialData?: {
    id?: string;
    title: string;
    content: string;
    summary?: string;
    tags?: string[];
    coverImage?: string;
  };
  onSave: (data: any) => Promise<void>;
  isLoading?: boolean;
}

export default function ArticleEditor({
  initialData = { title: '', content: '', summary: '', tags: [] },
  onSave,
  isLoading = false
}: ArticleEditorProps) {
  const [title, setTitle] = useState(initialData.title);
  const [content, setContent] = useState(initialData.content);
  const [summary, setSummary] = useState(initialData.summary || '');
  const [tags, setTags] = useState<string[]>(initialData.tags || []);
  const [newTag, setNewTag] = useState('');
  const [coverImage, setCoverImage] = useState(initialData.coverImage || '');
  const [isSaving, setIsSaving] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 添加标签
  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  // 删除标签
  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  // 处理图片上传
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // 实际项目中，这里应该调用API上传图片
      // 这里仅做演示，创建本地URL
      const imageUrl = URL.createObjectURL(file);
      setCoverImage(imageUrl);
    }
  };

  // 保存文章
  const handleSave = async () => {
    if (!title.trim() || !content.trim()) {
      alert('标题和内容不能为空');
      return;
    }

    setIsSaving(true);
    try {
      await onSave({
        title,
        content,
        summary,
        tags,
        coverImage
      });
    } catch (error) {
      console.error('保存文章失败:', error);
      alert('保存失败，请重试');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6 w-full max-w-5xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>
            <Input
              placeholder="请输入文章标题..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-2xl font-bold border-none focus-visible:ring-0 px-0"
            />
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* 封面图片 */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">封面图片</div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => fileInputRef.current?.click()}
              >
                <ImageIcon className="mr-2 h-4 w-4" />
                选择图片
              </Button>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleImageUpload} 
                className="hidden" 
                accept="image/*" 
              />
            </div>
            {coverImage && (
              <div className="relative h-48 w-full rounded-md overflow-hidden">
                <img 
                  src={coverImage} 
                  alt="文章封面" 
                  className="h-full w-full object-cover"
                />
                <Button
                  type="button"
                  size="icon"
                  variant="destructive"
                  className="absolute top-2 right-2"
                  onClick={() => setCoverImage('')}
                >
                  <Cross2Icon className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>

          {/* 文章内容 */}
          <Textarea
            placeholder="写下你的文章内容..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[300px] resize-y"
          />

          {/* 文章摘要 */}
          <div className="space-y-2">
            <div className="text-sm font-medium">文章摘要</div>
            <Textarea
              placeholder="简短的文章摘要..."
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="resize-none h-24"
            />
          </div>

          {/* 标签 */}
          <div className="space-y-2">
            <div className="text-sm font-medium">文章标签</div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} className="flex items-center gap-1">
                  {tag}
                  <button onClick={() => removeTag(tag)}>
                    <Cross2Icon className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <div className="flex">
              <Input
                placeholder="添加标签..."
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                className="rounded-r-none"
              />
              <Button 
                type="button" 
                onClick={addTag} 
                variant="secondary"
                className="rounded-l-none"
              >
                <PlusIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button 
            type="button" 
            onClick={handleSave}
            disabled={isSaving || isLoading}
          >
            <SaveIcon className="mr-2 h-4 w-4" />
            保存文章
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
} 