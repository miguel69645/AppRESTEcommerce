"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putInventarioItem = exports.postInventario = exports.getProductPresentations = exports.getInventarios = exports.getInventario = exports.getConcatenatedDescription = exports.getAllStores = exports.getAllStatus = exports.getAllSeries = exports.getAllProdserv = exports.deleteInventario = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _inventarios = require("../models/inventarios");
var _boom = _interopRequireDefault(require("@hapi/boom"));
// *************************************************************************
//                               CAT_INVENTARIOS
// *************************************************************************

// GET INVENTARIOS LIST
var getInventarios = exports.getInventarios = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var inventariosList;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _inventarios.Inventarios.find();
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
          return _inventarios.Inventarios.findById(id);
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
          newInventarioItem = new _inventarios.Inventarios(paInventarioItem);
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
          return _inventarios.Inventarios.findOneAndUpdate({
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
          return _inventarios.Inventarios.findOneAndDelete({
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

// GET ALL STORES
var getAllStores = exports.getAllStores = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(id, selectedBusinessId) {
    var inventarioItem, selectedBusiness, almacenes;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return _inventarios.Inventarios.findById(id);
        case 3:
          inventarioItem = _context6.sent;
          if (inventarioItem) {
            _context6.next = 6;
            break;
          }
          throw _boom["default"].notFound("Inventario no encontrado.");
        case 6:
          selectedBusiness = inventarioItem.negocios.find(function (negocio) {
            return negocio.IdNegocioOK === selectedBusinessId;
          });
          if (selectedBusiness) {
            _context6.next = 9;
            break;
          }
          throw _boom["default"].notFound("Negocio no encontrado.");
        case 9:
          almacenes = selectedBusiness.almacenes.map(function (almacen) {
            return {
              IdAlmacenOK: almacen.IdAlmacenOK,
              Principal: almacen.Principal,
              CantidadActual: almacen.CantidadActual,
              CantidadDisponible: almacen.CantidadDisponible,
              CantidadApartada: almacen.CantidadApartada,
              CantidadTransito: almacen.CantidadTransito,
              CantidadMerma: almacen.CantidadMerma,
              StockMaximo: almacen.StockMaximo,
              StockMinimo: almacen.StockMinimo
            };
          });
          return _context6.abrupt("return", almacenes);
        case 13:
          _context6.prev = 13;
          _context6.t0 = _context6["catch"](0);
          throw _boom["default"].internal(_context6.t0);
        case 16:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 13]]);
  }));
  return function getAllStores(_x6, _x7) {
    return _ref6.apply(this, arguments);
  };
}();

// GET ALL SERIES
var getAllSeries = exports.getAllSeries = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(id, selectedBusinessId, selectedStoresId) {
    var inventarioItem, selectedBusiness, selectedStore, series;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return _inventarios.Inventarios.findById(id);
        case 3:
          inventarioItem = _context7.sent;
          if (inventarioItem) {
            _context7.next = 6;
            break;
          }
          throw _boom["default"].notFound("Inventario no encontrado.");
        case 6:
          selectedBusiness = inventarioItem.negocios.find(function (negocio) {
            return negocio.IdNegocioOK === selectedBusinessId;
          });
          if (selectedBusiness) {
            _context7.next = 9;
            break;
          }
          throw _boom["default"].notFound("Negocio no encontrado.");
        case 9:
          selectedStore = selectedBusiness.almacenes.find(function (almacen) {
            return almacen.IdAlmacenOK === selectedStoresId;
          });
          if (selectedStore) {
            _context7.next = 12;
            break;
          }
          throw _boom["default"].notFound("Almacén no encontrado.");
        case 12:
          series = selectedStore.series.map(function (serie) {
            return {
              Serie: serie.Serie,
              Placa: serie.Placa,
              Observacion: serie.Observacion
            };
          });
          return _context7.abrupt("return", series);
        case 16:
          _context7.prev = 16;
          _context7.t0 = _context7["catch"](0);
          throw _boom["default"].internal(_context7.t0);
        case 19:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 16]]);
  }));
  return function getAllSeries(_x8, _x9, _x10) {
    return _ref7.apply(this, arguments);
  };
}();

