import { Module } from '@nestjs/common';
//import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { TypeormModule } from './typeorm/typeorm.module';
import config from './ormconfig';

@Module({
  imports: [
    //ConfigModule.forRoot(),
    AuthModule,
    TypeOrmModule.forRoot(config),
    TypeormModule, // Utilisation du fichier ormconfig.js
  ],
})
export class AppModule {}
