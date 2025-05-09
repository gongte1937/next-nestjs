/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamsDto } from './dtos/get-users-params.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.servicce';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(
    // Injecting user service
    private readonly userService: UsersService,
  ) {}

  @Get(':id')
  @ApiOperation({
    summary: 'Fetch a list of registered users on applications',
  })
  @ApiResponse({
    status: 200,
  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    required: false,
  })
  public getUsers(
    @Param() getUserParamDto: GetUsersParamsDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log({ getUserParamDto });
    console.log(typeof getUserParamDto);
    return this.userService.findAll(getUserParamDto, limit, page);
  }

  @Post()
  public createUser(@Body() createUserDto: CreateUserDto) {
    console.log({ createUserDto });
    console.log(typeof createUserDto);
    return this.userService.createUser(createUserDto);
  }

  @Patch()
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    console.log({ patchUserDto });
    console.log(typeof patchUserDto);
    return 'User patched!';
  }
}
