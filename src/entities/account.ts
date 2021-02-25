import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('account')
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uuid: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  mobile: string;
}
