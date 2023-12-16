import { Controller, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signupDTO';

@Controller('auth')
export class AuthController {
  //create methode
  constructor(private readonly authService: AuthService) {}
  //Recuperer les données du client utiliser le degrateur body - importé depuis nest et lui donnée un type (ici un dto)
  @Post('signup')
  signup(@Body() signupDto: SignupDto) {
    return this.authService.signup(signupDto);
  }
}
