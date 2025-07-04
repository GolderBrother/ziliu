// 文章状态枚举
export enum ArticleStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  ARCHIVED = 'archived',
}

// 文章类型定义
export interface Article {
  id: string;
  title: string;
  content: string;
  summary?: string;
  status: ArticleStatus;
  tags?: string[];
  coverImage?: string;
  viewCount: number;
  publishedPlatforms?: Record<string, any>;
  aiOptimizations?: Record<string, any>;
  formatSettings?: Record<string, any>;
  userId: string;
  createdAt: string;
  updatedAt: string;
} 