const { Router } = require("express");
const CategoriasRoutes = new Router();
const CategoriasController = require("../../controllers/inventory/CategoriasController");
const Authorization = require("../../middlewares/Authorization");
CategoriasRoutes.get("/", CategoriasController.getAll);
CategoriasRoutes.post("/", Authorization, CategoriasController.create);
module.exports = CategoriasRoutes;
