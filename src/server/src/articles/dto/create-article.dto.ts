import { IsNotEmpty, IsString, IsOptional, IsArray, IsEnum, IsObject } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ArticleStatus } from '../entities/article.entity';

export class CreateArticleDto {
  @ApiProperty({ example: '如何使用AI提升写作效率' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: '# 如何使用AI提升写作效率\n\n在内容创作领域...' })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiPropertyOptional({ example: '本文介绍了使用AI工具提升写作效率的三个核心技巧' })
  @IsString()
  @IsOptional()
  summary?: string;

  @ApiPropertyOptional({ example: ArticleStatus.DRAFT })
  @IsEnum(ArticleStatus)
  @IsOptional()
  status?: ArticleStatus;

  @ApiPropertyOptional({ example: ['AI', '写作', '效率'] })
  @IsArray()
  @IsOptional()
  tags?: string[];

  @ApiPropertyOptional({ example: 'cover-image.jpg' })
  @IsString()
  @IsOptional()
  coverImage?: string;

  @ApiPropertyOptional({ example: { wechat: { template: 'default' } } })
  @IsObject()
  @IsOptional()
  formatSettings?: Record<string, any>;
} 