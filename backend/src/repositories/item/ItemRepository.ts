import { getRepository, Repository } from 'typeorm';
import CreateItemDTO from '../../dtos/CreateItemDTO';
import Item from '../../models/Item';
import User from '../../models/User';
import UserRepository from '../user/UserRepository';
import IItemRepository from './IItemRepository';

class ItemRepository implements IItemRepository {
  private ormRepository: Repository<Item>

  constructor() {
    this.ormRepository = getRepository(Item);
  }

  public async findByUserId(user: string): Promise<Item[] | undefined> {
    const item = await this.ormRepository.find({
      where: { user },
    });

    return item;
  }

  public async create({ name, amount, user }: CreateItemDTO): Promise<Item> {
    const item = this.ormRepository.create({
      name, amount, user,
    });

    await this.ormRepository.save(item);

    return item;
  }

  public async save(item: Item): Promise<Item> {
    throw new Error('Method not implemented.');
  }
}

export default ItemRepository;
