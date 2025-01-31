import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateRssDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  link: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  enclosure: string;
}
