"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = require("express");
var _config = _interopRequireDefault(require("../../../config/config"));
var _institutos = _interopRequireDefault(require("./institutos.routes"));
//Education

// Import Routes

var routerAPI = function routerAPI(app) {
  var router = (0, _express.Router)();
  var api = _config["default"].API_URL;
  app.use(api, router);
  // Routes
  router.use("/pwa/condiciones", _institutos["default"]);
  // Return Router
  return router;
};
module.exports = routerAPI;