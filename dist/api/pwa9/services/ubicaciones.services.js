"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putCatUbicacionItem = exports.postCatUbicacion = exports.getCatUbicaciones = exports.getCatUbicacion = exports.deleteCatUbicacion = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _ubicaciones = _interopRequireDefault(require("../models/ubicaciones"));
var _boom = _interopRequireDefault(require("@hapi/boom"));
// GET CAT_UBICACIONES LIST
var getCatUbicaciones = exports.getCatUbicaciones = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var catUbicacionesList;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _ubicaciones["default"].find();
        case 3:
          catUbicacionesList = _context.sent;
          return _context.abrupt("return", catUbicacionesList);
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          throw _boom["default"].internal(_context.t0);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function getCatUbicaciones() {
    return _ref.apply(this, arguments);
  };
}();

// GET CAT_UBICACION BY ID
var getCatUbicacion = exports.getCatUbicacion = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
    var catUbicacionItem;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _ubicaciones["default"].findOne({
            Ubicacion: id
          });
        case 3:
          catUbicacionItem = _context2.sent;
          return _context2.abrupt("return", catUbicacionItem);
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          throw _boom["default"].internal(_context2.t0);
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function getCatUbicacion(_x) {
    return _ref2.apply(this, arguments);
  };
}();

// POST (ADD) CAT_UBICACION
var postCatUbicacion = exports.postCatUbicacion = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(paCatUbicacionItem) {
    var newCatUbicacionItem;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          newCatUbicacionItem = new _ubicaciones["default"](paCatUbicacionItem);
          _context3.next = 4;
          return newCatUbicacionItem.save();
        case 4:
          return _context3.abrupt("return", _context3.sent);
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          throw _context3.t0;
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function postCatUbicacion(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

// PUT (MODIFY) CAT_UBICACION
var putCatUbicacionItem = exports.putCatUbicacionItem = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id, paCatUbicacionItem) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _ubicaciones["default"].findOneAndUpdate({
            Ubicacion: id
          }, paCatUbicacionItem, {
            "new": true
          });
        case 3:
          return _context4.abrupt("return", _context4.sent);
        case 6:
          _context4.prev = 6;
          _context4.t0 = _context4["catch"](0);
          throw _boom["default"].badImplementation(_context4.t0);
        case 9:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 6]]);
  }));
  return function putCatUbicacionItem(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}();

// DELETE CAT_UBICACION BY ID
var deleteCatUbicacion = exports.deleteCatUbicacion = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
    var deletedCatUbicacion;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _ubicaciones["default"].findOneAndDelete({
            Ubicacion: id
          });
        case 3:
          deletedCatUbicacion = _context5.sent;
          if (deletedCatUbicacion) {
            _context5.next = 6;
            break;
          }
          throw _boom["default"].badRequest("No se pudo eliminar la Ubicacion.");
        case 6:
          return _context5.abrupt("return", deletedCatUbicacion);
        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          throw _boom["default"].badImplementation(_context5.t0);
        case 12:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 9]]);
  }));
  return function deleteCatUbicacion(_x5) {
    return _ref5.apply(this, arguments);
  };
}();