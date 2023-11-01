import { UserValue } from "../../../domain/user/dal/user.value";
import { UserRepository } from "../../../domain/user/repository/user.repository";


export class UserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public async registerUser({ name, email, description}: {name: string; email: string; description: string;}) {
    const userValue = new UserValue({ name, email, description });
    const userCreated = await this.userRepository.registerUser(userValue);
    return userCreated;
  }

  public getDetailUSer = async (uuid: string) => {
    const user = await this.userRepository.findUserById(uuid);
    return user;
  }

  public async getUsers() {
    const users = await this.userRepository.listUser();
    return users;
  }
}
