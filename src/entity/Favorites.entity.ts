import { Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { Users } from './Users.entity';
import { Webtoons } from './Webtoons.entity';

@Entity()
export class Favorites {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'id_Users' })
  Users: Users;

  @ManyToOne(() => Webtoons)
  @JoinColumn({ name: 'id_Webtoons' })
  Webtoons: Webtoons;
}
