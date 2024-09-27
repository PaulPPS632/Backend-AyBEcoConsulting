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
    this.server.use("/api/uploads", express.static(uploadsDir));
  }

  routes() {
    //this.server.use(routes);
    this.server.use("/auth", Routes.AuthRouter);
    this.server.use("/curso", Routes.CoursesRoutes);
    this.server.use("/usuario", Routes.EntidadRoutes);
  }
}
module.exports = new App().server;
