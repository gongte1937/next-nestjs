import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  public getUsers() {
    return 'Hello, users!';
  }

  @Post()
  public createUser() {
    return 'User created!';
  }
}
