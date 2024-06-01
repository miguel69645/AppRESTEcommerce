"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putUbicacion = exports.putSerie = exports.putNegocio = exports.putInventarioItem = exports.putEstatusVenta = exports.putEstatusFisico = exports.putAlmacen = exports.postUbicacion = exports.postSerie = exports.postNegocio = exports.postInventario = exports.postEstatusVenta = exports.postEstatusFisico = exports.postAlmacen = exports.getProductPresentations = exports.getInventariosList = exports.getInventario = exports.getConcatenatedDescription = exports.getAllStores = exports.getAllStatus = exports.getAllSeries = exports.getAllProdserv = exports.deleteUbicacion = exports.deleteSerie = exports.deleteNegocio = exports.deleteInventario = exports.deleteEstatusVenta = exports.deleteEstatusFisico = exports.deleteAlmacen = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var InventariosServices = _interopRequireWildcard(require("../services/inventarios.services"));
var _boom = _interopRequireDefault(require("@hapi/boom"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
// *************************************************************************
//                               CAT_INVENTARIOS
// *************************************************************************

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

// GET ALL STORES
var getAllStores = exports.getAllStores = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var _req$params, id, selectedBusinessId, almacenes;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _req$params = req.params, id = _req$params.id, selectedBusinessId = _req$params.selectedBusinessId;
          _context3.next = 4;
          return InventariosServices.getAllStores(id, selectedBusinessId);
        case 4:
          almacenes = _context3.sent;
          if (almacenes) {
            _context3.next = 9;
            break;
          }
          throw _boom["default"].notFound("No se encontraron almacenes para el negocio seleccionado.");
        case 9:
          res.status(200).json(almacenes);
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
  return function getAllStores(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

// GET ALL SERIES
var getAllSeries = exports.getAllSeries = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var _req$params2, id, selectedBusinessId, selectedStoresId, series;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _req$params2 = req.params, id = _req$params2.id, selectedBusinessId = _req$params2.selectedBusinessId, selectedStoresId = _req$params2.selectedStoresId;
          _context4.next = 4;
          return InventariosServices.getAllSeries(id, selectedBusinessId, selectedStoresId);
        case 4:
          series = _context4.sent;
          if (series) {
            _context4.next = 9;
            break;
          }
          throw _boom["default"].notFound("No se encontraron series para el almacén seleccionado.");
        case 9:
          res.status(200).json(series);
        case 10:
          _context4.next = 15;
          break;
        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](0);
          next(_context4.t0);
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 12]]);
  }));
  return function getAllSeries(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

// GET ALL STATUS
var getAllStatus = exports.getAllStatus = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var _req$params3, id, selectedBusinessId, selectedStoresId, selectedSeriesId, status;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _req$params3 = req.params, id = _req$params3.id, selectedBusinessId = _req$params3.selectedBusinessId, selectedStoresId = _req$params3.selectedStoresId, selectedSeriesId = _req$params3.selectedSeriesId;
          _context5.next = 4;
          return InventariosServices.getAllStatus(id, selectedBusinessId, selectedStoresId, selectedSeriesId);
        case 4:
          status = _context5.sent;
          if (status) {
            _context5.next = 9;
            break;
          }
          throw _boom["default"].notFound("No se encontraron estados para la serie seleccionada.");
        case 9:
          res.status(200).json(status);
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
  return function getAllStatus(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

// POST (ADD) INVENTARIO
var postInventario = exports.postInventario = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res, next) {
    var paInventarioItem, newInventarioItem;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          paInventarioItem = req.body;
          _context6.next = 4;
          return InventariosServices.postInventario(paInventarioItem);
        case 4:
          newInventarioItem = _context6.sent;
          if (newInventarioItem) {
            _context6.next = 9;
            break;
          }
          throw _boom["default"].badRequest("No se pudo crear el inventario.");
        case 9:
          res.status(201).json(newInventarioItem);
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
  return function postInventario(_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();

// POST (ADD) NEGOCIO
var postNegocio = exports.postNegocio = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res, next) {
    var id, negocio, response;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          id = req.params.id;
          negocio = req.body;
          _context7.next = 5;
          return InventariosServices.postNegocio(id, negocio);
        case 5:
          response = _context7.sent;
          if (response) {
            _context7.next = 10;
            break;
          }
          throw _boom["default"].badRequest("No se pudo agregar el negocio.");
        case 10:
          res.status(201).json(response);
        case 11:
          _context7.next = 16;
          break;
        case 13:
          _context7.prev = 13;
          _context7.t0 = _context7["catch"](0);
          next(_context7.t0);
        case 16:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 13]]);
  }));
  return function postNegocio(_x19, _x20, _x21) {
    return _ref7.apply(this, arguments);
  };
}();
// POST (ADD) ALMACÉN
var postAlmacen = exports.postAlmacen = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res, next) {
    var _req$params4, id, idNegocioOk, almacen, response;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _req$params4 = req.params, id = _req$params4.id, idNegocioOk = _req$params4.idNegocioOk;
          almacen = req.body;
          _context8.next = 5;
          return InventariosServices.postAlmacen(id, idNegocioOk, almacen);
        case 5:
          response = _context8.sent;
          if (response) {
            _context8.next = 10;
            break;
          }
          throw _boom["default"].badRequest("No se pudo agregar el almacén.");
        case 10:
          res.status(201).json(response);
        case 11:
          _context8.next = 16;
          break;
        case 13:
          _context8.prev = 13;
          _context8.t0 = _context8["catch"](0);
          next(_context8.t0);
        case 16:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 13]]);
  }));
  return function postAlmacen(_x22, _x23, _x24) {
    return _ref8.apply(this, arguments);
  };
}();

