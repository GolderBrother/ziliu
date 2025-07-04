// 用户角色枚举
export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
}

// 用户订阅计划枚举
export enum UserPlan {
  FREE = 'free',
  PRO = 'pro',
}

// 用户类型定义
export interface User {
  id: string;
  email: string;
  username: string;
  avatar?: string;
  role: UserRole;
  plan: UserPlan;
  planExpiresAt?: string;
  aiCredits: number;
  imageCredits: number;
  emailVerified: boolean;
  createdAt: string;
  updatedAt: string;
} 