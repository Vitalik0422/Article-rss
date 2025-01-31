import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { HttpModule } from '@nestjs/axios';
import { ScheduleModule } from '@nestjs/schedule';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RssSourceModule } from 'src/rss-source/rss-source.module';
import { RssSourceService } from 'src/rss-source/rss-source.service';

@Module({
  imports: [HttpModule, RssSourceModule, ScheduleModule.forRoot(), PrismaModule],
  controllers: [ArticleController],
  providers: [ArticleService, RssSourceService],
})
export class ArticleModule {}
