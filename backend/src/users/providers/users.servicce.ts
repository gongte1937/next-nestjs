import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersParamsDto } from '../dtos/get-users-params.dto';
import { AuthService } from 'src/auth/auth.service';
import { Repository } from 'typeorm';
import { User } from '../users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    // Injecting usersRepository
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    // Inject auth service
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  public async createUser(createUserDto: CreateUserDto) {
    // check if the user already exist with same email
    const existingUser = await this.usersRepository.findOne({
      where: { email: createUserDto.email },
    });
    // handle exception

    // create a new user
    let newUser = this.usersRepository.create(createUserDto);
    newUser = await this.usersRepository.save(newUser);

    return newUser;
  }

  public findAll(
    getUserParamDto: GetUsersParamsDto,
    limit: number,
    page: number,
  ) {
    const isAuth = this.authService.isAuth();
    console.log(isAuth);
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

  public findOneById(id: string) {
    return {
      id: 1234,
      firstName: 'Alice',
      email: 'alice@doe.com',
    };
  }
}
