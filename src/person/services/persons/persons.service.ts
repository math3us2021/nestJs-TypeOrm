import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonModel } from '../../../typeorm/entities/person.model';
import { Repository } from 'typeorm';
import { CreatePerson, UpdatePersonParams } from '../../../utils/types';

@Injectable()
export class PersonsService {
  constructor(
    @InjectRepository(PersonModel)
    private model: Repository<PersonModel>,
  ) {}

  findPerson() {
    return this.model.find();
  }

  createPerson(personDetails: CreatePerson) {
    const newPerson = this.model.create(personDetails);
    return this.model.save(newPerson);
  }

  updatePerson(personDetails: UpdatePersonParams, id: number) {
    return this.model.update({ id }, { ...personDetails });
  }
}
