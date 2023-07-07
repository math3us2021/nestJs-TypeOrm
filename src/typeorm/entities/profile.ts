import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PersonModel } from './person.model';
import { Posts } from './posts';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  username: string;

  @Column({ length: 100 })
  password: string;

  @Column({ nullable: true })
  authStrategy: string;

  @OneToOne(() => PersonModel)
  @JoinColumn()
  profile: PersonModel;

  @OneToMany(() => Posts, (post) => post.user)
  posts: Posts[];
}