// POST (ADD) SERIE
var postSerie = exports.postSerie = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res, next) {
    var _req$params5, id, idNegocioOk, idAlmacenOk, serie, response;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _req$params5 = req.params, id = _req$params5.id, idNegocioOk = _req$params5.idNegocioOk, idAlmacenOk = _req$params5.idAlmacenOk;
          serie = req.body;
          _context9.next = 5;
          return InventariosServices.postSerie(id, idNegocioOk, idAlmacenOk, serie);
        case 5:
          response = _context9.sent;
          if (response) {
            _context9.next = 10;
            break;
          }
          throw _boom["default"].badRequest("No se pudo agregar la serie.");
        case 10:
          res.status(201).json(response);
        case 11:
          _context9.next = 16;
          break;
        case 13:
          _context9.prev = 13;
          _context9.t0 = _context9["catch"](0);
          next(_context9.t0);
        case 16:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 13]]);
  }));
  return function postSerie(_x25, _x26, _x27) {
    return _ref9.apply(this, arguments);
  };
}();

// POST (ADD) ESTATUS FÍSICO
var postEstatusFisico = exports.postEstatusFisico = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res, next) {
    var _req$params6, id, idNegocioOk, idAlmacenOk, serie, estatusFisico, response;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _req$params6 = req.params, id = _req$params6.id, idNegocioOk = _req$params6.idNegocioOk, idAlmacenOk = _req$params6.idAlmacenOk, serie = _req$params6.serie;
          estatusFisico = req.body;
          _context10.next = 5;
          return InventariosServices.postEstatusFisico(id, idNegocioOk, idAlmacenOk, serie, estatusFisico);
        case 5:
          response = _context10.sent;
          if (response) {
            _context10.next = 10;
            break;
          }
          throw _boom["default"].badRequest("No se pudo agregar el estatus físico.");
        case 10:
          res.status(201).json(response);
        case 11:
          _context10.next = 16;
          break;
        case 13:
          _context10.prev = 13;
          _context10.t0 = _context10["catch"](0);
          next(_context10.t0);
        case 16:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 13]]);
  }));
  return function postEstatusFisico(_x28, _x29, _x30) {
    return _ref10.apply(this, arguments);
  };
}();

