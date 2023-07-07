import { Module } from '@nestjs/common';
import { PersonsController } from './controllers/persons/persons.controller';
import { PersonsService } from './services/persons/persons.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModel } from '../typeorm/entities/person.model';
import { ProfileController } from './controllers/profile/profile.controller';
import { Profile } from '../typeorm/entities/profile';

@Module({
  imports: [TypeOrmModule.forFeature([PersonModel, Profile])],
  controllers: [PersonsController, ProfileController],
  providers: [PersonsService],
})
export class PersonModule {}
