import { CreateMovieDto } from './create-movie.dto';
import { PartialType } from '@nestjs/mapped-types';

// 데코레이터로 추가할 데이터 타입 검증 가능
// CreateMovieDto의 타입을 ?를 붙여 부분적으로 받을 수 있음
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}