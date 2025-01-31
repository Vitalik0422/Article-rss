import { Test, TestingModule } from '@nestjs/testing';
import { RssSourceService } from './rss-source.service';

describe('RssSourceService', () => {
  let service: RssSourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RssSourceService],
    }).compile();

    service = module.get<RssSourceService>(RssSourceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
