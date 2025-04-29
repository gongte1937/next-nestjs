import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.servicce';

@Injectable()
export class AuthService {
  constructor(
    //Injecting users service
    @Inject(forwardRef(() => UsersService))
    private readonly userService: UsersService,
  ) {}
  public login(email: string, password: string, id: string) {
    // check user exists database
    const user = this.userService.findOneById('1234');
    // login
    // token
    return 'sample token';
  }

  public isAuth() {
    return true;
  }
}
