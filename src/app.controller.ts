import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): object {
    return this.appService.getHello();
  }


  @Get('/hello')
  getHello2() {
    return{
      msg:"from controller seccond end point"
    }
  }
}
