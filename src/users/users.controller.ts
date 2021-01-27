import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create')
  async createUser() {
    await this.usersService.createUser();
  }

  @Get()
  findAll(): any {
    // return this.catsService.findAll();
    return 'asd';
  }
}
