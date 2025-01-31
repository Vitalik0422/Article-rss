import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RssSourceService } from './rss-source.service';
import { CreateRssSourceDto } from './dto/create-rss-source.dto';

@Controller('rss-source')
export class RssSourceController {
  constructor(private readonly rssSourceService: RssSourceService) {}

  @Post()
  create(@Body() createRssSourceDto: CreateRssSourceDto) {
    return this.rssSourceService.create(createRssSourceDto);
  }

  @Get()
  findAll() {
    return 'hello world';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rssSourceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.rssSourceService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rssSourceService.remove(+id);
  }
}
