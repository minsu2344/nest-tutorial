import { Controller, Get } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';

// @Controller()에 있는 'movies가 컨트롤러의 기본 url이 됨
// 따라서 @Get()을 해도 '/'가 아닌 '/movies'의 경로 지정
@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  // params로 id 전달
  // 함수에 파라미터 넣을 때
  // @Param()을 이용해 @Get()의 params와 이름 같아야 함(ex: id)
  // 매개변수는 이름 다르게 해도 무방(movieId)
  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with the id: ${movieId}`;
  }
}
