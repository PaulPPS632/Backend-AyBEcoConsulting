const { Router } = require("express");
const EntidadController = require("../../controllers/users/EntidadController.js");
const Authorization = require("../../middlewares/Authorization.js");

const AuthRouter = Router();

// Add routes
AuthRouter.post("/login", EntidadController.login);
AuthRouter.post("/register", EntidadController.create);
AuthRouter.post("/private", Authorization, EntidadController.create);
AuthRouter.post("/validate", EntidadController.validate);

module.exports = AuthRouter;
