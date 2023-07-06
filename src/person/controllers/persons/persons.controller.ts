import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePersonDto } from '../../dtos/createPerson.dto';
import { PersonsService } from '../../services/persons/persons.service';

@Controller('persons')
export class PersonsController {
  constructor(private personService: PersonsService) {}

  @Get()
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  getPerson() {}

  @Post()
  createPerson(@Body() data: CreatePersonDto) {
    this.personService.createPerson(data);
  }
}
