import { Injectable } from '@nestjs/common';
import { CreateRssSourceDto } from './dto/create-rss-source.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RssSourceService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createRssSourceDto: CreateRssSourceDto) {
    await this.prisma.rssURL.create({
      data: { ...createRssSourceDto }
    })
    return 'This action adds a new rssSource';
  }

  async findAll() {
    return await this.prisma.rssURL.findMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} rssSource`;
  }

  update(id: number,) {
    return `This action updates a #${id} rssSource`;
  }

  remove(id: number) {
    return `This action removes a #${id} rssSource`;
  }
}
