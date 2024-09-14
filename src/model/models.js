import { sequelize } from "../database/database.js";
import Courses from "./Courses.js";
import Users from "./Users.js";
import Enrollments from "./Enrollments.js";
import Roles from "./Roles.js";
import Videos from "./Videos.js";

// Inicializa los modelos con la instancia de Sequelize
const models = {
  Users: Users.init(sequelize),
  Courses: Courses.init(sequelize),
  Enrollments: Enrollments.init(sequelize),
  Roles: Roles.init(sequelize),
  Videos: Videos.init(sequelize)
};

// Configura las asociaciones
Object.values(models).forEach(model => {
  if (typeof model.associate === 'function') {
    model.associate(models);
  }
});

export { models };