// POST (ADD) ESTATUS VENTA
var postEstatusVenta = exports.postEstatusVenta = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res, next) {
    var _req$params7, id, idNegocioOk, idAlmacenOk, serie, estatusVenta, response;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _req$params7 = req.params, id = _req$params7.id, idNegocioOk = _req$params7.idNegocioOk, idAlmacenOk = _req$params7.idAlmacenOk, serie = _req$params7.serie;
          estatusVenta = req.body;
          _context11.next = 5;
          return InventariosServices.postEstatusVenta(id, idNegocioOk, idAlmacenOk, serie, estatusVenta);
        case 5:
          response = _context11.sent;
          if (response) {
            _context11.next = 10;
            break;
          }
          throw _boom["default"].badRequest("No se pudo agregar el estatus de venta.");
        case 10:
          res.status(201).json(response);
        case 11:
          _context11.next = 16;
          break;
        case 13:
          _context11.prev = 13;
          _context11.t0 = _context11["catch"](0);
          next(_context11.t0);
        case 16:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 13]]);
  }));
  return function postEstatusVenta(_x31, _x32, _x33) {
    return _ref11.apply(this, arguments);
  };
}();

// POST (ADD) UBICACIÓN
var postUbicacion = exports.postUbicacion = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(req, res, next) {
    var _req$params8, id, idNegocioOk, idAlmacenOk, serie, ubicacion, response;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          _req$params8 = req.params, id = _req$params8.id, idNegocioOk = _req$params8.idNegocioOk, idAlmacenOk = _req$params8.idAlmacenOk, serie = _req$params8.serie;
          ubicacion = req.body;
          _context12.next = 5;
          return InventariosServices.postUbicacion(id, idNegocioOk, idAlmacenOk, serie, ubicacion);
        case 5:
          response = _context12.sent;
          if (response) {
            _context12.next = 10;
            break;
          }
          throw _boom["default"].badRequest("No se pudo agregar la ubicación.");
        case 10:
          res.status(201).json(response);
        case 11:
          _context12.next = 16;
          break;
        case 13:
          _context12.prev = 13;
          _context12.t0 = _context12["catch"](0);
          next(_context12.t0);
        case 16:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 13]]);
  }));
  return function postUbicacion(_x34, _x35, _x36) {
    return _ref12.apply(this, arguments);
  };
}();

// PUT (MODIFY) INVENTARIO
var putInventarioItem = exports.putInventarioItem = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(req, res, next) {
    var id, paInventarioItem, updatedInventarioItem;
    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          id = req.params.id;
          paInventarioItem = req.body;
          _context13.next = 5;
          return InventariosServices.putInventarioItem(id, paInventarioItem);
        case 5:
          updatedInventarioItem = _context13.sent;
          if (updatedInventarioItem) {
            _context13.next = 10;
            break;
          }
          throw _boom["default"].badRequest("No se pudo actualizar el inventario.");
        case 10:
          res.status(200).json(updatedInventarioItem);
        case 11:
          _context13.next = 16;
          break;
        case 13:
          _context13.prev = 13;
          _context13.t0 = _context13["catch"](0);
          next(_context13.t0);
        case 16:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 13]]);
  }));
  return function putInventarioItem(_x37, _x38, _x39) {
    return _ref13.apply(this, arguments);
  };
}();

// PUT (MODIFY) NEGOCIO
var putNegocio = exports.putNegocio = /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(req, res, next) {
    var _req$params9, id, idNegocioOk, negocio, response;
    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          _req$params9 = req.params, id = _req$params9.id, idNegocioOk = _req$params9.idNegocioOk;
          negocio = req.body;
          _context14.next = 5;
          return InventariosServices.putNegocio(id, idNegocioOk, negocio);
        case 5:
          response = _context14.sent;
          if (response) {
            _context14.next = 10;
            break;
          }
          throw _boom["default"].badRequest("No se pudo actualizar el negocio.");
        case 10:
          res.status(200).json(response);
        case 11:
          _context14.next = 16;
          break;
        case 13:
          _context14.prev = 13;
          _context14.t0 = _context14["catch"](0);
          next(_context14.t0);
        case 16:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[0, 13]]);
  }));
  return function putNegocio(_x40, _x41, _x42) {
    return _ref14.apply(this, arguments);
  };
}();

