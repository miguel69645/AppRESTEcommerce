"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putNegocioByParamsController = exports.putInventarioItem = exports.postNegocioController = exports.postInventario = exports.getNegociosByParams = exports.getInventariosList = exports.getInventario = exports.getAlmacenesByParams = exports.getAlmacenByParams = exports.deleteNegocioByParamsController = exports.deleteInventario = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var InventariosServices = _interopRequireWildcard(require("../services/inventarios.services"));
var _boom = _interopRequireDefault(require("@hapi/boom"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
// GET INVENTARIOS LIST
var getInventariosList = exports.getInventariosList = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var inventariosList;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return InventariosServices.getInventarios();
        case 3:
          inventariosList = _context.sent;
          if (inventariosList) {
            _context.next = 8;
            break;
          }
          throw _boom["default"].notFound("No se encontraron inventarios registrados.");
        case 8:
          res.status(200).json(inventariosList);
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
  return function getInventariosList(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
// GET INVENTARIO BY ID
var getInventario = exports.getInventario = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var id, inventarioItem;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          id = req.params.id;
          _context2.next = 4;
          return InventariosServices.getInventario(id);
        case 4:
          inventarioItem = _context2.sent;
          if (inventarioItem) {
            _context2.next = 9;
            break;
          }
          throw _boom["default"].notFound("No se encontró el inventario registrado.");
        case 9:
          res.status(200).json(inventarioItem);
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
  return function getInventario(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
// POST (ADD) INVENTARIO
var postInventario = exports.postInventario = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var paInventarioItem, newInventarioItem;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          paInventarioItem = req.body;
          _context3.next = 4;
          return InventariosServices.postInventario(paInventarioItem);
        case 4:
          newInventarioItem = _context3.sent;
          if (newInventarioItem) {
            _context3.next = 9;
            break;
          }
          throw _boom["default"].badRequest("No se pudo crear el inventario.");
        case 9:
          res.status(201).json(newInventarioItem);
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
  return function postInventario(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();
// PUT (MODIFY) INVENTARIO
var putInventarioItem = exports.putInventarioItem = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var id, paInventarioItem, updatedInventarioItem;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          paInventarioItem = req.body;
          _context4.next = 5;
          return InventariosServices.putInventarioItem(id, paInventarioItem);
        case 5:
          updatedInventarioItem = _context4.sent;
          if (updatedInventarioItem) {
            _context4.next = 10;
            break;
          }
          throw _boom["default"].badRequest("No se pudo actualizar el inventario.");
        case 10:
          res.status(200).json(updatedInventarioItem);
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
  return function putInventarioItem(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();
// DELETE INVENTARIO BY ID
var deleteInventario = exports.deleteInventario = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var id, deletedInventarioItem;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          _context5.next = 4;
          return InventariosServices.deleteInventario(id);
        case 4:
          deletedInventarioItem = _context5.sent;
          if (deletedInventarioItem) {
            _context5.next = 9;
            break;
          }
          throw _boom["default"].badRequest("No se pudo eliminar el inventario.");
        case 9:
          res.status(200).json({
            message: "Inventario eliminado correctamente."
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
  return function deleteInventario(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();
// GET NEGOCIOS BY PARAMETERS
var getNegociosByParams = exports.getNegociosByParams = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res, next) {
    var _req$params, IdInstitutoOK, IdProdServOK, IdPresentaOK, negocio;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _req$params = req.params, IdInstitutoOK = _req$params.IdInstitutoOK, IdProdServOK = _req$params.IdProdServOK, IdPresentaOK = _req$params.IdPresentaOK;
          _context6.next = 4;
          return InventariosServices.getNegociosByParams(IdInstitutoOK, IdProdServOK, IdPresentaOK);
        case 4:
          negocio = _context6.sent;
          if (negocio) {
            _context6.next = 9;
            break;
          }
          throw _boom["default"].notFound("No se encontró el negocio con los parámetros dados.");
        case 9:
          res.status(200).json({
            IdNegocioOK: negocio
          });
        case 10:
          _context6.next = 15;
          break;
        case 12:
          _context6.prev = 12;
          _context6.t0 = _context6["catch"](0);
          next(_context6.t0);
        case 15:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 12]]);
  }));
  return function getNegociosByParams(_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();
// POST NEGOCIO
var postNegocioController = exports.postNegocioController = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res, next) {
    var _req$params2, IdInstitutoOK, IdProdServOK, IdPresentaOK, negocioData, newNegocio;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _req$params2 = req.params, IdInstitutoOK = _req$params2.IdInstitutoOK, IdProdServOK = _req$params2.IdProdServOK, IdPresentaOK = _req$params2.IdPresentaOK;
          negocioData = req.body;
          _context7.prev = 2;
          _context7.next = 5;
          return InventariosServices.postNegocio(IdInstitutoOK, IdProdServOK, IdPresentaOK, negocioData);
        case 5:
          newNegocio = _context7.sent;
          if (newNegocio) {
            _context7.next = 10;
            break;
          }
          throw _boom["default"].notFound("No se pudo crear el negocio con los datos proporcionados.");
        case 10:
          res.status(201).json(newNegocio);
        case 11:
          _context7.next = 16;
          break;
        case 13:
          _context7.prev = 13;
          _context7.t0 = _context7["catch"](2);
          next(_context7.t0);
        case 16:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[2, 13]]);
  }));
  return function postNegocioController(_x19, _x20, _x21) {
    return _ref7.apply(this, arguments);
  };
}();

