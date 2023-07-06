import { Module } from '@nestjs/common';
import { PersonController } from '../controlllers/person.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModel } from '../models/person.model';

@Module({
  imports: [TypeOrmModule.forFeature([PersonModel])],
  controllers: [PersonController],
})
export class PersonModules {}