// PUT (MODIFY) ALMACÉN
var putAlmacen = exports.putAlmacen = /*#__PURE__*/function () {
  var _ref15 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(req, res, next) {
    var _req$params10, id, idNegocioOk, idAlmacenOk, almacen, response;
    return _regenerator["default"].wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          _req$params10 = req.params, id = _req$params10.id, idNegocioOk = _req$params10.idNegocioOk, idAlmacenOk = _req$params10.idAlmacenOk;
          almacen = req.body;
          _context15.next = 5;
          return InventariosServices.putAlmacen(id, idNegocioOk, idAlmacenOk, almacen);
        case 5:
          response = _context15.sent;
          if (response) {
            _context15.next = 10;
            break;
          }
          throw _boom["default"].badRequest("No se pudo actualizar el almacén.");
        case 10:
          res.status(200).json(response);
        case 11:
          _context15.next = 16;
          break;
        case 13:
          _context15.prev = 13;
          _context15.t0 = _context15["catch"](0);
          next(_context15.t0);
        case 16:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[0, 13]]);
  }));
  return function putAlmacen(_x43, _x44, _x45) {
    return _ref15.apply(this, arguments);
  };
}();

// PUT (MODIFY) SERIE
var putSerie = exports.putSerie = /*#__PURE__*/function () {
  var _ref16 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(req, res, next) {
    var _req$params11, id, idNegocioOk, idAlmacenOk, serieId, serie, response;
    return _regenerator["default"].wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.prev = 0;
          _req$params11 = req.params, id = _req$params11.id, idNegocioOk = _req$params11.idNegocioOk, idAlmacenOk = _req$params11.idAlmacenOk, serieId = _req$params11.serieId;
          serie = req.body;
          _context16.next = 5;
          return InventariosServices.putSerie(id, idNegocioOk, idAlmacenOk, serieId, serie);
        case 5:
          response = _context16.sent;
          if (response) {
            _context16.next = 10;
            break;
          }
          throw _boom["default"].badRequest("No se pudo actualizar la serie.");
        case 10:
          res.status(200).json(response);
        case 11:
          _context16.next = 16;
          break;
        case 13:
          _context16.prev = 13;
          _context16.t0 = _context16["catch"](0);
          next(_context16.t0);
        case 16:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[0, 13]]);
  }));
  return function putSerie(_x46, _x47, _x48) {
    return _ref16.apply(this, arguments);
  };
}();

// PUT (MODIFY) ESTATUS FÍSICO
var putEstatusFisico = exports.putEstatusFisico = /*#__PURE__*/function () {
  var _ref17 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(req, res, next) {
    var _req$params12, id, idNegocioOk, idAlmacenOk, serie, estatusFisicoId, estatusFisico, response;
    return _regenerator["default"].wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.prev = 0;
          _req$params12 = req.params, id = _req$params12.id, idNegocioOk = _req$params12.idNegocioOk, idAlmacenOk = _req$params12.idAlmacenOk, serie = _req$params12.serie, estatusFisicoId = _req$params12.estatusFisicoId;
          estatusFisico = req.body;
          _context17.next = 5;
          return InventariosServices.putEstatusFisico(id, idNegocioOk, idAlmacenOk, serie, estatusFisicoId, estatusFisico);
        case 5:
          response = _context17.sent;
          if (response) {
            _context17.next = 10;
            break;
          }
          throw _boom["default"].badRequest("No se pudo actualizar el estatus físico.");
        case 10:
          res.status(200).json(response);
        case 11:
          _context17.next = 16;
          break;
        case 13:
          _context17.prev = 13;
          _context17.t0 = _context17["catch"](0);
          next(_context17.t0);
        case 16:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[0, 13]]);
  }));
  return function putEstatusFisico(_x49, _x50, _x51) {
    return _ref17.apply(this, arguments);
  };
}();

