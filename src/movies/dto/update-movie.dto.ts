import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';
import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {
  @IsString()
  @IsNotEmpty()
  name: string;
}
