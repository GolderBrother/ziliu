import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ArticleStatus } from './entities/article.entity';

@ApiTags('articles')
@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiBearerAuth()
  @ApiOperation({ summary: '创建新文章' })
  @ApiResponse({ status: 201, description: '文章创建成功' })
  create(@Body() createArticleDto: CreateArticleDto, @Request() req) {
    return this.articlesService.create(createArticleDto, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiBearerAuth()
  @ApiOperation({ summary: '获取当前用户的所有文章' })
  @ApiResponse({ status: 200, description: '成功获取文章列表' })
  findAll(@Request() req) {
    return this.articlesService.findAll(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: '根据ID获取文章' })
  @ApiResponse({ status: 200, description: '成功获取文章' })
  @ApiResponse({ status: 404, description: '文章不存在' })
  findOne(@Param('id') id: string, @Request() req) {
    return this.articlesService.findOne(id, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: '更新文章' })
  @ApiResponse({ status: 200, description: '文章更新成功' })
  @ApiResponse({ status: 404, description: '文章不存在' })
  update(
    @Param('id') id: string,
    @Body() updateArticleDto: UpdateArticleDto,
    @Request() req,
  ) {
    return this.articlesService.update(id, updateArticleDto, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiBearerAuth()
  @ApiOperation({ summary: '删除文章' })
  @ApiResponse({ status: 200, description: '文章删除成功' })
  @ApiResponse({ status: 404, description: '文章不存在' })
  remove(@Param('id') id: string, @Request() req) {
    return this.articlesService.remove(id, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/status')
  @ApiBearerAuth()
  @ApiOperation({ summary: '更新文章状态' })
  @ApiResponse({ status: 200, description: '状态更新成功' })
  @ApiResponse({ status: 404, description: '文章不存在' })
  updateStatus(
    @Param('id') id: string,
    @Body('status') status: ArticleStatus,
    @Request() req,
  ) {
    return this.articlesService.updateStatus(id, status, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/platforms')
  @ApiBearerAuth()
  @ApiOperation({ summary: '更新文章发布平台信息' })
  @ApiResponse({ status: 200, description: '平台信息更新成功' })
  @ApiResponse({ status: 404, description: '文章不存在' })
  updatePlatforms(
    @Param('id') id: string,
    @Body() platformData: Record<string, any>,
    @Request() req,
  ) {
    return this.articlesService.updatePublishedPlatforms(id, platformData, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/ai-optimizations')
  @ApiBearerAuth()
  @ApiOperation({ summary: '更新文章AI优化信息' })
  @ApiResponse({ status: 200, description: 'AI优化信息更新成功' })
  @ApiResponse({ status: 404, description: '文章不存在' })
  updateAiOptimizations(
    @Param('id') id: string,
    @Body() optimizationData: Record<string, any>,
    @Request() req,
  ) {
    return this.articlesService.updateAiOptimizations(id, optimizationData, req.user.id);
  }
} 