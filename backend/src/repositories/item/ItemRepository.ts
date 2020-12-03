import { response } from 'express';
import { getRepository, Repository } from 'typeorm';
import CreateItemDTO from '../../dtos/CreateItemDTO';
import Item from '../../models/Item';
import IItemRepository from './IItemRepository';

class ItemRepository implements IItemRepository {
  private ormRepository: Repository<Item>;

  constructor() {
    this.ormRepository = getRepository(Item);
  }

  public async findByUserId(user_id: string): Promise<Item[] | undefined> {
    const item = this.ormRepository.find({
      where: { user_id },
    });

    return item;
  }

  public async create({ name, amount, user_id }: CreateItemDTO): Promise<Item> {
    const item = this.ormRepository.create({
      name, amount, user_id,
    });

    await this.ormRepository.save(item);

    return response.json(item);
  }

  public async save(item: Item): Promise<Item> {
    throw new Error('Method not implemented.');
  }
}

export default ItemRepository;
