"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putMovimientoItem = exports.postMovimiento = exports.getMovimientos = exports.getMovimiento = exports.deleteMovimiento = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _movimientos = _interopRequireDefault(require("../models/movimientos"));
var _boom = _interopRequireDefault(require("@hapi/boom"));
// Education

// GET ALL MOVIMIENTOS
var getMovimientos = exports.getMovimientos = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var movimientosList;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _movimientos["default"].find();
        case 3:
          movimientosList = _context.sent;
          return _context.abrupt("return", movimientosList);
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
  return function getMovimientos() {
    return _ref.apply(this, arguments);
  };
}();

// GET MOVIMIENTO BY ID
var getMovimiento = exports.getMovimiento = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
    var movimientoItem;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _movimientos["default"].findOne({
            IdTipoMovtoOK: id
          });
        case 3:
          movimientoItem = _context2.sent;
          return _context2.abrupt("return", movimientoItem);
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
  return function getMovimiento(_x) {
    return _ref2.apply(this, arguments);
  };
}();

// POST (ADD) MOVIMIENTO
var postMovimiento = exports.postMovimiento = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(paMovimientoItem) {
    var newMovimientoItem;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          newMovimientoItem = new _movimientos["default"](paMovimientoItem);
          _context3.next = 4;
          return newMovimientoItem.save();
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
  return function postMovimiento(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

// PUT (MODIFY) MOVIMIENTO
var putMovimientoItem = exports.putMovimientoItem = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id, paMovimientoItem) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _movimientos["default"].findOneAndUpdate({
            IdTipoMovtoOK: id
          }, paMovimientoItem, {
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
  return function putMovimientoItem(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}();

// DELETE MOVIMIENTO BY ID
var deleteMovimiento = exports.deleteMovimiento = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
    var deletedMovimiento;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _movimientos["default"].findOneAndDelete({
            IdTipoMovtoOK: id
          });
        case 3:
          deletedMovimiento = _context5.sent;
          if (deletedMovimiento) {
            _context5.next = 6;
            break;
          }
          throw _boom["default"].badRequest("No se pudo eliminar el movimiento.");
        case 6:
          return _context5.abrupt("return", deletedMovimiento);
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
  return function deleteMovimiento(_x5) {
    return _ref5.apply(this, arguments);
  };
}();