import { Module } from '@nestjs/common';
import { UtilsService } from './services/utils.service';
import { ImageService } from './services/image.service';

@Module({
  providers: [UtilsService, ImageService],
  exports: [UtilsService, ImageService],
})
export class SharedModule {} 