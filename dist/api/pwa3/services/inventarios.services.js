"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putInventarioItem = exports.postInventario = exports.getInventarios = exports.getInventario = exports.deleteInventario = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _inventarios = _interopRequireDefault(require("../models/inventarios"));
var _boom = _interopRequireDefault(require("@hapi/boom"));
// GET INVENTARIOS LIST
var getInventarios = exports.getInventarios = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var inventariosList;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _inventarios["default"].find();
        case 3:
          inventariosList = _context.sent;
          return _context.abrupt("return", inventariosList);
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
  return function getInventarios() {
    return _ref.apply(this, arguments);
  };
}();

// GET INVENTARIO BY ID
var getInventario = exports.getInventario = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
    var inventarioItem;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _inventarios["default"].findOne({
            IdInstitutoOK: id
          });
        case 3:
          inventarioItem = _context2.sent;
          return _context2.abrupt("return", inventarioItem);
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
  return function getInventario(_x) {
    return _ref2.apply(this, arguments);
  };
}();

// POST (ADD) INVENTARIO
var postInventario = exports.postInventario = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(paInventarioItem) {
    var newInventarioItem;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          newInventarioItem = new _inventarios["default"](paInventarioItem);
          _context3.next = 4;
          return newInventarioItem.save();
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
  return function postInventario(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

// PUT (MODIFY) INVENTARIO
var putInventarioItem = exports.putInventarioItem = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id, paInventarioItem) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _inventarios["default"].findOneAndUpdate({
            IdInstitutoOK: id
          }, paInventarioItem, {
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
  return function putInventarioItem(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}();

// DELETE INVENTARIO BY ID
var deleteInventario = exports.deleteInventario = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
    var deletedInventario;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _inventarios["default"].findOneAndDelete({
            IdInstitutoOK: id
          });
        case 3:
          deletedInventario = _context5.sent;
          if (deletedInventario) {
            _context5.next = 6;
            break;
          }
          throw _boom["default"].badRequest("No se pudo eliminar el Inventario.");
        case 6:
          return _context5.abrupt("return", deletedInventario);
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
  return function deleteInventario(_x5) {
    return _ref5.apply(this, arguments);
  };
}();