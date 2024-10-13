const { Router } = require("express");
const Authorization = require("../../middlewares/Authorization.js");
const VideosController = require("../../controllers/global/VideosController.js");
const UploadVideo = require("../../middlewares/UploadVideo.js");

const VideosRoutes = Router();

// Add routes
VideosRoutes.post("/", [Authorization, UploadVideo], VideosController.create);
VideosRoutes.get("/curso/:CursoId", Authorization, VideosController.byCurso);
VideosRoutes.put(
  "/guardarCambiosOrdenVideos",
  Authorization,
  VideosController.update
);
module.exports = VideosRoutes;
