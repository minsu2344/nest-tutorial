import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  // 배열 형식 지정
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }
}
