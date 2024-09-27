const Videos = require("./global/Videos.js");
const Certificates = require("./inventory/Certificates.js");
const Courses = require("./inventory/Courses.js");
const Enrollments = require("./inventory/Enrollments.js");
const Raitings = require("./inventory/Raitings.js");
const Entidad = require("./users/Entidad.js");
const Privilegio = require("./users/Privilegio.js");
const Rol = require("./users/Rol.js");
const TipoEntidad = require("./users/TipoEntidad.js");

// Inicializa los modelos con la instancia de Sequelize
const models = {
  Videos,
  Certificates,
  Courses,
  Enrollments,
  Raitings,
  Entidad,
  Privilegio,
  Rol,
  TipoEntidad,
};

module.exports = {
  models,
};
