import CreateUserDTO from '../../dtos/CreateUserDTO';
import User from '../../models/User';

export default interface IUserRepository{
  findByEmail(email: string): Promise<User | undefined>;
  create(user: CreateUserDTO): Promise<User>;
  save(user: User): Promise<User>;
}
