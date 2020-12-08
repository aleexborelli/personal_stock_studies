import { Request, Response } from 'express';
import ItemRepository from '../repositories/item/ItemRepository';
import CreateItemService from '../services/Item/CreateItemService';

class ItemController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, amount, user_id } = request.body;

    const itemRepository = new ItemRepository();
    const createItem = new CreateItemService(itemRepository);

    const user = await createItem.execute({
      name, amount, user_id,
    });

    return response.json(user);
  }
}

export default ItemController;
