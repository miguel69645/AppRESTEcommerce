"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _database = require("./config/database.config");
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _config = _interopRequireDefault(require("./config/config"));
var _index = _interopRequireDefault(require("./api/pwa/routes/index"));
var _index2 = _interopRequireDefault(require("./api/pwa2/routes/index"));
var _index3 = _interopRequireDefault(require("./api/pwa3/routes/index"));
var _index4 = _interopRequireDefault(require("./api/pwa4/routes/index"));
//FIC: Establece la conexion a la BD

//FIC: imports Swagger
//FIC: imports Routes
//FIC: imports Middlewares
//FIC: Config para variables de entorno

// Import Routes
// import routeAPICOM from "./api/v1/routes/index";

// import routeAPIPWA5 from "./api/pwa5/routes/index";
// import routeAPIPWA6 from "./api/pwa6/routes/index";
// import routeAPIPWA7 from "./api/pwa7/routes/index";
// import routeAPIPWA8 from "./api/pwa8/routes/index";
// import routeAPIPWA9 from "./api/pwa9/routes/index";
//FIC: Declaramos la variable app igualandola a express
var app = (0, _express["default"])();
//FIC: Settings
app.set("port", _config["default"].PORT);
//FIC: Middlewares generales
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use(_express["default"]["static"]("dist"));
app.use(_express["default"].urlencoded({
  extended: false
}));
//FIC: Routes
var api = _config["default"].API_URL;
app.get("".concat(api), function (req, res) {
  res.send("<h1>RESTful running in root</h1> <p> eCommerce: <b>".concat(api, "/api-docs</b> for more information.</p>"));
});
app.get("/DrFIC", function (req, res) {
  res.send("<h1>RESTful running in DrFIC</h1> <p> eCommerce: <b>".concat(api, "/api-docs</b> for more information.</p>"));
});
// Routes
// routeAPICOM(app);
(0, _index["default"])(app);
(0, _index2["default"])(app);
(0, _index3["default"])(app);
(0, _index4["default"])(app);
// routeAPIPWA5(app);
// routeAPIPWA6(app);
// routeAPIPWA7(app);
// routeAPIPWA8(app);
// routeAPIPWA9(app);
// Swagger Docs
// Middleware para el manejo de errores
// Export App
var _default = exports["default"] = app;