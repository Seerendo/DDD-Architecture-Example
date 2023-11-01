import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('users')
export class Process extends BaseEntity {
  @PrimaryColumn({ nullable: false })
  name: string;

  @Column()
  email: string;

  @Column()
  description: string;
}
