import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;
}