// PUT (MODIFY) ESTATUS VENTA
var putEstatusVenta = exports.putEstatusVenta = /*#__PURE__*/function () {
  var _ref18 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(req, res, next) {
    var _req$params13, id, idNegocioOk, idAlmacenOk, serie, estatusVentaId, estatusVenta, response;
    return _regenerator["default"].wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.prev = 0;
          _req$params13 = req.params, id = _req$params13.id, idNegocioOk = _req$params13.idNegocioOk, idAlmacenOk = _req$params13.idAlmacenOk, serie = _req$params13.serie, estatusVentaId = _req$params13.estatusVentaId;
          estatusVenta = req.body;
          _context18.next = 5;
          return InventariosServices.putEstatusVenta(id, idNegocioOk, idAlmacenOk, serie, estatusVentaId, estatusVenta);
        case 5:
          response = _context18.sent;
          if (response) {
            _context18.next = 10;
            break;
          }
          throw _boom["default"].badRequest("No se pudo actualizar el estatus de venta.");
        case 10:
          res.status(200).json(response);
        case 11:
          _context18.next = 16;
          break;
        case 13:
          _context18.prev = 13;
          _context18.t0 = _context18["catch"](0);
          next(_context18.t0);
        case 16:
        case "end":
          return _context18.stop();
      }
    }, _callee18, null, [[0, 13]]);
  }));
  return function putEstatusVenta(_x52, _x53, _x54) {
    return _ref18.apply(this, arguments);
  };
}();

// PUT (MODIFY) UBICACIÓN
var putUbicacion = exports.putUbicacion = /*#__PURE__*/function () {
  var _ref19 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19(req, res, next) {
    var _req$params14, id, idNegocioOk, idAlmacenOk, serie, ubicacionId, ubicacion, response;
    return _regenerator["default"].wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          _context19.prev = 0;
          _req$params14 = req.params, id = _req$params14.id, idNegocioOk = _req$params14.idNegocioOk, idAlmacenOk = _req$params14.idAlmacenOk, serie = _req$params14.serie, ubicacionId = _req$params14.ubicacionId;
          ubicacion = req.body;
          _context19.next = 5;
          return InventariosServices.putUbicacion(id, idNegocioOk, idAlmacenOk, serie, ubicacionId, ubicacion);
        case 5:
          response = _context19.sent;
          if (response) {
            _context19.next = 10;
            break;
          }
          throw _boom["default"].badRequest("No se pudo actualizar la ubicación.");
        case 10:
          res.status(200).json(response);
        case 11:
          _context19.next = 16;
          break;
        case 13:
          _context19.prev = 13;
          _context19.t0 = _context19["catch"](0);
          next(_context19.t0);
        case 16:
        case "end":
          return _context19.stop();
      }
    }, _callee19, null, [[0, 13]]);
  }));
  return function putUbicacion(_x55, _x56, _x57) {
    return _ref19.apply(this, arguments);
  };
}();

// DELETE INVENTARIO BY ID
var deleteInventario = exports.deleteInventario = /*#__PURE__*/function () {
  var _ref20 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20(req, res, next) {
    var id, deletedInventario;
    return _regenerator["default"].wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          _context20.prev = 0;
          id = req.params.id;
          _context20.next = 4;
          return InventariosServices.deleteInventario(id);
        case 4:
          deletedInventario = _context20.sent;
          if (deletedInventario) {
            _context20.next = 9;
            break;
          }
          throw _boom["default"].badRequest("No se pudo eliminar el Inventario.");
        case 9:
          res.status(200).json(deletedInventario);
        case 10:
          _context20.next = 15;
          break;
        case 12:
          _context20.prev = 12;
          _context20.t0 = _context20["catch"](0);
          next(_context20.t0);
        case 15:
        case "end":
          return _context20.stop();
      }
    }, _callee20, null, [[0, 12]]);
  }));
  return function deleteInventario(_x58, _x59, _x60) {
    return _ref20.apply(this, arguments);
  };
}();

