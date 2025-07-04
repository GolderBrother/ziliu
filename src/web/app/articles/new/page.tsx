'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ArticleEditor from '@/components/editor/ArticleEditor';
import { ArticleService, CreateArticleDto } from '@/lib/services/article.service';

export default function NewArticlePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async (data: CreateArticleDto) => {
    setIsLoading(true);
    try {
      const article = await ArticleService.create(data);
      router.push(`/articles/${article.id}`);
    } catch (error) {
      console.error('创建文章失败:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">创建新文章</h1>
      <ArticleEditor onSave={handleSave} isLoading={isLoading} />
    </div>
  );
} 