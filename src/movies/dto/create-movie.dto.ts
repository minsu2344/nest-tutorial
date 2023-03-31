import { IsString, IsNumber, IsOptional } from 'class-validator';

// 데코레이터로 추가할 데이터 타입 검증 가능
export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString({each: true})
  readonly genres: string[];
}