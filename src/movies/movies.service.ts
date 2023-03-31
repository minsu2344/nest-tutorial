import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  // 배열 형식 지정
  private movies: Movie[] = [];

  // controller에 있던 함수 옮기기
  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    const movie = this.movies.find((movie: Movie) => movie.id === +id);
    if(!movie) {
      throw new NotFoundException(`Movie id ${id} not found.`);
    }
    return movie;
  }

  deleteOne(id: string) {
    this.getOne(id);
    this.movies = this.movies.filter(movie => movie.id !== +id);
  }

  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  update(id: string, updateData) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({...movie, ...updateData});
  }
}
