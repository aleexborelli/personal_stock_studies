import CreateItemDTO from '../../dtos/CreateItemDTO';
import Item from '../../models/Item';

export default interface IItemRepository {
  findByUserId(user_id: string): Promise<Item[] | undefined>;
  create(createItemDTO: CreateItemDTO): Promise<Item>;
  save(item: Item): Promise<Item>
};
