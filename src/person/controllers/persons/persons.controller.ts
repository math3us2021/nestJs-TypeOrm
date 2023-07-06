import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePersonDto } from '../../dtos/createPerson.dto';
import { PersonsService } from '../../services/persons/persons.service';
import { UpdatePerson } from '../../../../dist/person/dtos/updatePerson';

@Controller('persons')
export class PersonsController {
  constructor(private personService: PersonsService) {}

  @Get()
  async getPerson() {
    return this.personService.findPerson();
  }

  @Post()
  createPerson(@Body() data: CreatePersonDto) {
    return this.personService.createPerson(data);
  }
  @Put(':id')
  async updatePerson(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdatePerson,
  ) {
    return await this.personService.updatePerson(data, id);
  }
}
