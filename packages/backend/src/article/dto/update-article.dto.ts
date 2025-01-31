import { PartialType } from '@nestjs/mapped-types';
import { CreateRssDto } from './create-article.dto';

export class UpdateRssDto extends PartialType(CreateRssDto) {}
