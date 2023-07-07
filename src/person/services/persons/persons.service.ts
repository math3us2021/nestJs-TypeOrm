import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonModel } from '../../../typeorm/entities/person.model';
import { Repository } from 'typeorm';
import {
  CreatePerson,
  CreatePosts,
  CreateProfile,
  UpdatePersonParams,
} from '../../../utils/types';
import { Profile } from '../../../typeorm/entities/profile';
import { Posts } from '../../../typeorm/entities/posts';

@Injectable()
export class PersonsService {
  constructor(
    @InjectRepository(PersonModel)
    private model: Repository<PersonModel>,
    @InjectRepository(Profile)
    private profile: Repository<Profile>,
    @InjectRepository(Posts)
    private posts: Repository<Posts>,
  ) {}

  findPerson() {
    return this.model.find();
  }

  async createPerson(id: number, personDetails: CreatePerson) {
    const user = await this.profile.findOneBy({ id });
    if (!user) {
      throw new HttpException(
        'Usuario não encontrado, cadastre o username primeiro',
        HttpStatus.BAD_REQUEST,
      );
    }
    const newPerson = this.model.create(personDetails);
    const savePerson = await this.model.save(newPerson);
    user.profile = savePerson;
    return this.profile.save(user);
  }

  updatePerson(personDetails: UpdatePersonParams, id: number) {
    return this.model.update({ id }, { ...personDetails });
  }

  deletePerson(id: number) {
    this.model.delete({ id });
  }

  getProfile() {
    return this.profile.find({ relations: ['profile', 'posts'] });
  }

  createProfile(profileDetails: CreateProfile) {
    const newProfile = this.profile.create(profileDetails);
    return this.profile.save(newProfile);
  }

  getPosts() {
    return this.posts.find();
  }
  async createPosts(id: number, postsDetails: CreatePosts) {
    const user = await this.profile.findOneBy({ id });
    if (!user) {
      throw new HttpException(
        'Usuario não encontrado, cadastre o username primeiro',
        HttpStatus.BAD_REQUEST,
      );
    }
    const newPosts = this.posts.create({
      ...postsDetails,
      user: user,
    });
    return this.posts.save(newPosts);
  }
}
