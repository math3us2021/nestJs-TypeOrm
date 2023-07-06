import { Module } from '@nestjs/common';
import { PersonsController } from './controllers/persons/persons.controller';
import { PersonsService } from './services/persons/persons.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModel } from '../typeorm/entities/person.model';

@Module({
  imports: [TypeOrmModule.forFeature([PersonModel])],
  controllers: [PersonsController],
  providers: [PersonsService],
})
export class PersonModule {}
