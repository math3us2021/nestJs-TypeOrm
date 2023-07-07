import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Profile } from './profile';

@Entity() /// se eu passar o nome aqui dentro ele vai criar uma tabela com o nome que eu passar
export class PersonModel {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100 })
  name: string;
  @Column('int')
  age: number;
  @Column({ length: 100 })
  email: string;
}
