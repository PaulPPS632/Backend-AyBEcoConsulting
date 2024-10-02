const Videos = require("./global/Videos.js");
const Certificates = require("./inventory/Certificates.js");
const Courses = require("./inventory/Courses.js");
const Enrollments = require("./inventory/Enrollments.js");
const Raitings = require("./inventory/Raitings.js");
const Entidad = require("./users/Entidad.js");
const Privilegio = require("./users/Privilegio.js");
const Rol = require("./users/Rol.js");
const TipoEntidad = require("./users/TipoEntidad.js");
const Archivo = require("./global/Archivo.js");
const Categorias = require("./inventory/Categorias.js");
// Inicializa los modelos con la instancia de Sequelize
const models = {
  Archivo,
  Videos,
  Certificates,
  Courses,
  Entidad,
  Enrollments,
  Raitings,
  Privilegio,
  Rol,
  TipoEntidad,
  Categorias,
};

module.exports = {
  models,
};
