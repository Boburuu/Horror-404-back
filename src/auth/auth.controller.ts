import { Controller, Post } from '@nestjs/common';
import { sign } from 'crypto';

@Controller('auth')
export class AuthController {
  //create methode
  @Post('signup')
  signup() {
    return 'signup';
  }
}
