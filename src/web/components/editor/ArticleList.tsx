'use client';

import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { EyeOpenIcon, Pencil1Icon, TrashIcon, PlusIcon } from '@radix-ui/react-icons';
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
  summary?: string;
  status: ArticleStatus;
  tags?: string[];
  coverImage?: string;
  createdAt: string;
  updatedAt: string;
  viewCount: number;
}

interface ArticleListProps {
  articles: Article[];
  onDelete?: (id: string) => void;
}

export default function ArticleList({ articles, onDelete }: ArticleListProps) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState<string | null>(null);

  // 处理删除文章
  const handleDelete = async (id: string) => {
    if (!onDelete) return;
    
    setIsDeleting(id);
    try {
      await onDelete(id);
    } catch (error) {
      console.error('删除文章失败:', error);
    } finally {
      setIsDeleting(null);
    }
  };

  // 获取状态标签颜色
  const getStatusColor = (status: ArticleStatus) => {
    switch (status) {
      case ArticleStatus.PUBLISHED:
        return 'bg-green-100 text-green-800 border-green-300';
      case ArticleStatus.DRAFT:
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case ArticleStatus.ARCHIVED:
        return 'bg-gray-100 text-gray-800 border-gray-300';
      default:
        return '';
    }
  };

  // 格式化日期
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // 获取状态文本
  const getStatusText = (status: ArticleStatus) => {
    switch (status) {
      case ArticleStatus.PUBLISHED:
        return '已发布';
      case ArticleStatus.DRAFT:
        return '草稿';
      case ArticleStatus.ARCHIVED:
        return '已归档';
      default:
        return '未知';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">我的文章</h2>
        <Button onClick={() => router.push('/articles/new')}>
          <PlusIcon className="mr-2 h-4 w-4" />
          新建文章
        </Button>
      </div>

      {articles.length === 0 ? (
        <Card className="flex flex-col items-center justify-center p-6 text-center">
          <div className="text-gray-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 className="text-lg font-medium mb-2">还没有文章</h3>
          <p className="text-gray-500 mb-4">点击"新建文章"按钮开始创作吧</p>
          <Button onClick={() => router.push('/articles/new')}>
            <PlusIcon className="mr-2 h-4 w-4" />
            新建文章
          </Button>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {articles.map((article) => (
            <Card key={article.id} className="overflow-hidden">
              {article.coverImage && (
                <div className="h-40 w-full overflow-hidden">
                  <img 
                    src={article.coverImage} 
                    alt={article.title} 
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              )}
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                  <Badge className={`${getStatusColor(article.status)} ml-2`}>
                    {getStatusText(article.status)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                {article.summary && (
                  <p className="text-gray-500 line-clamp-2 mb-2">{article.summary}</p>
                )}
                <div className="flex flex-wrap gap-1 mt-2">
                  {article.tags?.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center text-sm text-gray-500 mt-3">
                  <EyeOpenIcon className="h-4 w-4 mr-1" />
                  <span>{article.viewCount} 次浏览</span>
                  <span className="mx-2">•</span>
                  <span>更新于 {formatDate(article.updatedAt)}</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2 pt-2">
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => router.push(`/articles/${article.id}`)}
                >
                  <EyeOpenIcon className="h-4 w-4 mr-1" />
                  查看
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => router.push(`/articles/edit/${article.id}`)}
                >
                  <Pencil1Icon className="h-4 w-4 mr-1" />
                  编辑
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => handleDelete(article.id)}
                  disabled={isDeleting === article.id}
                >
                  <TrashIcon className="h-4 w-4 mr-1" />
                  删除
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
} 