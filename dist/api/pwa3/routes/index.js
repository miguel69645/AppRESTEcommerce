"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = require("express");
var _config = _interopRequireDefault(require("../../../config/config"));
var _inventarios = _interopRequireDefault(require("./inventarios.routes"));
var _productos = _interopRequireDefault(require("./productos.routes"));
//Inventarios

// Import Routes

var routerAPI = function routerAPI(app) {
  var router = (0, _express.Router)();
  var api = _config["default"].API_URL;
  app.use(api, router);
  // Routes
  router.use("/pwa3/inventarios", _inventarios["default"]);
  router.use("/pwa3/productos", _productos["default"]);
  // Return Router
  return router;
};
module.exports = routerAPI;