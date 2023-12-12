import { Module } from '@nestjs/common';
//import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './ormconfig';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    //ConfigModule.forRoot(),
    TypeOrmModule.forRoot(config), // Utilisation du fichier ormconfig.js
  ],
})
export class AppModule {}
