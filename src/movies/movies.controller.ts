import { Controller, Get } from '@nestjs/common';

// @Controller()에 있는 'movies가 컨트롤러의 기본 url이 됨
// 따라서 @Get()을 해도 '/'가 아닌 '/movies'의 경로 지정
@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  // params로 id 전달
  @Get('/:id')
  getOne() {
    return 'This will return one movie';
  }
}
