import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article, ArticleStatus } from './entities/article.entity';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { User } from '../users/entities/user.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private articlesRepository: Repository<Article>,
  ) {}

  async create(createArticleDto: CreateArticleDto, user: User): Promise<Article> {
    const article = this.articlesRepository.create({
      ...createArticleDto,
      userId: user.id,
    });
    return this.articlesRepository.save(article);
  }

  async findAll(userId?: string): Promise<Article[]> {
    if (userId) {
      return this.articlesRepository.find({
        where: { userId },
        order: { updatedAt: 'DESC' },
      });
    }
    return this.articlesRepository.find({
      order: { updatedAt: 'DESC' },
    });
  }

  async findOne(id: string, userId?: string): Promise<Article> {
    const article = await this.articlesRepository.findOne({
      where: { id },
      relations: ['user'],
    });

    if (!article) {
      throw new NotFoundException('文章不存在');
    }

    // 如果提供了userId，检查文章是否属于该用户
    if (userId && article.userId !== userId) {
      throw new ForbiddenException('无权访问此文章');
    }

    return article;
  }

  async update(id: string, updateArticleDto: UpdateArticleDto, userId: string): Promise<Article> {
    const article = await this.findOne(id, userId);
    
    Object.assign(article, updateArticleDto);
    return this.articlesRepository.save(article);
  }

  async remove(id: string, userId: string): Promise<void> {
    const article = await this.findOne(id, userId);
    await this.articlesRepository.remove(article);
  }

  async updateStatus(id: string, status: ArticleStatus, userId: string): Promise<Article> {
    const article = await this.findOne(id, userId);
    
    article.status = status;
    return this.articlesRepository.save(article);
  }

  async updatePublishedPlatforms(
    id: string,
    platformData: Record<string, any>,
    userId: string,
  ): Promise<Article> {
    const article = await this.findOne(id, userId);
    
    article.publishedPlatforms = {
      ...article.publishedPlatforms,
      ...platformData,
    };
    
    return this.articlesRepository.save(article);
  }

  async updateAiOptimizations(
    id: string,
    optimizationData: Record<string, any>,
    userId: string,
  ): Promise<Article> {
    const article = await this.findOne(id, userId);
    
    article.aiOptimizations = {
      ...article.aiOptimizations,
      ...optimizationData,
    };
    
    return this.articlesRepository.save(article);
  }

  async incrementViewCount(id: string): Promise<void> {
    await this.articlesRepository.increment({ id }, 'viewCount', 1);
  }
} 