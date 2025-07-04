'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ArticleList from '@/components/editor/ArticleList';
import { ArticleService } from '@/lib/services/article.service';
import { Article } from '@/types/article';

export default function ArticlesPage() {
  const router = useRouter();
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 加载文章数据
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await ArticleService.getAll();
        setArticles(data);
      } catch (err) {
        console.error('加载文章失败:', err);
        setError('无法加载文章列表，请稍后重试');
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // 处理删除文章
  const handleDelete = async (id: string) => {
    try {
      await ArticleService.delete(id);
      setArticles(articles.filter(article => article.id !== id));
    } catch (err) {
      console.error('删除文章失败:', err);
      setError('删除文章失败，请重试');
    }
  };

  if (isLoading) {
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
      <div className="container py-8">
        <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">出错了</h3>
              <div className="mt-2 text-sm text-red-700">
                <p>{error}</p>
              </div>
              <div className="mt-4">
                <button 
                  type="button"
                  onClick={() => window.location.reload()}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  重试
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <ArticleList articles={[]} onDelete={handleDelete} />
      </div>
    );
  }

  return (
    <div className="container py-8">
      <ArticleList articles={articles} onDelete={handleDelete} />
    </div>
  );
} 