import { Module } from '@nestjs/common';
import { RssSourceService } from './rss-source.service';
import { RssSourceController } from './rss-source.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RssSourceController],
  providers: [RssSourceService],
})
export class RssSourceModule {}
