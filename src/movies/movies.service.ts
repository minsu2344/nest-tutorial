import { Injectable } from '@nestjs/common';
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
    return this.movies.find((movie: Movie) => movie.id === +id);
  }
}
