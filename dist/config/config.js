"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
_dotenv["default"].config();
var _default = exports["default"] = {
  HOST: process.env.HOST || 'NO ENCONTRE VARIABE DE ENTORNO',
  PORT: process.env.PORT || 'NO ENCONTRE PORT',
  API_URL: process.env.API_URL || '/api',
  // CONNECTION_STRING: process.env.CONNECTION_STRING || 'mongodb://localhost:27017/?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000',
  CONNECTION_STRING: process.env.CONNECTION_STRING || 'mongodb+srv://manu:Tec12345678@cluster0.tvgq5vw.mongodb.net/',
  DATABASE: process.env.DATABASE || 'db_ecommerce',
  DB_USER: process.env.DB_USER || 'AdminUser',
  DB_PASSWORD: process.env.DB_PASSWORD || 'florecitarockera'
};