import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('app')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiBearerAuth()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/app')
  restHello(): string {
    return 'restHello';
  }
}
