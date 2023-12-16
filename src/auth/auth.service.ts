import { Injectable } from '@nestjs/common';
import { SignupDto } from './dto/signupDTO';
//logique metier
@Injectable()
export class AuthService {
  signup(signupDto: SignupDto) {
    //Verifier si l'utilisateur est inscrit
    throw new Error('Not implemented');
  }
}
