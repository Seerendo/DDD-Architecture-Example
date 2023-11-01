import { v4 as uuid } from 'uuid';
import { UserEntity } from '../entity/user.entity';

export class UserValue implements UserEntity {
  name: string;
  email: string;
  uuid: string;
  description: string;

  constructor() {
    this.uuid = "";
    this.name = "";
    this.email = "";
    this.description = "";
  }
}
