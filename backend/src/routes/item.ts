import { Router } from 'express';
import ItemController from '../controllers/ItemController';

const itemRoutes = Router();
const itemController = new ItemController();

itemRoutes.post('/', itemController.create);

export default itemRoutes;