// DELETE NEGOCIO BY ID
var deleteNegocio = exports.deleteNegocio = /*#__PURE__*/function () {
  var _ref21 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee21(req, res, next) {
    var _req$params15, id, idNegocioOk, response;
    return _regenerator["default"].wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          _context21.prev = 0;
          _req$params15 = req.params, id = _req$params15.id, idNegocioOk = _req$params15.idNegocioOk;
          _context21.next = 4;
          return InventariosServices.deleteNegocio(id, idNegocioOk);
        case 4:
          response = _context21.sent;
          if (response) {
            _context21.next = 9;
            break;
          }
          throw _boom["default"].badRequest("No se pudo eliminar el negocio.");
        case 9:
          res.status(200).json(response);
        case 10:
          _context21.next = 15;
          break;
        case 12:
          _context21.prev = 12;
          _context21.t0 = _context21["catch"](0);
          next(_context21.t0);
        case 15:
        case "end":
          return _context21.stop();
      }
    }, _callee21, null, [[0, 12]]);
  }));
  return function deleteNegocio(_x61, _x62, _x63) {
    return _ref21.apply(this, arguments);
  };
}();

// DELETE ALMACÉN BY ID
var deleteAlmacen = exports.deleteAlmacen = /*#__PURE__*/function () {
  var _ref22 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee22(req, res, next) {
    var _req$params16, id, idNegocioOk, idAlmacenOk, response;
    return _regenerator["default"].wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          _context22.prev = 0;
          _req$params16 = req.params, id = _req$params16.id, idNegocioOk = _req$params16.idNegocioOk, idAlmacenOk = _req$params16.idAlmacenOk;
          _context22.next = 4;
          return InventariosServices.deleteAlmacen(id, idNegocioOk, idAlmacenOk);
        case 4:
          response = _context22.sent;
          if (response) {
            _context22.next = 9;
            break;
          }
          throw _boom["default"].badRequest("No se pudo eliminar el almacén.");
        case 9:
          res.status(200).json(response);
        case 10:
          _context22.next = 15;
          break;
        case 12:
          _context22.prev = 12;
          _context22.t0 = _context22["catch"](0);
          next(_context22.t0);
        case 15:
        case "end":
          return _context22.stop();
      }
    }, _callee22, null, [[0, 12]]);
  }));
  return function deleteAlmacen(_x64, _x65, _x66) {
    return _ref22.apply(this, arguments);
  };
}();

// DELETE SERIE BY ID
var deleteSerie = exports.deleteSerie = /*#__PURE__*/function () {
  var _ref23 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee23(req, res, next) {
    var _req$params17, id, idNegocioOk, idAlmacenOk, serieId, response;
    return _regenerator["default"].wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          _context23.prev = 0;
          _req$params17 = req.params, id = _req$params17.id, idNegocioOk = _req$params17.idNegocioOk, idAlmacenOk = _req$params17.idAlmacenOk, serieId = _req$params17.serieId;
          _context23.next = 4;
          return InventariosServices.deleteSerie(id, idNegocioOk, idAlmacenOk, serieId);
        case 4:
          response = _context23.sent;
          if (response) {
            _context23.next = 9;
            break;
          }
          throw _boom["default"].badRequest("No se pudo eliminar la serie.");
        case 9:
          res.status(200).json(response);
        case 10:
          _context23.next = 15;
          break;
        case 12:
          _context23.prev = 12;
          _context23.t0 = _context23["catch"](0);
          next(_context23.t0);
        case 15:
        case "end":
          return _context23.stop();
      }
    }, _callee23, null, [[0, 12]]);
  }));
  return function deleteSerie(_x67, _x68, _x69) {
    return _ref23.apply(this, arguments);
  };
}();

