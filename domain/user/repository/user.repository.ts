import { UserValue } from "../dal/user.value";

export interface UserRepository {
  findUserById(uuid: string): Promise<UserValue>;
  registerUser(user: UserValue): Promise<UserValue>;
  listUser(): Promise<UserValue[]>;
}
