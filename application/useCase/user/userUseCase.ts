import { UserValue } from "../../../domain/user/dal/user.value";
import { UserRepository } from "../../../domain/user/repository/user.repository";

export class UserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  public async getAllUser(): Promise<UserValue[]> {
    return await this.userRepository.listUser();
  }

  public async registerUser(user: UserValue) {
    const userValue: UserValue = user;
    //Se puede aplicar por ejemplo descuentos si son compras, agregar valores, etc
    if(user.email === '') {
      throw new Error('Email is required');
    }
    
    const userCreated = await this.userRepository.registerUser(userValue);
    return userCreated;
  }
}
