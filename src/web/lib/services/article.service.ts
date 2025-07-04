import { ArticleStatus } from '@/types/article';

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

// 创建文章DTO
export interface CreateArticleDto {
  title: string;
  content: string;
  summary?: string;
  status?: ArticleStatus;
  tags?: string[];
  coverImage?: string;
  formatSettings?: Record<string, any>;
}

// 更新文章DTO
export interface UpdateArticleDto extends Partial<CreateArticleDto> {}

// API基本URL
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// 获取API请求的通用配置
const getRequestConfig = (method: string, data?: any): RequestInit => {
  // 从localStorage获取token
  const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
  
  const config: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    credentials: 'include',
  };
  
  if (data) {
    config.body = JSON.stringify(data);
  }
  
  return config;
};

// 检查响应状态
const checkResponse = async (response: Response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: '发生未知错误' }));
    throw new Error(error.message || `请求失败: ${response.status}`);
  }
  return response.json();
};

// 文章服务类
export const ArticleService = {
  // 获取所有文章
  async getAll(): Promise<Article[]> {
    const response = await fetch(`${API_URL}/articles`, getRequestConfig('GET'));
    return checkResponse(response);
  },
  
  // 获取单个文章
  async getOne(id: string): Promise<Article> {
    const response = await fetch(`${API_URL}/articles/${id}`, getRequestConfig('GET'));
    return checkResponse(response);
  },
  
  // 创建文章
  async create(data: CreateArticleDto): Promise<Article> {
    const response = await fetch(`${API_URL}/articles`, getRequestConfig('POST', data));
    return checkResponse(response);
  },
  
  // 更新文章
  async update(id: string, data: UpdateArticleDto): Promise<Article> {
    const response = await fetch(`${API_URL}/articles/${id}`, getRequestConfig('PATCH', data));
    return checkResponse(response);
  },
  
  // 删除文章
  async delete(id: string): Promise<void> {
    const response = await fetch(`${API_URL}/articles/${id}`, getRequestConfig('DELETE'));
    return checkResponse(response);
  },
  
  // 更新文章状态
  async updateStatus(id: string, status: ArticleStatus): Promise<Article> {
    const response = await fetch(
      `${API_URL}/articles/${id}/status`, 
      getRequestConfig('PATCH', { status })
    );
    return checkResponse(response);
  },
  
  // 更新发布平台信息
  async updatePlatforms(id: string, platformData: Record<string, any>): Promise<Article> {
    const response = await fetch(
      `${API_URL}/articles/${id}/platforms`, 
      getRequestConfig('PATCH', platformData)
    );
    return checkResponse(response);
  },
  
  // 更新AI优化信息
  async updateAiOptimizations(id: string, optimizationData: Record<string, any>): Promise<Article> {
    const response = await fetch(
      `${API_URL}/articles/${id}/ai-optimizations`, 
      getRequestConfig('PATCH', optimizationData)
    );
    return checkResponse(response);
  },
  
  // 上传图片
  async uploadImage(file: File): Promise<string> {
    const formData = new FormData();
    formData.append('file', file);
    
    const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
    
    const response = await fetch(`${API_URL}/upload/image`, {
      method: 'POST',
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: formData,
      credentials: 'include',
    });
    
    const data = await checkResponse(response);
    return data.url;
  },
}; 