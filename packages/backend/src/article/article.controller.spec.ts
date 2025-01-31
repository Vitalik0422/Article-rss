import { Test, TestingModule } from '@nestjs/testing';
import { RssController } from './article.controller';
import { RssService } from './article.service';

describe('RssController', () => {
  let controller: RssController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RssController],
      providers: [RssService],
    }).compile();

    controller = module.get<RssController>(RssController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
