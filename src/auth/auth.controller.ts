import { Controller, Post, Get } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller()
export class AuthController {
  @Post('/sign-in')
  async signIn() {
    // await this.usersService.createUser();
    //user find
    //find
    //compare password
    //match send token
    //not match show incroeect pass
    //not find
    //not find not found user
  }
  @Post('/sign-up')
  async signUp() {
    // await this.usersService.createUser();
  }
  @Get('/logout')
  async logout() {
    // await this.usersService.createUser();
  }
}
