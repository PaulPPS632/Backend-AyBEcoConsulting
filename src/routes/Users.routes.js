import { Router } from 'express';
import UsersController from '../controllers/UsersController.js';

// import all controllers
// import SessionController from './app/controllers/SessionController';

const UsersRoutes = new Router();

// Add routes
UsersRoutes.get('/', UsersController.show);
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

export default UsersRoutes;
