import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryColumn({ nullable: false })
  name: string;

  @Column()
  email: string;

  @Column()
  description: string;

  constructor(name: string, email: string, description: string) {
    super();
    this.name = name;
    this.email = email;
    this.description = description;
  }
}
