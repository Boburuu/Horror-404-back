//Importations de validaion grace à la command de nest $ npm i --save class-validator class-transformer
import { IsNotEmpty, IsEmail } from 'class-validator';

export class SignupDto {
  //Définir des propriétées
  @IsNotEmpty()
  readonly user_name: string;
  @IsEmail()
  readonly mail: string;
  @IsNotEmpty()
  readonly password: string;
}
