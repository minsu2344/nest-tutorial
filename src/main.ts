import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 유효성 검사용 파이프 생성(미들웨어)
  // 검증 데코레이터을 자동으로 적용(@IsString 등)
  app.useGlobalPipes(new ValidationPipe({
    // 검증 데코레이터가 없는 프로퍼티는 무시
    whitelist: true,
    // 존재하지 않는 요소에서 에러 띄워줌
    forbidNonWhitelisted: true,
    // 받은 데이터를 사용자가 정한 타입으로 자동 변경
    transform: true,
    
  }));
  await app.listen(3000);
}
bootstrap();
