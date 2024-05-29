"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putListaItem = exports.getListas = exports.getLista = exports.deleteLista = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _listas = _interopRequireDefault(require("../models/listas"));
var _boom = _interopRequireDefault(require("@hapi/boom"));
// GET LISTAS LIST
var getListas = exports.getListas = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var listasList;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _listas["default"].find();
        case 3:
          listasList = _context.sent;
          return _context.abrupt("return", listasList);
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
  return function getListas() {
    return _ref.apply(this, arguments);
  };
}();

// GET LISTA BY ID
var getLista = exports.getLista = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
    var listaItem;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _listas["default"].findById(id);
        case 3:
          listaItem = _context2.sent;
          return _context2.abrupt("return", listaItem);
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
  return function getLista(_x) {
    return _ref2.apply(this, arguments);
  };
}();

// PUT (MODIFY) LISTA
var putListaItem = exports.putListaItem = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id, paListaItem) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _listas["default"].findByIdAndUpdate(id, paListaItem, {
            "new": true
          });
        case 3:
          return _context3.abrupt("return", _context3.sent);
        case 6:
          _context3.prev = 6;
          _context3.t0 = _context3["catch"](0);
          throw _boom["default"].badImplementation(_context3.t0);
        case 9:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 6]]);
  }));
  return function putListaItem(_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();

// DELETE LISTA BY ID
var deleteLista = exports.deleteLista = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
    var deletedLista;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _listas["default"].findByIdAndDelete(id);
        case 3:
          deletedLista = _context4.sent;
          if (deletedLista) {
            _context4.next = 6;
            break;
          }
          throw _boom["default"].badRequest("No se pudo eliminar la Lista.");
        case 6:
          return _context4.abrupt("return", deletedLista);
        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          throw _boom["default"].badImplementation(_context4.t0);
        case 12:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 9]]);
  }));
  return function deleteLista(_x4) {
    return _ref4.apply(this, arguments);
  };
}();