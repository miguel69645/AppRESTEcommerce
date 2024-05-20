"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putListaItem = exports.postLista = exports.getListasList = exports.getLista = exports.deleteLista = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var ListasServices = _interopRequireWildcard(require("../services/listas.services"));
var _boom = _interopRequireDefault(require("@hapi/boom"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
// GET LISTAS LIST
var getListasList = exports.getListasList = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var listasList;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return ListasServices.getListas();
        case 3:
          listasList = _context.sent;
          if (listasList) {
            _context.next = 8;
            break;
          }
          throw _boom["default"].notFound("No se encontraron listas registradas.");
        case 8:
          res.status(200).json(listasList);
        case 9:
          _context.next = 14;
          break;
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          next(_context.t0);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 11]]);
  }));
  return function getListasList(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

// GET LISTA BY ID
var getLista = exports.getLista = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var id, listaItem;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          id = req.params.id;
          _context2.next = 4;
          return ListasServices.getLista(id);
        case 4:
          listaItem = _context2.sent;
          if (listaItem) {
            _context2.next = 9;
            break;
          }
          throw _boom["default"].notFound("No se encontró la lista registrada.");
        case 9:
          res.status(200).json(listaItem);
        case 10:
          _context2.next = 15;
          break;
        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](0);
          next(_context2.t0);
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 12]]);
  }));
  return function getLista(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

// POST (ADD) LISTA
var postLista = exports.postLista = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var paListaItem, newListaItem;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          paListaItem = req.body;
          _context3.next = 4;
          return ListasServices.postLista(paListaItem);
        case 4:
          newListaItem = _context3.sent;
          if (newListaItem) {
            _context3.next = 9;
            break;
          }
          throw _boom["default"].badRequest("No se pudo crear la lista.");
        case 9:
          res.status(201).json(newListaItem);
        case 10:
          _context3.next = 15;
          break;
        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](0);
          next(_context3.t0);
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 12]]);
  }));
  return function postLista(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

// PUT (MODIFY) LISTA
var putListaItem = exports.putListaItem = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var id, paListaItem, updatedListaItem;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          paListaItem = req.body;
          _context4.next = 5;
          return ListasServices.putListaItem(id, paListaItem);
        case 5:
          updatedListaItem = _context4.sent;
          if (updatedListaItem) {
            _context4.next = 10;
            break;
          }
          throw _boom["default"].badRequest("No se pudo actualizar la lista.");
        case 10:
          res.status(200).json(updatedListaItem);
        case 11:
          _context4.next = 16;
          break;
        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](0);
          next(_context4.t0);
        case 16:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 13]]);
  }));
  return function putListaItem(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

// DELETE LISTA BY ID
var deleteLista = exports.deleteLista = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var id, deletedListaItem;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          _context5.next = 4;
          return ListasServices.deleteLista(id);
        case 4:
          deletedListaItem = _context5.sent;
          if (deletedListaItem) {
            _context5.next = 9;
            break;
          }
          throw _boom["default"].badRequest("No se pudo eliminar la lista.");
        case 9:
          res.status(200).json({
            message: "Lista eliminada correctamente."
          });
        case 10:
          _context5.next = 15;
          break;
        case 12:
          _context5.prev = 12;
          _context5.t0 = _context5["catch"](0);
          next(_context5.t0);
        case 15:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 12]]);
  }));
  return function deleteLista(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();