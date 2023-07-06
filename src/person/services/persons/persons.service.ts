import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonModel } from '../../../typeorm/entities/person.model';
import { Repository } from 'typeorm';
import { CreatePerson } from '../../../utils/types';

@Injectable()
export class PersonsService {
  constructor(
    @InjectRepository(PersonModel)
    private model: Repository<PersonModel>,
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  findPerson() {}

  createPerson(personDetails: CreatePerson) {
    const newPerson = this.model.create(personDetails);
    return this.model.save(newPerson);
  }
}
