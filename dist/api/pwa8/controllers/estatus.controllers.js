"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putEstatusItem = exports.postEstatus = exports.getEstatusList = exports.getEstatus = exports.deleteEstatus = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var EstatusServices = _interopRequireWildcard(require("../services/estatus.services"));
var _boom = _interopRequireDefault(require("@hapi/boom"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
// GET ESTATUS LIST
var getEstatusList = exports.getEstatusList = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var estatusList;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return EstatusServices.getEstatus();
        case 3:
          estatusList = _context.sent;
          if (estatusList) {
            _context.next = 8;
            break;
          }
          throw _boom["default"].notFound("No se encontraron estatus registrados.");
        case 8:
          res.status(200).json(estatusList);
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
  return function getEstatusList(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

// GET ESTATUS BY ID
var getEstatus = exports.getEstatus = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var id, estatusItem;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          id = req.params.id;
          _context2.next = 4;
          return EstatusServices.getEstatusById(id);
        case 4:
          estatusItem = _context2.sent;
          if (estatusItem) {
            _context2.next = 9;
            break;
          }
          throw _boom["default"].notFound("No se encontró el estatus registrado.");
        case 9:
          res.status(200).json(estatusItem);
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
  return function getEstatus(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

// POST (ADD) ESTATUS
var postEstatus = exports.postEstatus = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var paEstatusItem, newEstatusItem;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          paEstatusItem = req.body;
          _context3.next = 4;
          return EstatusServices.postEstatus(paEstatusItem);
        case 4:
          newEstatusItem = _context3.sent;
          if (newEstatusItem) {
            _context3.next = 9;
            break;
          }
          throw _boom["default"].badRequest("No se pudo crear el estatus.");
        case 9:
          res.status(201).json(newEstatusItem);
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
  return function postEstatus(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

// PUT (MODIFY) ESTATUS
var putEstatusItem = exports.putEstatusItem = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var id, paEstatusItem, updatedEstatusItem;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          paEstatusItem = req.body;
          _context4.next = 5;
          return EstatusServices.putEstatusItem(id, paEstatusItem);
        case 5:
          updatedEstatusItem = _context4.sent;
          if (updatedEstatusItem) {
            _context4.next = 10;
            break;
          }
          throw _boom["default"].badRequest("No se pudo actualizar el estatus.");
        case 10:
          res.status(200).json(updatedEstatusItem);
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
  return function putEstatusItem(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

// DELETE ESTATUS BY ID
var deleteEstatus = exports.deleteEstatus = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var id, deletedEstatusItem;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          _context5.next = 4;
          return EstatusServices.deleteEstatus(id);
        case 4:
          deletedEstatusItem = _context5.sent;
          if (deletedEstatusItem) {
            _context5.next = 9;
            break;
          }
          throw _boom["default"].badRequest("No se pudo eliminar el estatus.");
        case 9:
          res.status(200).json({
            message: "Estatus eliminado correctamente."
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
  return function deleteEstatus(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();