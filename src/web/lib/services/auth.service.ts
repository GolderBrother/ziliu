import { User } from '@/types/user';

// 登录请求数据接口
export interface LoginRequest {
  email: string;
  password: string;
}

// 注册请求数据接口
export interface RegisterRequest {
  email: string;
  username: string;
  password: string;
}

// 登录响应数据接口
export interface AuthResponse {
  user: User;
  access_token: string;
  expires_in: number;
}

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

// 认证服务类
export const AuthService = {
  // 登录
  async login(data: LoginRequest): Promise<AuthResponse> {
    const response = await fetch(`${API_URL}/auth/login`, getRequestConfig('POST', data));
    const authData = await checkResponse(response);
    
    // 保存token到localStorage
    if (authData.access_token) {
      localStorage.setItem('accessToken', authData.access_token);
      localStorage.setItem('user', JSON.stringify(authData.user));
    }
    
    return authData;
  },
  
  // 注册
  async register(data: RegisterRequest): Promise<User> {
    const response = await fetch(`${API_URL}/users`, getRequestConfig('POST', data));
    return checkResponse(response);
  },
  
  // 登出
  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
  },
  
  // 刷新令牌
  async refreshToken(): Promise<AuthResponse> {
    const response = await fetch(`${API_URL}/auth/refresh`, getRequestConfig('POST'));
    const authData = await checkResponse(response);
    
    if (authData.access_token) {
      localStorage.setItem('accessToken', authData.access_token);
    }
    
    return authData;
  },
  
  // 获取当前用户信息
  async getCurrentUser(): Promise<User> {
    const response = await fetch(`${API_URL}/auth/profile`, getRequestConfig('GET'));
    const user = await checkResponse(response);
    
    // 更新本地存储的用户信息
    localStorage.setItem('user', JSON.stringify(user));
    
    return user;
  },
  
  // 检查用户是否已登录
  isAuthenticated(): boolean {
    if (typeof window === 'undefined') return false;
    return !!localStorage.getItem('accessToken');
  },
  
  // 从本地存储获取当前用户
  getStoredUser(): User | null {
    if (typeof window === 'undefined') return null;
    
    const userJson = localStorage.getItem('user');
    if (!userJson) return null;
    
    try {
      return JSON.parse(userJson);
    } catch {
      return null;
    }
  },
}; 