import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // render html 带回去 一些数据
  @Get()
  @Render("index.html")
  getHello(): object {
    return {
      message: this.appService.getHello()
    }
  }
}
