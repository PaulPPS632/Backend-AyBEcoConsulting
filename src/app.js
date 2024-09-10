import express from 'express';
import { Routes } from './routes/routes.js';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    //this.server.use(routes);
    this.server.use("/curso",Routes.CursoRoutes);
    this.server.use("/usuario",Routes.UsuarioRoutes);
  }
}

export default new App().server;
