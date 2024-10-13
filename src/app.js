const express = require("express");
const cors = require("cors");
const { Routes } = require("./routes/routes.js");
const path = require("path");
class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    const uploadsDir = path.resolve(__dirname, "../public/uploads");
    this.server.use(
      `/${process.env.VER_API}/uploads`,
      express.static(uploadsDir)
    );
  }

  routes() {
    //this.server.use(routes);
    const version = process.env.VER_API;
    console.log("VERSION API: ", version);
    this.server.use(`/${version}/auth`, Routes.AuthRouter);
    this.server.use(`/${version}/videos`, Routes.VideosRoutes);
    this.server.use(`/${version}/cursos`, Routes.CoursesRoutes);
    this.server.use(`/${version}/usuario`, Routes.EntidadRoutes);
    this.server.use(`/${version}/categorias`, Routes.CategoriasRoutes);
    this.server.use(`/${version}/payment`, Routes.PaymentRoutes);
  }
}
module.exports = new App().server;
