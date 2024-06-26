"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putProdServItem = exports.postProdServItem = exports.getProdServList = exports.getProdServItem = exports.deleteProdServItem = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var ProdServServices = _interopRequireWildcard(require("../services/prodServ.service"));
var _boom = _interopRequireDefault(require("@hapi/boom"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
//FIC: API GET
//----------------------------------------
//FIC: Todos los Productos/Servicios.
var getProdServList = exports.getProdServList = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var prodServList;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return ProdServServices.getProdServList();
        case 3:
          prodServList = _context.sent;
          if (prodServList) {
            _context.next = 8;
            break;
          }
          throw _boom["default"].notFound("No se encontraron productos/servicios registrados.");
        case 8:
          if (prodServList) {
            res.status(200).json(prodServList);
          }
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
  return function getProdServList(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

//FIC: Solo un Producto/Servicio.
var getProdServItem = exports.getProdServItem = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var id, keyType, prodServItem;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          //FIC: obtener parametro id mediante la
          //desestructuracion de objetos
          id = req.params.id; //FIC: se obtiene parametro de la forma
          //clase/objeto.
          //const idProdServ = req.params.id;
          keyType = req.query.keyType || "OK";
          _context2.next = 5;
          return ProdServServices.getProdServItem(id, keyType);
        case 5:
          prodServItem = _context2.sent;
          if (prodServItem) {
            _context2.next = 10;
            break;
          }
          throw _boom["default"].notFound("No se encontraron productos/servicios registrados.");
        case 10:
          if (prodServItem) {
            res.status(200).json(prodServItem);
          }
        case 11:
          _context2.next = 16;
          break;
        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](0);
          next(_context2.t0);
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 13]]);
  }));
  return function getProdServItem(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

//FIC: API POST (ADD) Producto y/o Servicio.
var postProdServItem = exports.postProdServItem = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var paProdServItem, newProdServItem;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          paProdServItem = req.body;
          _context3.next = 4;
          return ProdServServices.postProdServItem(paProdServItem);
        case 4:
          newProdServItem = _context3.sent;
          if (newProdServItem) {
            _context3.next = 9;
            break;
          }
          throw _boom["default"].badRequest("No se pudo crear el Producto y/o Servicio.");
        case 9:
          if (newProdServItem) {
            res.status(201).json(newProdServItem);
          }
        case 10:
          _context3.next = 16;
          break;
        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);
          next(_context3.t0);
        case 16:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 12]]);
  }));
  return function postProdServItem(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();
var putProdServItem = exports.putProdServItem = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var id, paProdServItem, updatedProdServItem;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          console.log("FIC: controller id -> ", id);
          paProdServItem = req.body;
          console.log("FIC: controller body -> ", paProdServItem);
          _context4.next = 7;
          return ProdServServices.putProdServItem(id, paProdServItem);
        case 7:
          updatedProdServItem = _context4.sent;
          if (updatedProdServItem) {
            _context4.next = 12;
            break;
          }
          throw _boom["default"].badRequest("No se pudo actualizar el Producto y/o Servicio.");
        case 12:
          if (updatedProdServItem) {
            res.status(200).json(updatedProdServItem);
          }
        case 13:
          _context4.next = 18;
          break;
        case 15:
          _context4.prev = 15;
          _context4.t0 = _context4["catch"](0);
          next(_context4.t0);
        case 18:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 15]]);
  }));
  return function putProdServItem(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();
var deleteProdServItem = exports.deleteProdServItem = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var id, deletedProdServItem;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          _context5.next = 4;
          return ProdServServices.deleteProdServItem(id);
        case 4:
          deletedProdServItem = _context5.sent;
          if (deletedProdServItem) {
            _context5.next = 9;
            break;
          }
          throw _boom["default"].badRequest("No se pudo eliminar el Producto y/o Servicio.");
        case 9:
          res.status(200).json({
            message: "Producto y/o Servicio eliminado correctamente."
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
  return function deleteProdServItem(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();