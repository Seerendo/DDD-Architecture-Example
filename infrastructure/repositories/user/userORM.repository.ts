import { DataSource, Repository } from "typeorm";
import { UserValue } from "../../../domain/user/dal/user.value";
import { UserRepository } from "../../../domain/user/repository/user.repository";
import { UserORM } from "../../model/user/user.schema";

export class UserORMRepository implements UserRepository {
 
  async findUserById(uuid: string): Promise<UserValue> {
    throw new Error("Method not implemented.");
  }
  async registerUser(user: UserValue): Promise<UserValue> {
    throw new Error("Method not implemented.");
  }
  async listUser(): Promise<UserValue[]> {
    const userModel = await UserORM.find();
    const user: UserValue[] = userModel.map((userORM: UserORM) => userORM.toUser());
    return user;
  }
}