// DELETE ESTATUS FÍSICO BY ID
var deleteEstatusFisico = exports.deleteEstatusFisico = /*#__PURE__*/function () {
  var _ref24 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee24(req, res, next) {
    var _req$params18, id, idNegocioOk, idAlmacenOk, serie, estatusFisicoId, response;
    return _regenerator["default"].wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          _context24.prev = 0;
          _req$params18 = req.params, id = _req$params18.id, idNegocioOk = _req$params18.idNegocioOk, idAlmacenOk = _req$params18.idAlmacenOk, serie = _req$params18.serie, estatusFisicoId = _req$params18.estatusFisicoId;
          _context24.next = 4;
          return InventariosServices.deleteEstatusFisico(id, idNegocioOk, idAlmacenOk, serie, estatusFisicoId);
        case 4:
          response = _context24.sent;
          if (response) {
            _context24.next = 9;
            break;
          }
          throw _boom["default"].badRequest("No se pudo eliminar el estatus físico.");
        case 9:
          res.status(200).json(response);
        case 10:
          _context24.next = 15;
          break;
        case 12:
          _context24.prev = 12;
          _context24.t0 = _context24["catch"](0);
          next(_context24.t0);
        case 15:
        case "end":
          return _context24.stop();
      }
    }, _callee24, null, [[0, 12]]);
  }));
  return function deleteEstatusFisico(_x70, _x71, _x72) {
    return _ref24.apply(this, arguments);
  };
}();

// DELETE ESTATUS VENTA BY ID
var deleteEstatusVenta = exports.deleteEstatusVenta = /*#__PURE__*/function () {
  var _ref25 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee25(req, res, next) {
    var _req$params19, id, idNegocioOk, idAlmacenOk, serie, estatusVentaId, response;
    return _regenerator["default"].wrap(function _callee25$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          _context25.prev = 0;
          _req$params19 = req.params, id = _req$params19.id, idNegocioOk = _req$params19.idNegocioOk, idAlmacenOk = _req$params19.idAlmacenOk, serie = _req$params19.serie, estatusVentaId = _req$params19.estatusVentaId;
          _context25.next = 4;
          return InventariosServices.deleteEstatusVenta(id, idNegocioOk, idAlmacenOk, serie, estatusVentaId);
        case 4:
          response = _context25.sent;
          if (response) {
            _context25.next = 9;
            break;
          }
          throw _boom["default"].badRequest("No se pudo eliminar el estatus de venta.");
        case 9:
          res.status(200).json(response);
        case 10:
          _context25.next = 15;
          break;
        case 12:
          _context25.prev = 12;
          _context25.t0 = _context25["catch"](0);
          next(_context25.t0);
        case 15:
        case "end":
          return _context25.stop();
      }
    }, _callee25, null, [[0, 12]]);
  }));
  return function deleteEstatusVenta(_x73, _x74, _x75) {
    return _ref25.apply(this, arguments);
  };
}();

// DELETE UBICACIÓN BY ID
var deleteUbicacion = exports.deleteUbicacion = /*#__PURE__*/function () {
  var _ref26 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee26(req, res, next) {
    var _req$params20, id, idNegocioOk, idAlmacenOk, serie, ubicacionId, response;
    return _regenerator["default"].wrap(function _callee26$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          _context26.prev = 0;
          _req$params20 = req.params, id = _req$params20.id, idNegocioOk = _req$params20.idNegocioOk, idAlmacenOk = _req$params20.idAlmacenOk, serie = _req$params20.serie, ubicacionId = _req$params20.ubicacionId;
          _context26.next = 4;
          return InventariosServices.deleteUbicacion(id, idNegocioOk, idAlmacenOk, serie, ubicacionId);
        case 4:
          response = _context26.sent;
          if (response) {
            _context26.next = 9;
            break;
          }
          throw _boom["default"].badRequest("No se pudo eliminar la ubicación.");
        case 9:
          res.status(200).json(response);
        case 10:
          _context26.next = 15;
          break;
        case 12:
          _context26.prev = 12;
          _context26.t0 = _context26["catch"](0);
          next(_context26.t0);
        case 15:
        case "end":
          return _context26.stop();
      }
    }, _callee26, null, [[0, 12]]);
  }));
  return function deleteUbicacion(_x76, _x77, _x78) {
    return _ref26.apply(this, arguments);
  };
}();