// PUT NEGOCIO BY PARAMETERS
var putNegocioByParamsController = exports.putNegocioByParamsController = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res, next) {
    var _req$params3, IdInstitutoOK, IdProdServOK, IdPresentaOK, IdNegocioOK, negocioData, updatedNegocio;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _req$params3 = req.params, IdInstitutoOK = _req$params3.IdInstitutoOK, IdProdServOK = _req$params3.IdProdServOK, IdPresentaOK = _req$params3.IdPresentaOK, IdNegocioOK = _req$params3.IdNegocioOK;
          negocioData = req.body;
          _context8.prev = 2;
          _context8.next = 5;
          return InventariosServices.putNegocioByParams(IdInstitutoOK, IdProdServOK, IdPresentaOK, IdNegocioOK, negocioData);
        case 5:
          updatedNegocio = _context8.sent;
          if (updatedNegocio) {
            _context8.next = 10;
            break;
          }
          throw _boom["default"].notFound("No se pudo actualizar el negocio con los datos proporcionados.");
        case 10:
          res.status(200).json(updatedNegocio);
        case 11:
          _context8.next = 16;
          break;
        case 13:
          _context8.prev = 13;
          _context8.t0 = _context8["catch"](2);
          next(_context8.t0);
        case 16:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[2, 13]]);
  }));
  return function putNegocioByParamsController(_x22, _x23, _x24) {
    return _ref8.apply(this, arguments);
  };
}();

// DELETE NEGOCIO BY PARAMETERS
var deleteNegocioByParamsController = exports.deleteNegocioByParamsController = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res, next) {
    var _req$params4, IdInstitutoOK, IdProdServOK, IdPresentaOK, IdNegocioOK, message;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _req$params4 = req.params, IdInstitutoOK = _req$params4.IdInstitutoOK, IdProdServOK = _req$params4.IdProdServOK, IdPresentaOK = _req$params4.IdPresentaOK, IdNegocioOK = _req$params4.IdNegocioOK;
          _context9.prev = 1;
          _context9.next = 4;
          return InventariosServices.deleteNegocioByParams(IdInstitutoOK, IdProdServOK, IdPresentaOK, IdNegocioOK);
        case 4:
          message = _context9.sent;
          if (message) {
            _context9.next = 9;
            break;
          }
          throw _boom["default"].notFound("No se pudo eliminar el negocio con los datos proporcionados.");
        case 9:
          res.status(200).json(message);
        case 10:
          _context9.next = 15;
          break;
        case 12:
          _context9.prev = 12;
          _context9.t0 = _context9["catch"](1);
          next(_context9.t0);
        case 15:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[1, 12]]);
  }));
  return function deleteNegocioByParamsController(_x25, _x26, _x27) {
    return _ref9.apply(this, arguments);
  };
}();

// GET ALMACENES BY PARAMETERS
var getAlmacenesByParams = exports.getAlmacenesByParams = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res, next) {
    var _req$params5, IdInstitutoOK, IdProdServOK, IdPresentaOK, IdNegocioOK, almacenes;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _req$params5 = req.params, IdInstitutoOK = _req$params5.IdInstitutoOK, IdProdServOK = _req$params5.IdProdServOK, IdPresentaOK = _req$params5.IdPresentaOK, IdNegocioOK = _req$params5.IdNegocioOK;
          _context10.next = 4;
          return InventariosServices.getAlmacenesByParams(IdInstitutoOK, IdProdServOK, IdPresentaOK, IdNegocioOK);
        case 4:
          almacenes = _context10.sent;
          if (almacenes) {
            _context10.next = 9;
            break;
          }
          throw _boom["default"].notFound("No se encontraron almacenes con los parámetros dados.");
        case 9:
          res.status(200).json(almacenes);
        case 10:
          _context10.next = 15;
          break;
        case 12:
          _context10.prev = 12;
          _context10.t0 = _context10["catch"](0);
          next(_context10.t0);
        case 15:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 12]]);
  }));
  return function getAlmacenesByParams(_x28, _x29, _x30) {
    return _ref10.apply(this, arguments);
  };
}();
// GET ALMACEN BY PARAMETERS
var getAlmacenByParams = exports.getAlmacenByParams = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res, next) {
    var _req$params6, IdInstitutoOK, IdProdServOK, IdPresentaOK, IdNegocioOK, IdAlmacenOK, almacen;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _req$params6 = req.params, IdInstitutoOK = _req$params6.IdInstitutoOK, IdProdServOK = _req$params6.IdProdServOK, IdPresentaOK = _req$params6.IdPresentaOK, IdNegocioOK = _req$params6.IdNegocioOK, IdAlmacenOK = _req$params6.IdAlmacenOK;
          _context11.next = 4;
          return InventariosServices.getAlmacenByParams(IdInstitutoOK, IdProdServOK, IdPresentaOK, IdNegocioOK, IdAlmacenOK);
        case 4:
          almacen = _context11.sent;
          if (almacen) {
            _context11.next = 9;
            break;
          }
          throw _boom["default"].notFound("No se encontró el almacén con los parámetros dados.");
        case 9:
          res.status(200).json(almacen);
        case 10:
          _context11.next = 15;
          break;
        case 12:
          _context11.prev = 12;
          _context11.t0 = _context11["catch"](0);
          next(_context11.t0);
        case 15:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 12]]);
  }));
  return function getAlmacenByParams(_x31, _x32, _x33) {
    return _ref11.apply(this, arguments);
  };
}();