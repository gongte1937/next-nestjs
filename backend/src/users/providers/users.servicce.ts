import { Injectable } from '@nestjs/common';
import { GetUsersParamsDto } from '../dtos/get-users-params.dto';

@Injectable()
export class UsersService {
  public findAll(
    getUserParamDto: GetUsersParamsDto,
    limit: number,
    page: number,
  ) {
    return [
      {
        firstName: 'John',
        email: 'John@email.com',
      },
      {
        firstName: 'Terry',
        email: 'Terry@email.com',
      },
    ];
  }

  public findOneById(id: number) {
    return {
      id: 1234,
      firstName: 'Alice',
      email: 'alice@doe.com',
    };
  }
}
