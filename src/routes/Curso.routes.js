import { Router } from 'express';
import CursoController from '../controllers/CursoController.js';
// import all controllers
// import SessionController from './app/controllers/SessionController';

const CursoRoutes = new Router();

// Add routes
CursoRoutes.get('/', CursoController.store);
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);
export default CursoRoutes;
