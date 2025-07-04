import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class UtilsService {
  /**
   * 生成随机字符串
   */
  generateRandomString(length: number = 10): string {
    return crypto.randomBytes(Math.ceil(length / 2))
      .toString('hex')
      .slice(0, length);
  }

  /**
   * 生成唯一ID
   */
  generateUniqueId(): string {
    return crypto.randomUUID();
  }

  /**
   * 格式化日期
   */
  formatDate(date: Date = new Date()): string {
    return date.toISOString().split('T')[0];
  }

  /**
   * 计算文章阅读时间（分钟）
   */
  calculateReadingTime(content: string): number {
    const wordsPerMinute = 200; // 假设平均阅读速度为每分钟200字
    const words = content.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  }

  /**
   * 截取字符串（保留完整单词）
   */
  truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    
    const truncated = text.substring(0, maxLength);
    return truncated.substring(0, truncated.lastIndexOf(' ')) + '...';
  }
} 