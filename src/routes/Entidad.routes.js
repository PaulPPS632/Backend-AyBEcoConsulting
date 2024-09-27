const { Router } = require("express");
const EntidadController = require("../controllers/users/EntidadController.js");
const Authorization = require("../middlewares/Authorization.js");

const EntidadRoutes = Router();

// Add routes
EntidadRoutes.get("/", Authorization, EntidadController.getAll);
EntidadRoutes.post("/", Authorization, EntidadController.create);
EntidadRoutes.get(
  "/dashboard",
  Authorization,
  EntidadController.getAllDashboard
);
EntidadRoutes.put("/asignarrol", Authorization, EntidadController.UpdateRol);
module.exports = EntidadRoutes;
