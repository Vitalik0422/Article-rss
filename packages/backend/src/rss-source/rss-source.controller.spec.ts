import { Test, TestingModule } from '@nestjs/testing';
import { RssSourceController } from './rss-source.controller';
import { RssSourceService } from './rss-source.service';

describe('RssSourceController', () => {
  let controller: RssSourceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RssSourceController],
      providers: [RssSourceService],
    }).compile();

    controller = module.get<RssSourceController>(RssSourceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
