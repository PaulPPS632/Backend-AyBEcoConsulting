const { config } = require("dotenv");
config();
const Sequelize = require("sequelize");
const { models } = require("../models/models.js");
class Database {
  constructor() {
    this.init();
  }

  init() {
    try {
      this.connection = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
          host: process.env.DB_HOST,
          port: process.env.DB_PORT,
          dialect: "mysql",
          retry: { max: 3 },
        }
      );
      Object.values(models).forEach((model) => model.init(this.connection));
      Object.values(models).forEach((model) => {
        if (typeof model.associate === "function") {
          model.associate(models);
        }
      });
      console.log("Conexión a la base de datos establecida exitosamente.");
    } catch (error) {
      console.error("Error al conectar a la base de datos:", error);
    }
  }
  configuration() {
    console.log("------------------");
    console.log("Configuration Database: ");
    console.log(this.connection);
    console.log("------------------");
  }
  async sync() {
    try {
      await this.connection.sync({ alter: true });
      console.log("Sincronización de modelos completada.");
    } catch (error) {
      console.error("Error al sincronizar los modelos:", error);
    }
  }
}

module.exports = new Database();
