/* eslint-disable prettier/prettier */
import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  
  appService: AppService
  constructor() {
    this.appService=new AppService()
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  sayHello() : string{
    return this.appService.getHello();
  }
}
