import Item from '../../models/Item';
import IItemRepository from '../../repositories/item/IItemRepository';
import ItemRepository from '../../repositories/item/ItemRepository';

interface Request {
  name: string;
  amount: number;
  user_id: string;
}
class CreateItemService {
  private itemRepository: IItemRepository;

  constructor(itemRepository: ItemRepository) {
    this.itemRepository = itemRepository;
  }

  public async execute({ user_id, name, amount }: Request): Promise<Item> {
    const item = await this.itemRepository.create({
      name,
      amount,
      user_id,
    });

    return item;
  }
}

export default CreateItemService;
