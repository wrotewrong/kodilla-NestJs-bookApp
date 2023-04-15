/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty()
  @IsString()
  @Length(3, 100)
  email: string;

  //   @IsNotEmpty()
  //   @IsString()
  //   password: string;
}
