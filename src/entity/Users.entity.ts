import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  BeforeInsert,
} from 'typeorm';

import * as bcrypt from 'bcrypt';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    name: 'user_name',
  })
  user_name: string;

  @Column({
    type: 'varchar',
    length: 500,
    nullable: true,
    name: 'avatar',
  })
  avatar: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    name: 'password',
    select: false,
  })
  password: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    name: 'mail',
  })
  mail: string;

  @Column({
    type: 'date',
    name: 'birthday',
    nullable: true,
  })
  birthday: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updated_at: Date;

  @CreateDateColumn({
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: Date;

  @BeforeInsert() async hashPassword() {
    this.password = await bcrypt.hash(this.password, 20);
  }
}
