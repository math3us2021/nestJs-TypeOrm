import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PersonsService } from '../../services/persons/persons.service';
import { CreatePostsDto } from '../../dtos/createPosts.dto';

@Controller('posts')
export class PostsController {
  constructor(private personService: PersonsService) {}

  @Get()
  async getPosts() {
    return await this.personService.getPosts();
  }

  @Post(':id')
  createPosts(@Param('id') id: number, @Body() data: CreatePostsDto) {
    return this.personService.createPosts(id, data);
  }
}
