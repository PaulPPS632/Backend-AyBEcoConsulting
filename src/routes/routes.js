const CoursesRoutes = require("./Courses.routes");
const EntidadRoutes = require("./Entidad.routes");
const PaymentRoutes = require("./auth/Payment.routes.js");
const AuthRouter = require("./auth/Auth.routes.js");
const CategoriasRoutes = require("./inventory/Categorias.routes.js");
const VideosRoutes = require("./global/Videos.routes.js");
exports.Routes = {
  CoursesRoutes,
  EntidadRoutes,
  PaymentRoutes,
  AuthRouter,
  CategoriasRoutes,
  VideosRoutes,
};
