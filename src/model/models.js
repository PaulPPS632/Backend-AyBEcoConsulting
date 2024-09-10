
import Curso from "./Curso.js";
import Usuario from "./Usuario.js";
import { sequelize } from "../database/database.js";

// Inicializa los modelos con la instancia de Sequelize
const models = {
  Usuario: Usuario.init(sequelize),
  Curso: Curso.init(sequelize),
};

// Configura las asociaciones
Object.values(models).forEach(model => {
  if (typeof model.associate === 'function') {
    model.associate(models);
  }
});

export { models };