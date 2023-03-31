import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';
import { Controller, Get, Post } from '@nestjs/common';
import { Body, Delete, Param, Patch, Query, Req, Res } from '@nestjs/common/decorators';

// @Controller()에 있는 'movies가 컨트롤러의 기본 url이 됨
// 따라서 @Get()을 해도 '/'가 아닌 '/movies'의 경로 지정
@Controller('movies')
export class MoviesController {
  // 서비스에서 가져오기 위해 constructor 생성
  constructor(private readonly MoviesService: MoviesService) {}

  // getAll을 MovieService에서 가져오기
  @Get()
  // nest에서 express의 req res 사용하기(좋은 방법은 아님)
  getAll(@Req() req, @Res() res): Movie[] {
    return this.MoviesService.getAll();
  }

  // 검색
  // params를 받는 데코레이터보다 앞에 있어야 함
  //  뒤에 있으면 search를 id로 인식
  @Get('search')
  // @Query를 이용해 쿼리를 매개변수로 받아옴
  search(@Query('year') searchingYear: number) {
    return `searching movie made after ${searchingYear}`;
  }

  // params로 id 전달
  // 함수에 파라미터 넣을 때
  // @Param()을 이용해 @Get()의 params와 이름 같아야 함(ex: id)
  // 매개변수는 이름 다르게 해도 무방(movieId)
  // 서비스에서 가져오기로 변경
  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    return this.MoviesService.getOne(movieId);
  }

  // 같은 방식으로 @Post @Delete @Patch 작성
  @Post()
  // movieData 안의 body를 가져오기 위한 @Body 데코레이터
  create(@Body() movieData: CreateMovieDto) {
    // 이러면 insomnia preview에 작성한 데이터 뜸
    return this.MoviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.MoviesService.deleteOne(movieId);
  }

  // @Body()에 updateData 추가
  @Patch(':id')
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.MoviesService.update(movieId, updateData);
  }
}
