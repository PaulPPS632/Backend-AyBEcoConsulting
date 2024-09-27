const { Router } = require("express");
const CoursesController = require("../controllers/CoursesController.js");
// import all controllers
// import SessionController from './app/controllers/SessionController';

const CoursesRoutes = Router();

// Add routes
CoursesRoutes.get("/", CoursesController.store);
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);
module.exports = CoursesRoutes;
