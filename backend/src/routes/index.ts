import { Router } from 'express';
import userRoutes from './user';
import sessionRoutes from './session';

const routes = Router();
const prefixRoutes = '/api/v1';

routes.get('/', (request, response) => response.json({ message: 'Hello Alex Borelli' }));

routes.use(`${prefixRoutes}/sessions`, sessionRoutes);
routes.use(`${prefixRoutes}/users`, userRoutes);

export default routes;
