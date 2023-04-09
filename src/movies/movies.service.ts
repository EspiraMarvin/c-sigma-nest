import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  private movies = [
    { id: 1, name: 'Fury' },
    { id: 2, name: 'All Quiet On The Western Front' },
  ];

  create(newMovie: CreateMovieDto) {
    const id = this.movies.length + 1;
    const movie = { id: id, name: newMovie.name };
    this.movies.push(movie);
    return movie;
  }

  findAll() {
    return this.movies;
  }

  findOne(id: number) {
    const movie = this.movies.find((movie) => movie.id === id);
    if (!movie) {
      throw new Error('Movie not found');
    }
    return movie;
  }

  update(id: number, updatedMovie: UpdateMovieDto) {
    this.movies = this.movies.map((movie) => {
      return movie.id === id ? { ...movie, name: updatedMovie.name } : movie;
    });
    return this.findOne(id);
  }

  remove(id: number) {
    const toBeRemoved = this.findOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== id);
    return toBeRemoved;
  }
}
