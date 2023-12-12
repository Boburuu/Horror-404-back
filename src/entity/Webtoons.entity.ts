import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { Users } from './Users.entity';

@Entity()
export class Webtoons {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    name: 'title',
  })
  title: string;

  @CreateDateColumn({
    name: 'created_at',
  })
  created_at: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updated_at: Date;

  @ManyToOne(() => Users, { eager: true })
  @JoinColumn({ name: 'id_user' })
  user: Users;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'validate_at',
  })
  validate_at: Date;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    name: 'path_drawing_board',
  })
  path_drawing_board: string;

  @Column({
    type: 'enum',
    nullable: false,
    enum: ['pending', 'approuved', 'rejected'],
    name: 'statut_validation',
  })
  statut_validation: string;
}
