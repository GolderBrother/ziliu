import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as compression from 'compression';
import * as helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 全局前缀
  app.setGlobalPrefix('api');

  // 全局管道
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  // 安全和性能中间件
  app.use(helmet());
  app.use(compression());

  // CORS
  app.enableCors();

  // Swagger 文档
  const config = new DocumentBuilder()
    .setTitle('字流 API')
    .setDescription('字流多平台内容发布工具 API 文档')
    .setVersion('1.0')
    .addTag('auth', '认证相关')
    .addTag('users', '用户相关')
    .addTag('articles', '文章相关')
    .addTag('platforms', '平台相关')
    .addTag('templates', '模板相关')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`应用已启动: http://localhost:${port}`);
  console.log(`API 文档: http://localhost:${port}/docs`);
}
bootstrap(); 