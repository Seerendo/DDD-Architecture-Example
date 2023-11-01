import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';
import { UserValue } from '../../../domain/user/dal/user.value';

@Entity('users')
export class UserORM extends BaseEntity {
  @PrimaryColumn({ nullable: false })
  uuid: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  description: string;

  toUser() : UserValue {
    let user = new UserValue();
    user.name = this.name;
    user.email = this.email;
    user.description = this.description;
    return user;
  }

  fromUser(user: UserValue) {
    this.name = user.name;
    this.email = user.email;
    this.description = user.description;
    return this;
  }
}