// GET ALL STATUS
var getAllStatus = exports.getAllStatus = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(id, selectedBusinessId, selectedStoresId, selectedSeriesId) {
    var inventarioItem, selectedBusiness, selectedStore, selectedSeries, status, location;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return _inventarios.Inventarios.findById(id);
        case 3:
          inventarioItem = _context8.sent;
          if (inventarioItem) {
            _context8.next = 6;
            break;
          }
          throw _boom["default"].notFound("Inventario no encontrado.");
        case 6:
          selectedBusiness = inventarioItem.negocios.find(function (negocio) {
            return negocio.IdNegocioOK === selectedBusinessId;
          });
          if (selectedBusiness) {
            _context8.next = 9;
            break;
          }
          throw _boom["default"].notFound("Negocio no encontrado.");
        case 9:
          selectedStore = selectedBusiness.almacenes.find(function (almacen) {
            return almacen.IdAlmacenOK === selectedStoresId;
          });
          if (selectedStore) {
            _context8.next = 12;
            break;
          }
          throw _boom["default"].notFound("Almacén no encontrado.");
        case 12:
          selectedSeries = selectedStore.series.find(function (serie) {
            return serie.Serie === selectedSeriesId;
          });
          if (selectedSeries) {
            _context8.next = 15;
            break;
          }
          throw _boom["default"].notFound("Serie no encontrada.");
        case 15:
          status = [].concat((0, _toConsumableArray2["default"])(selectedSeries.estatus_venta.map(function (status) {
            return {
              IdTipoEstatusOK: status.IdTipoEstatusOK,
              Actual: status.Actual
            };
          })), (0, _toConsumableArray2["default"])(selectedSeries.estatus_fisico.map(function (status) {
            return {
              IdTipoEstatusOK: status.IdTipoEstatusOK,
              Actual: status.Actual
            };
          })));
          location = [selectedSeries.ubicaciones.map(function (location) {
            return {
              IdAlmacenOK: location.IdAlmacenOK,
              Ubicacion: location.Ubicacion,
              Actual: location.Actual
            };
          })];
          return _context8.abrupt("return", {
            status: status,
            location: location
          });
        case 20:
          _context8.prev = 20;
          _context8.t0 = _context8["catch"](0);
          throw _boom["default"].internal(_context8.t0);
        case 23:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 20]]);
  }));
  return function getAllStatus(_x11, _x12, _x13, _x14) {
    return _ref8.apply(this, arguments);
  };
}();

// *************************************************************************
//                               CAT_PROD_SERV
// *************************************************************************

// GET ALL PRODSERV
var getAllProdserv = exports.getAllProdserv = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9() {
    var prodservList;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return _inventarios.Prodserv.find();
        case 3:
          prodservList = _context9.sent;
          return _context9.abrupt("return", prodservList);
        case 7:
          _context9.prev = 7;
          _context9.t0 = _context9["catch"](0);
          throw _boom["default"].internal(_context9.t0);
        case 10:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 7]]);
  }));
  return function getAllProdserv() {
    return _ref9.apply(this, arguments);
  };
}();

// GET PRODUCT PRESENTATIONS
var getProductPresentations = exports.getProductPresentations = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10() {
    var productPresentations;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return _inventarios.Prodserv.aggregate([{
            $unwind: "$presentaciones"
          }, {
            $project: {
              idProducto: "$IdProdServOK",
              idPresentacion: "$presentaciones.IdPresentaOK",
              descripcionDePresentacion: {
                $concat: ["$DesProdServ", " - ", "$presentaciones.DesPresenta"]
              }
            }
          }]);
        case 3:
          productPresentations = _context10.sent;
          return _context10.abrupt("return", productPresentations);
        case 7:
          _context10.prev = 7;
          _context10.t0 = _context10["catch"](0);
          throw _boom["default"].internal(_context10.t0);
        case 10:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 7]]);
  }));
  return function getProductPresentations() {
    return _ref10.apply(this, arguments);
  };
}();

// GET CONCATENATED DESCRIPTION
var getConcatenatedDescription = exports.getConcatenatedDescription = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11() {
    var result;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return _inventarios.Inventarios.aggregate([{
            $lookup: {
              from: "cat_prod_serv",
              localField: "IdProdServOK",
              foreignField: "IdProdServOK",
              as: "prod_serv"
            }
          }, {
            $unwind: "$prod_serv"
          }, {
            $unwind: "$prod_serv.presentaciones"
          }, {
            $match: {
              $expr: {
                $eq: ["$IdPresentaOK", "$prod_serv.presentaciones.IdPresentaOK"]
              }
            }
          }, {
            $addFields: {
              DescripcionConcatenada: {
                $concat: ["$prod_serv.DesProdServ", " - ", "$prod_serv.presentaciones.DesPresenta"]
              }
            }
          }, {
            $project: {
              _id: 0,
              DescripcionConcatenada: 1
            }
          }]);
        case 3:
          result = _context11.sent;
          return _context11.abrupt("return", result);
        case 7:
          _context11.prev = 7;
          _context11.t0 = _context11["catch"](0);
          throw _boom["default"].internal(_context11.t0);
        case 10:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 7]]);
  }));
  return function getConcatenatedDescription() {
    return _ref11.apply(this, arguments);
  };
}();