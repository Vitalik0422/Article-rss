import { Injectable } from '@nestjs/common';
import { CreateRssDto } from './dto/create-article.dto';
import * as Parser from 'rss-parser';
import { PrismaService } from 'src/prisma/prisma.service';
// import { Cron } from '@nestjs/schedule';
import { RssSourceService } from 'src/rss-source/rss-source.service';

@Injectable()
export class ArticleService {
  private readonly parser: Parser;

  constructor(
    private readonly rssSourceService: RssSourceService,
    private readonly prisma: PrismaService,
  ) {
    this.parser = new Parser({
      customFields: {
        item: ['title', 'link', 'enclosure'],
      },
    });
  }
  // @Cron('*/10 * * * * *')
  async parse() {
    const rssUrlList = await this.rssSourceService.findAll();
    for (const item of rssUrlList) {
      const data = await this.parser.parseURL(item.url);
      const newData = Array.from(
        new Map(
          data.items.map((items) => [
            items.title,
            {
              title: items.title!,
              link: items.link!,
              enclosure: items.enclosure!.url,
            },
          ]),
        ).values(),
      );
      return await this.create(newData);
    }
  }

  async create(createRssDto: CreateRssDto[]) {
    try {
      const existingTitles = await this.prisma.article.findMany({
        select: {
          title: true,
        },
      });
      const existingTitlesSet = new Set(
        existingTitles.map((article) => article.title),
      );
      const newArticles = createRssDto.filter(
        (article) => !existingTitlesSet.has(article.title),
      );
      if (newArticles.length > 0) {
        const response = await this.prisma.article.createMany({
          data: newArticles,
        });
        console.log('Create new article', response);
        return;
      } else {
        console.log('No new article');
        return { count: 0 };
      }
    } catch (error) {
      console.log('Error creating article:', error);
      throw error;
    }
  }

  async findAll() {
    return await this.prisma.article.findMany();
  }
}
