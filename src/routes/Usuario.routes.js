import { Router } from 'express';
import UsuarioController from '../controllers/UsuarioController.js';

// import all controllers
// import SessionController from './app/controllers/SessionController';

const UsuarioRoutes = new Router();

// Add routes
UsuarioRoutes.get('/', UsuarioController.show);
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

export default UsuarioRoutes;