// *************************************************************************
//                               CAT_PROD_SERV
// *************************************************************************

// GET ALL PRODSERV
var getAllProdserv = exports.getAllProdserv = /*#__PURE__*/function () {
  var _ref27 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee27(req, res, next) {
    var prodservList;
    return _regenerator["default"].wrap(function _callee27$(_context27) {
      while (1) switch (_context27.prev = _context27.next) {
        case 0:
          _context27.prev = 0;
          _context27.next = 3;
          return InventariosServices.getAllProdserv();
        case 3:
          prodservList = _context27.sent;
          if (prodservList) {
            _context27.next = 8;
            break;
          }
          throw _boom["default"].notFound("No se encontraron productos o servicios.");
        case 8:
          res.status(200).json(prodservList);
        case 9:
          _context27.next = 14;
          break;
        case 11:
          _context27.prev = 11;
          _context27.t0 = _context27["catch"](0);
          next(_context27.t0);
        case 14:
        case "end":
          return _context27.stop();
      }
    }, _callee27, null, [[0, 11]]);
  }));
  return function getAllProdserv(_x79, _x80, _x81) {
    return _ref27.apply(this, arguments);
  };
}();

// GET PRODUCT PRESENTATIONS
var getProductPresentations = exports.getProductPresentations = /*#__PURE__*/function () {
  var _ref28 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee28(req, res, next) {
    var productPresentations;
    return _regenerator["default"].wrap(function _callee28$(_context28) {
      while (1) switch (_context28.prev = _context28.next) {
        case 0:
          _context28.prev = 0;
          _context28.next = 3;
          return InventariosServices.getProductPresentations();
        case 3:
          productPresentations = _context28.sent;
          if (productPresentations) {
            _context28.next = 8;
            break;
          }
          throw _boom["default"].notFound("No se encontraron presentaciones de productos.");
        case 8:
          res.status(200).json(productPresentations);
        case 9:
          _context28.next = 14;
          break;
        case 11:
          _context28.prev = 11;
          _context28.t0 = _context28["catch"](0);
          next(_context28.t0);
        case 14:
        case "end":
          return _context28.stop();
      }
    }, _callee28, null, [[0, 11]]);
  }));
  return function getProductPresentations(_x82, _x83, _x84) {
    return _ref28.apply(this, arguments);
  };
}();

// GET CONCATENATED DESCRIPTION
var getConcatenatedDescription = exports.getConcatenatedDescription = /*#__PURE__*/function () {
  var _ref29 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee29(req, res, next) {
    var description;
    return _regenerator["default"].wrap(function _callee29$(_context29) {
      while (1) switch (_context29.prev = _context29.next) {
        case 0:
          _context29.prev = 0;
          _context29.next = 3;
          return InventariosServices.getConcatenatedDescription();
        case 3:
          description = _context29.sent;
          if (description) {
            _context29.next = 8;
            break;
          }
          throw _boom["default"].notFound("No se encontró la descripción concatenada.");
        case 8:
          res.status(200).json(description);
        case 9:
          _context29.next = 14;
          break;
        case 11:
          _context29.prev = 11;
          _context29.t0 = _context29["catch"](0);
          next(_context29.t0);
        case 14:
        case "end":
          return _context29.stop();
      }
    }, _callee29, null, [[0, 11]]);
  }));
  return function getConcatenatedDescription(_x85, _x86, _x87) {
    return _ref29.apply(this, arguments);
  };
}();