import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 72,
    nullable: false,
  })
  firstName: string;

  @Column({
    type: 'varchar',
    length: 72,
    nullable: true,
  })
  lastName: string;

  @Column({
    type: 'varchar',
    length: 72,
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 72,
    nullable: false,
  })
  password: string;
}
