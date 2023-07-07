import { Body, Controller, Get, Post } from '@nestjs/common';
import { PersonsService } from '../../services/persons/persons.service';
import { CreateProfileDto } from '../../dtos/createProfile.dto';

@Controller('profile')
export class ProfileController {
  constructor(private personService: PersonsService) {}

  @Get()
  async getProfile() {
    return await this.personService.getProfile();
  }

  @Post()
  createProfile(@Body() data: CreateProfileDto) {
    return this.personService.createProfile(data);
  }
}
