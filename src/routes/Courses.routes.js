const { Router } = require("express");
const CoursesController = require("../controllers/inventory/CoursesController.js");
const Authorization = require("../middlewares/Authorization.js");
const upload = require("../middlewares/UploadImage.js");
const CoursesRoutes = Router();

// Add routes
CoursesRoutes.get("/", CoursesController.getAll);
CoursesRoutes.get("/home", CoursesController.getCursesHome);
CoursesRoutes.post(
  "/",
  [
    Authorization,
    upload.fields([
      { name: "fileprincipal", maxCount: 1 }, // Imagen principal
    ]),
  ],
  CoursesController.create
);
CoursesRoutes.get("/categoria/:id", CoursesController.getByCategoria);
CoursesRoutes.get("/:id", CoursesController.getById);

module.exports = CoursesRoutes;
