import {
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  JoinColumn,
} from 'typeorm';
import { Users } from './Users.entity';
import { Webtoons } from './Webtoons.entity';

@Entity()
export class Comments {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'id_Users' })
  Users: Users;

  @ManyToOne(() => Webtoons)
  @JoinColumn({ name: 'id_Webtoons' })
  Webtoons: Webtoons;

  @CreateDateColumn({
    name: 'date_writing',
    type: 'datetime',
  })
  date_writing: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updated_at: Date;
}
