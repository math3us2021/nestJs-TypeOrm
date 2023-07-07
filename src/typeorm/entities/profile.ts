import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PersonModel } from './person.model';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  username: string;

  @Column({ length: 100 })
  password: string;

  @OneToOne(() => PersonModel)
  @JoinColumn()
  profile: PersonModel;
}
