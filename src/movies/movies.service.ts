import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  movies = [
    { id: 1, name: 'Fury' },
    { id: 2, name: 'All Quiet On The Western Front' },
    { id: 3, name: 'The Resistance Banker' },
    { id: 4, name: 'The Thin Red Line' },
    { id: 5, name: 'Saving Private Ryan' },
  ];

  create(createMovieDto: CreateMovieDto) {
    const id = this.movies.length + 1;
    const movie = { id: id, name: createMovieDto.name };
    this.movies.push(movie);
    return movie;
  }

  findAll() {
    return this.movies;
  }

  findOne(id: number) {
    return this.movies.find((movie) => movie.id === id);
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return (this.movies = this.movies.map((movie) => {
      return movie.id === id ? { ...movie, name: updateMovieDto.name } : movie;
    }));
  }

  remove(id: number) {
    return (this.movies = this.movies.filter((movie) => movie.id !== id));
  }
}
