import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonModel } from '../models/person.model';
import { Repository } from 'typeorm';

@Controller('/person')
export class PersonController {
  constructor(
    @InjectRepository(PersonModel) private model: Repository<PersonModel>,
  ) {}
  @Post()
  public create(): any {
    return { data: 'Create person' };
  }
  @Get()
  public findAll(): any {
    return { data: 'Find all person' };
  }
  @Get(':id')
  public async findOne(): Promise<{ data: PersonModel[] }> {
    const list = await this.model.find();
    return { data: list };
  }
  @Put(':id')
  public update(): any {
    return { data: 'Update person' };
  }
  @Delete(':id')
  public remove(): any {
    return { data: 'Remove person' };
  }
}
