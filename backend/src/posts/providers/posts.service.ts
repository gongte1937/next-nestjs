import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.servicce';

@Injectable()
export class PostsService {
  constructor(
    // injecting uer service
    private readonly userService: UsersService,
  ) {}
  public findAll(userId: string) {
    // find a user and return the post
    const user = this.userService.findOneById(userId);
    return [
      {
        user: user,
        title: 'Test Title1',
        content: 'Test content1',
      },
      {
        user: user,
        content: 'Test content2',
        title: 'Test Title2',
      },
    ];
  }
}
