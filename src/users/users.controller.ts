import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  NotFoundException,
  // Post,
  // Body,
  // Put,
  // Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
// import { CreateUserDTO } from './dtos/create.user.dto';
// import { UpdateUserDTO } from './dtos/update.user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('/')
  getAll(): any {
    return this.userService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const user = await this.userService.getById(id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  // @Get('/mail/:email')
  // async getByEmail(@Param('email') email: string) {
  //   const user = await this.userService.getByEmail(email);
  //   if (!user) throw new NotFoundException('User not found');
  //   return user;
  // }

  // @Post('/')
  // create(@Body() userData: CreateUserDTO, @Body('password') password: string) {
  //   return this.userService.create(password, userData);
  // }

  // @Put('/:id')
  // async update(
  //   @Param('id', new ParseUUIDPipe()) id: string,
  //   @Body() userData: UpdateUserDTO,
  //   @Body('password') password: string,
  // ) {
  //   if (!(await this.userService.getById(id)))
  //     throw new NotFoundException('User not found');

  //   await this.userService.updateById(id, password, userData);
  //   return { success: true };
  // }

  // @Delete('/:id')
  // async deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
  //   if (!(await this.userService.getById(id)))
  //     throw new NotFoundException('User not found');
  //   await this.userService.deleteById(id);
  //   return { success: true };
  // }
}
