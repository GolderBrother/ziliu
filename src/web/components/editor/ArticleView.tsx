'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { EyeOpenIcon, CalendarIcon, Share1Icon, Pencil1Icon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';

// 文章状态类型
enum ArticleStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  ARCHIVED = 'archived',
}

// 文章类型接口
interface Article {
  id: string;
  title: string;
  content: string;
  summary?: string;
  status: ArticleStatus;
  tags?: string[];
  coverImage?: string;
  createdAt: string;
  updatedAt: string;
  viewCount: number;
}

interface ArticleViewProps {
  article: Article;
}

export default function ArticleView({ article }: ArticleViewProps) {
  const router = useRouter();

  // 格式化日期
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <Button 
          variant="ghost" 
          onClick={() => router.back()}
          className="mb-4"
        >
          ← 返回
        </Button>
        
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
          <div className="flex items-center">
            <CalendarIcon className="h-4 w-4 mr-1" />
            <span>发布于 {formatDate(article.createdAt)}</span>
          </div>
          <div className="flex items-center">
            <EyeOpenIcon className="h-4 w-4 mr-1" />
            <span>{article.viewCount} 次浏览</span>
          </div>
        </div>
        
        {article.coverImage && (
          <div className="w-full h-64 sm:h-80 md:h-96 mb-6 rounded-lg overflow-hidden">
            <img 
              src={article.coverImage} 
              alt={article.title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {article.tags.map(tag => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
        {article.summary && (
          <Card className="mb-6">
            <CardContent className="p-4 italic text-gray-600">
              {article.summary}
            </CardContent>
          </Card>
        )}
        
        <div className="prose prose-lg max-w-none">
          {/* 在实际应用中，您需要使用Markdown渲染器，如react-markdown */}
          <div dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br/>') }} />
        </div>
      </div>
      
      <div className="border-t pt-6 mt-10">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            最后更新于 {formatDate(article.updatedAt)}
          </div>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {
                // 复制分享链接到剪贴板
                const url = window.location.href;
                navigator.clipboard.writeText(url);
                alert('链接已复制到剪贴板');
              }}
            >
              <Share1Icon className="h-4 w-4 mr-1" />
              分享
            </Button>
            
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => router.push(`/articles/edit/${article.id}`)}
            >
              <Pencil1Icon className="h-4 w-4 mr-1" />
              编辑
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 