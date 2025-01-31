import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
export class CreateRssSourceDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string

    @ApiProperty()
    @IsString()
    @IsUrl()
    @IsNotEmpty()
    url: string
}
