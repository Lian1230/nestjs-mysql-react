import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('users')
  async getPublishedPosts(): Promise<User[]> {
    return this.userService.users({});
  }
}
