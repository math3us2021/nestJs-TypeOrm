import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Profile } from './profile';

@Entity({ name: 'person_posts' })
export class Posts {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => Profile, (profile) => profile.posts)
  user: Profile;
}
