import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Check,
} from 'typeorm';
import { Users } from './Users.entity';
import { Webtoons } from './Webtoons.entity';

@Entity()
@Check(`"note" >= 1 AND "note" <= 5`)
export class Rating {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users)
  Users: Users;

  @ManyToOne(() => Webtoons)
  Webtoons: Webtoons;

  @Column({
    type: 'int',
  })
  note: number;
}
