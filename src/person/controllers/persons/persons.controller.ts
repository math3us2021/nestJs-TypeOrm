import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePersonDto } from '../../dtos/createPerson.dto';
import { PersonsService } from '../../services/persons/persons.service';
import { UpdatePersonDto } from '../../dtos/updatePerson.dto';

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
    @Body() data: UpdatePersonDto,
  ) {
    return await this.personService.updatePerson(data, id);
  }

  @Delete(':id')
  async deletePerson(@Param('id', ParseIntPipe) id: number) {
    await this.personService.deletePerson(id);
    return 'Person deleted successfully';
  }
}
