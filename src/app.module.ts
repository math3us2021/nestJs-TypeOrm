import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModel } from './typeorm/entities/person.model';
import { PersonModule } from './person/person.module';
import { Profile } from './typeorm/entities/profile';
import { PersonsController } from './person/controllers/persons/persons.controller';
import { Posts } from './typeorm/entities/posts';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'ma020490@',
      database: 'crud_typeorm',
      entities: [PersonModel, Profile, Posts],
      synchronize: true,
    }),
    PersonModule,
  ],
})
export class AppModule {}
