const CoursesRoutes = require("./Courses.routes");
const EntidadRoutes = require("./Entidad.routes");
const PaymentRoutes = require("./auth/Payment.routes.js");
const AuthRouter = require("./auth/Auth.routes.js");
exports.Routes = {
  CoursesRoutes,
  EntidadRoutes,
  PaymentRoutes,
  AuthRouter,
};
