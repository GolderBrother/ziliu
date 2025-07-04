import { Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';

@Injectable()
export class ImageService {
  private readonly logger = new Logger(ImageService.name);
  private readonly uploadDir = path.join(process.cwd(), 'uploads');

  constructor() {
    // 确保上传目录存在
    if (!fs.existsSync(this.uploadDir)) {
      fs.mkdirSync(this.uploadDir, { recursive: true });
    }
  }

  /**
   * 保存上传的图片到本地
   */
  async saveImage(file: Express.Multer.File): Promise<string> {
    try {
      const fileExt = path.extname(file.originalname);
      const fileName = `${crypto.randomUUID()}${fileExt}`;
      const filePath = path.join(this.uploadDir, fileName);
      
      // 写入文件
      fs.writeFileSync(filePath, file.buffer);
      
      return fileName;
    } catch (error) {
      this.logger.error(`保存图片失败: ${error.message}`);
      throw new Error('图片保存失败');
    }
  }

  /**
   * 从本地删除图片
   */
  async deleteImage(fileName: string): Promise<void> {
    try {
      const filePath = path.join(this.uploadDir, fileName);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    } catch (error) {
      this.logger.error(`删除图片失败: ${error.message}`);
      throw new Error('图片删除失败');
    }
  }

  /**
   * 获取图片URL
   */
  getImageUrl(fileName: string): string {
    return `/uploads/${fileName}`;
  }

  /**
   * 检查文件是否为图片
   */
  isImage(file: Express.Multer.File): boolean {
    const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    return allowedMimeTypes.includes(file.mimetype);
  }
} 