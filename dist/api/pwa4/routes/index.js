"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = require("express");
var _config = _interopRequireDefault(require("../../../config/config"));
var _negocios = _interopRequireDefault(require("./negocios.routes"));
var routerAPI = function routerAPI(app) {
  var router = (0, _express.Router)();
  var api = _config["default"].API_URL;
  app.use(api, router);
  // Routes
  router.use("/pwa4/negocios", _negocios["default"]);
  // Return Router
  return router;
};
module.exports = routerAPI;