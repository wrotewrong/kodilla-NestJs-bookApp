/* eslint-disable prettier/prettier */
import { IsString, Length, IsNotEmpty, IsEmail } from 'class-validator';
import { Match } from 'src/utils/match.decorator';

export class RegisterDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 40)
  password: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 40)
  @Match('password')
  passwordRepeat: string;
}
