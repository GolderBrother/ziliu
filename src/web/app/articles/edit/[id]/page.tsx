'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import ArticleEditor from '@/components/editor/ArticleEditor';
import { ArticleService, UpdateArticleDto } from '@/lib/services/article.service';
import { Article } from '@/types/article';

export default function EditArticlePage() {
  const router = useRouter();
  const params = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const id = params.id as string;

  // 加载文章数据
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await ArticleService.getOne(id);
        setArticle(data);
      } catch (err) {
        console.error('加载文章失败:', err);
        setError('无法加载文章，请稍后重试');
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchArticle();
    }
  }, [id]);

  // 保存文章
  const handleSave = async (data: UpdateArticleDto) => {
    setIsLoading(true);
    try {
      const updatedArticle = await ArticleService.update(id, data);
      setArticle(updatedArticle);
      router.push(`/articles/${updatedArticle.id}`);
    } catch (err) {
      console.error('更新文章失败:', err);
      setError('保存失败，请重试');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading && !article) {
    return (
      <div className="container py-8 flex justify-center items-center min-h-[60vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-lg">加载中...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-8 flex justify-center items-center min-h-[60vh]">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">❌</div>
          <h2 className="text-xl font-bold mb-2">出错了</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
            onClick={() => router.back()}
          >
            返回
          </button>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="container py-8 flex justify-center items-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">文章不存在</h2>
          <p className="text-gray-600 mb-4">找不到该文章或您没有权限访问</p>
          <button 
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
            onClick={() => router.push('/articles')}
          >
            查看所有文章
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">编辑文章</h1>
      <ArticleEditor 
        initialData={article} 
        onSave={handleSave} 
        isLoading={isLoading} 
      />
    </div>
  );
} 