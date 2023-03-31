import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { Module } from '@nestjs/common';

@Module({
  // 여기에 controllers와 providers 넣으면 app.module에서 뺌
  // 모듈을 분리해두는 게 좋음
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
