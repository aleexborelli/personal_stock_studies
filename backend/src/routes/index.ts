import { Router } from 'express';
import userRoutes from './user';
import sessionRoutes from './session';
import itemRoutes from './item';

const routes = Router();
const prefixRoutes = '/api/v1';

routes.get('/', (request, response) => response.json({ message: 'Hello Alex Borelli' }));

routes.use(`${prefixRoutes}/sessions`, sessionRoutes);
routes.use(`${prefixRoutes}/users`, userRoutes);
routes.use(`${prefixRoutes}/items`, itemRoutes);

export default routes;
