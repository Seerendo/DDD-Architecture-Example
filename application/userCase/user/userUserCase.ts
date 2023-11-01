import { UserRepository } from '/domain/repositories/user/user.repository';
import { UserValue } from '/domain/dal/user/user.value';

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
  };
}
