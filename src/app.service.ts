import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Nest!';
  }

  getHi(): string {
    return 'Hi Nest';
  }
}
// controller에서 사용하는 함수를 만드는 곳이 service의 역할
// 비즈니스 로직을 실행하는 역할
