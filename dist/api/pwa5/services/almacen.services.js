"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putAlmacenItem = exports.postAlmacen = exports.getAlmacenes = exports.getAlmacen = exports.deleteAlmacen = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _almacen = _interopRequireDefault(require("../models/almacen"));
var _boom = _interopRequireDefault(require("@hapi/boom"));
// GET ALMACENES LIST
var getAlmacenes = exports.getAlmacenes = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var almacenesList;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _almacen["default"].find();
        case 3:
          almacenesList = _context.sent;
          return _context.abrupt("return", almacenesList);
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
  return function getAlmacenes() {
    return _ref.apply(this, arguments);
  };
}();

// GET ALMACEN BY ID
var getAlmacen = exports.getAlmacen = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
    var almacenItem;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _almacen["default"].findOne({
            IdAlmacenOK: id
          });
        case 3:
          almacenItem = _context2.sent;
          return _context2.abrupt("return", almacenItem);
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
  return function getAlmacen(_x) {
    return _ref2.apply(this, arguments);
  };
}();

// POST (ADD) ALMACEN
var postAlmacen = exports.postAlmacen = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(paAlmacenItem) {
    var newAlmacenItem;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          newAlmacenItem = new _almacen["default"](paAlmacenItem);
          _context3.next = 4;
          return newAlmacenItem.save();
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
  return function postAlmacen(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

// PUT (MODIFY) ALMACEN
var putAlmacenItem = exports.putAlmacenItem = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id, paAlmacenItem) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _almacen["default"].findOneAndUpdate({
            IdAlmacenOK: id
          }, paAlmacenItem, {
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
  return function putAlmacenItem(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}();

// DELETE ALMACEN BY ID
var deleteAlmacen = exports.deleteAlmacen = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
    var deletedAlmacen;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _almacen["default"].findOneAndDelete({
            IdAlmacenOK: id
          });
        case 3:
          deletedAlmacen = _context5.sent;
          if (deletedAlmacen) {
            _context5.next = 6;
            break;
          }
          throw _boom["default"].badRequest("No se pudo eliminar el Almacen.");
        case 6:
          return _context5.abrupt("return", deletedAlmacen);
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
  return function deleteAlmacen(_x5) {
    return _ref5.apply(this, arguments);
  };
}();