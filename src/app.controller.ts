// 데코레이터 import 해야 함
import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @를 붙인 것을 '데코레이터'라고 함(express에서 app.get() 역할)
  // 데코레이터는 꾸며주는 함수나 클래스와 꼭 붙어있어야 함
  @Get('/hello')
  // 여기를 띄우면 데코레이터가 인식을 못함
  sayHello(): string {
    return 'Hello everyone';
  }

  // Post도 가능
  @Post('/hi')
  sayHi(): string {
    return 'hi hi';
  }
}
// controller는 url을 가져오는 오고 함수를 실행하는 역할
