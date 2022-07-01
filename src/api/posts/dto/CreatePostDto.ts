import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  Length,
} from 'class-validator';

export class CreatePostDto {

  @IsString()
  @Length(5, 52)
  @ApiProperty()
  title: string;

  @IsString()
  @Length(20, 1000)
  @ApiProperty()
  body: string;

  @IsString()
  @Length(1, 52)
  @ApiProperty()
  image: string;

}
