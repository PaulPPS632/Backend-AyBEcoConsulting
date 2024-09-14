import { Router } from 'express';
import CoursesController from '../controllers/CoursesController.js';
// import all controllers
// import SessionController from './app/controllers/SessionController';

const CoursesRoutes = new Router();

// Add routes
CoursesRoutes.get('/', CoursesController.store);
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);
export default CoursesRoutes;
