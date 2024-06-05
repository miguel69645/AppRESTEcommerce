"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putUbicacion = exports.putSerie = exports.putNegocio = exports.putInventarioItem = exports.putEstatusVenta = exports.putEstatusFisico = exports.putAlmacen = exports.postUbicacion = exports.postSerie = exports.postNegocio = exports.postInventario = exports.postEstatusVenta = exports.postEstatusFisico = exports.postAlmacen = exports.getInventarios = exports.getInventario = exports.getConcatenatedDescription = exports.getAllStores = exports.getAllStatus = exports.getAllSeries = exports.getAllProdserv = exports.deleteUbicacion = exports.deleteSerie = exports.deleteNegocio = exports.deleteInventario = exports.deleteEstatusVenta = exports.deleteEstatusFisico = exports.deleteAlmacen = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
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

// GET ALL STORES
var getAllStores = exports.getAllStores = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id, selectedBusinessId) {
    var inventarioItem, selectedBusiness, almacenes;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _inventarios.Inventarios.findById(id);
        case 3:
          inventarioItem = _context3.sent;
          if (inventarioItem) {
            _context3.next = 6;
            break;
          }
          throw _boom["default"].notFound("Inventario no encontrado.");
        case 6:
          selectedBusiness = inventarioItem.negocios.find(function (negocio) {
            return negocio.IdNegocioOK === selectedBusinessId;
          });
          if (selectedBusiness) {
            _context3.next = 9;
            break;
          }
          throw _boom["default"].notFound("Negocio no encontrado.");
        case 9:
          almacenes = selectedBusiness.almacenes.map(function (almacen) {
            return {
              IdAlmacenOK: almacen.IdAlmacenOK,
              Descripcion: almacen.Descripcion,
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
          return _context3.abrupt("return", almacenes);
        case 13:
          _context3.prev = 13;
          _context3.t0 = _context3["catch"](0);
          throw _boom["default"].internal(_context3.t0);
        case 16:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 13]]);
  }));
  return function getAllStores(_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();

// GET ALL SERIES
var getAllSeries = exports.getAllSeries = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id, selectedBusinessId, selectedStoresId) {
    var inventarioItem, selectedBusiness, selectedStore, series;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _inventarios.Inventarios.findById(id);
        case 3:
          inventarioItem = _context4.sent;
          if (inventarioItem) {
            _context4.next = 6;
            break;
          }
          throw _boom["default"].notFound("Inventario no encontrado.");
        case 6:
          selectedBusiness = inventarioItem.negocios.find(function (negocio) {
            return negocio.IdNegocioOK === selectedBusinessId;
          });
          if (selectedBusiness) {
            _context4.next = 9;
            break;
          }
          throw _boom["default"].notFound("Negocio no encontrado.");
        case 9:
          selectedStore = selectedBusiness.almacenes.find(function (almacen) {
            return almacen.IdAlmacenOK === selectedStoresId;
          });
          if (selectedStore) {
            _context4.next = 12;
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
          return _context4.abrupt("return", series);
        case 16:
          _context4.prev = 16;
          _context4.t0 = _context4["catch"](0);
          throw _boom["default"].internal(_context4.t0);
        case 19:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 16]]);
  }));
  return function getAllSeries(_x4, _x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();

// GET ALL STATUS
var getAllStatus = exports.getAllStatus = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id, selectedBusinessId, selectedStoresId, selectedSeriesId) {
    var inventarioItem, selectedBusiness, selectedStore, selectedSeries, status, location;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _inventarios.Inventarios.findById(id);
        case 3:
          inventarioItem = _context5.sent;
          if (inventarioItem) {
            _context5.next = 6;
            break;
          }
          throw _boom["default"].notFound("Inventario no encontrado.");
        case 6:
          selectedBusiness = inventarioItem.negocios.find(function (negocio) {
            return negocio.IdNegocioOK === selectedBusinessId;
          });
          if (selectedBusiness) {
            _context5.next = 9;
            break;
          }
          throw _boom["default"].notFound("Negocio no encontrado.");
        case 9:
          selectedStore = selectedBusiness.almacenes.find(function (almacen) {
            return almacen.IdAlmacenOK === selectedStoresId;
          });
          if (selectedStore) {
            _context5.next = 12;
            break;
          }
          throw _boom["default"].notFound("Almacén no encontrado.");
        case 12:
          selectedSeries = selectedStore.series.find(function (serie) {
            return serie.Serie === selectedSeriesId;
          });
          if (selectedSeries) {
            _context5.next = 15;
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
          return _context5.abrupt("return", {
            status: status,
            location: location
          });
        case 20:
          _context5.prev = 20;
          _context5.t0 = _context5["catch"](0);
          throw _boom["default"].internal(_context5.t0);
        case 23:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 20]]);
  }));
  return function getAllStatus(_x7, _x8, _x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

// POST (ADD) INVENTARIO
var postInventario = exports.postInventario = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(paInventarioItem) {
    var newInventarioItem;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          newInventarioItem = new _inventarios.Inventarios(paInventarioItem);
          _context6.next = 4;
          return newInventarioItem.save();
        case 4:
          return _context6.abrupt("return", _context6.sent);
        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          throw _context6.t0;
        case 10:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 7]]);
  }));
  return function postInventario(_x11) {
    return _ref6.apply(this, arguments);
  };
}();

// POST (ADD) NEGOCIO
var postNegocio = exports.postNegocio = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(id, negocio) {
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return _inventarios.Inventarios.updateOne({
            _id: id
          }, {
            $push: {
              negocios: negocio
            }
          });
        case 3:
          return _context7.abrupt("return", {
            message: "Negocio agregado con éxito"
          });
        case 6:
          _context7.prev = 6;
          _context7.t0 = _context7["catch"](0);
          throw _boom["default"].internal(_context7.t0);
        case 9:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 6]]);
  }));
  return function postNegocio(_x12, _x13) {
    return _ref7.apply(this, arguments);
  };
}();

// POST (ADD) ALMACÉN
var postAlmacen = exports.postAlmacen = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(id, idNegocioOk, almacen) {
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return _inventarios.Inventarios.updateOne({
            _id: id,
            negocios: {
              $elemMatch: {
                IdNegocioOK: idNegocioOk
              }
            }
          }, {
            $push: {
              "negocios.$.almacenes": almacen
            }
          });
        case 3:
          return _context8.abrupt("return", {
            message: "Almacén agregado con éxito"
          });
        case 6:
          _context8.prev = 6;
          _context8.t0 = _context8["catch"](0);
          throw _boom["default"].internal(_context8.t0);
        case 9:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 6]]);
  }));
  return function postAlmacen(_x14, _x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

// POST (ADD) SERIE
var postSerie = exports.postSerie = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(id, idNegocioOk, idAlmacenOk, serie) {
    var inventario, negocioIndex, almacenIndex, path, update;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return _inventarios.Inventarios.findOne({
            _id: id
          }, {
            negocios: 1
          });
        case 3:
          inventario = _context9.sent;
          negocioIndex = inventario.negocios.findIndex(function (negocio) {
            return negocio.IdNegocioOK === idNegocioOk;
          });
          almacenIndex = inventario.negocios[negocioIndex].almacenes.findIndex(function (almacen) {
            return almacen.IdAlmacenOK === idAlmacenOk;
          });
          if (!(negocioIndex === -1 || almacenIndex === -1)) {
            _context9.next = 8;
            break;
          }
          throw _boom["default"].notFound("Negocio o almacén no encontrado");
        case 8:
          // Construye el camino de la serie correctamente
          path = "negocios.".concat(negocioIndex, ".almacenes.").concat(almacenIndex, ".series"); // Prepara la actualización con $push
          update = {
            $push: (0, _defineProperty2["default"])({}, path, {
              Serie: serie.Serie,
              Placa: serie.Placa,
              Observacion: serie.Observacion,
              estatus_fisico: serie.estatus_fisico,
              estatus_venta: serie.estatus_venta,
              ubicaciones: serie.ubicaciones
            })
          }; // Ejecuta la actualización
          _context9.next = 12;
          return _inventarios.Inventarios.updateOne({
            _id: id
          }, update);
        case 12:
          return _context9.abrupt("return", {
            message: "Serie agregada con éxito"
          });
        case 15:
          _context9.prev = 15;
          _context9.t0 = _context9["catch"](0);
          throw _boom["default"].internal(_context9.t0);
        case 18:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 15]]);
  }));
  return function postSerie(_x17, _x18, _x19, _x20) {
    return _ref9.apply(this, arguments);
  };
}();

// POST (ADD) ESTATUS FÍSICO
var postEstatusFisico = exports.postEstatusFisico = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(id, idNegocioOk, idAlmacenOk, serie, estatusFisico) {
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return _inventarios.Inventarios.updateOne({
            _id: id,
            "negocios.IdNegocioOK": idNegocioOk,
            "negocios.almacenes.IdAlmacenOK": idAlmacenOk,
            "negocios.almacenes.series.Serie": serie
          }, {
            $push: {
              "negocios.$[n].almacenes.$[a].series.$[s].estatus_fisico": estatusFisico
            }
          }, {
            arrayFilters: [{
              "n.IdNegocioOK": idNegocioOk
            }, {
              "a.IdAlmacenOK": idAlmacenOk
            }, {
              "s.Serie": serie
            }]
          });
        case 3:
          return _context10.abrupt("return", {
            message: "Estatus físico agregado con éxito"
          });
        case 6:
          _context10.prev = 6;
          _context10.t0 = _context10["catch"](0);
          throw _boom["default"].internal(_context10.t0);
        case 9:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 6]]);
  }));
  return function postEstatusFisico(_x21, _x22, _x23, _x24, _x25) {
    return _ref10.apply(this, arguments);
  };
}();

// POST (ADD) ESTATUS VENTA
var postEstatusVenta = exports.postEstatusVenta = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(id, idNegocioOk, idAlmacenOk, serie, estatusVenta) {
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return _inventarios.Inventarios.updateOne({
            _id: id,
            "negocios.IdNegocioOK": idNegocioOk,
            "negocios.almacenes.IdAlmacenOK": idAlmacenOk,
            "negocios.almacenes.series.Serie": serie
          }, {
            $push: {
              "negocios.$[n].almacenes.$[a].series.$[s].estatus_venta": estatusVenta
            }
          }, {
            arrayFilters: [{
              "n.IdNegocioOK": idNegocioOk
            }, {
              "a.IdAlmacenOK": idAlmacenOk
            }, {
              "s.Serie": serie
            }]
          });
        case 3:
          return _context11.abrupt("return", {
            message: "Estatus de venta agregado con éxito"
          });
        case 6:
          _context11.prev = 6;
          _context11.t0 = _context11["catch"](0);
          throw _boom["default"].internal(_context11.t0);
        case 9:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 6]]);
  }));
  return function postEstatusVenta(_x26, _x27, _x28, _x29, _x30) {
    return _ref11.apply(this, arguments);
  };
}();

// POST (ADD) UBICACIÓN
var postUbicacion = exports.postUbicacion = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(id, idNegocioOk, idAlmacenOk, serie, ubicacion) {
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          _context12.next = 3;
          return _inventarios.Inventarios.updateOne({
            _id: id,
            "negocios.IdNegocioOK": idNegocioOk,
            "negocios.almacenes.IdAlmacenOK": idAlmacenOk,
            "negocios.almacenes.series.Serie": serie
          }, {
            $push: {
              "negocios.$[n].almacenes.$[a].series.$[s].ubicaciones": ubicacion
            }
          }, {
            arrayFilters: [{
              "n.IdNegocioOK": idNegocioOk
            }, {
              "a.IdAlmacenOK": idAlmacenOk
            }, {
              "s.Serie": serie
            }]
          });
        case 3:
          return _context12.abrupt("return", {
            message: "Ubicación agregada con éxito"
          });
        case 6:
          _context12.prev = 6;
          _context12.t0 = _context12["catch"](0);
          throw _boom["default"].internal(_context12.t0);
        case 9:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 6]]);
  }));
  return function postUbicacion(_x31, _x32, _x33, _x34, _x35) {
    return _ref12.apply(this, arguments);
  };
}();

// PUT (MODIFY) INVENTARIO
var putInventarioItem = exports.putInventarioItem = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(id, paInventarioItem) {
    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          _context13.next = 3;
          return _inventarios.Inventarios.updateOne({
            _id: id
          }, {
            $set: {
              IdInstitutoOK: paInventarioItem.IdInstitutoOK,
              IdProdServOK: paInventarioItem.IdProdServOK,
              IdPresentaOK: paInventarioItem.IdPresentaOK
            }
          }, {
            "new": true
          });
        case 3:
          return _context13.abrupt("return", _context13.sent);
        case 6:
          _context13.prev = 6;
          _context13.t0 = _context13["catch"](0);
          throw _boom["default"].badImplementation(_context13.t0);
        case 9:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 6]]);
  }));
  return function putInventarioItem(_x36, _x37) {
    return _ref13.apply(this, arguments);
  };
}();

// PUT (MODIFY) NEGOCIO
var putNegocio = exports.putNegocio = /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(id, idNegocioOk, negocio) {
    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          _context14.next = 3;
          return _inventarios.Inventarios.updateOne({
            _id: id,
            "negocios.IdNegocioOK": idNegocioOk
          }, {
            $set: {
              "negocios.$.IdNegocioOK": negocio.IdNegocioOK,
              "negocios.$.descripcionNegocio": negocio.descripcionNegocio,
              "negocios.$.ControlaSerie": negocio.ControlaSerie
            }
          });
        case 3:
          return _context14.abrupt("return", {
            message: "Negocio actualizado con éxito"
          });
        case 6:
          _context14.prev = 6;
          _context14.t0 = _context14["catch"](0);
          throw _boom["default"].internal(_context14.t0);
        case 9:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[0, 6]]);
  }));
  return function putNegocio(_x38, _x39, _x40) {
    return _ref14.apply(this, arguments);
  };
}();

// PUT (MODIFY) ALMACÉN
var putAlmacen = exports.putAlmacen = /*#__PURE__*/function () {
  var _ref15 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(id, idNegocioOk, idAlmacenOk, almacen) {
    return _regenerator["default"].wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          _context15.next = 3;
          return _inventarios.Inventarios.updateOne({
            _id: id,
            "negocios.IdNegocioOK": idNegocioOk,
            "negocios.almacenes.IdAlmacenOK": idAlmacenOk
          }, {
            $set: {
              "negocios.$[n].almacenes.$[a].Descripcion": almacen.Descripcion,
              "negocios.$[n].almacenes.$[a].Principal": almacen.Principal,
              "negocios.$[n].almacenes.$[a].CantidadActual": almacen.CantidadActual,
              "negocios.$[n].almacenes.$[a].CantidadDisponible": almacen.CantidadDisponible,
              "negocios.$[n].almacenes.$[a].CantidadApartada": almacen.CantidadApartada,
              "negocios.$[n].almacenes.$[a].CantidadTransito": almacen.CantidadTransito,
              "negocios.$[n].almacenes.$[a].CantidadMerma": almacen.CantidadMerma,
              "negocios.$[n].almacenes.$[a].StockMaximo": almacen.StockMaximo,
              "negocios.$[n].almacenes.$[a].StockMinimo": almacen.StockMinimo
            }
          }, {
            arrayFilters: [{
              "n.IdNegocioOK": idNegocioOk
            }, {
              "a.IdAlmacenOK": idAlmacenOk
            }]
          });
        case 3:
          return _context15.abrupt("return", {
            message: "Almacén actualizado con éxito"
          });
        case 6:
          _context15.prev = 6;
          _context15.t0 = _context15["catch"](0);
          throw _boom["default"].internal(_context15.t0);
        case 9:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[0, 6]]);
  }));
  return function putAlmacen(_x41, _x42, _x43, _x44) {
    return _ref15.apply(this, arguments);
  };
}();

// PUT (MODIFY) SERIE
var putSerie = exports.putSerie = /*#__PURE__*/function () {
  var _ref16 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(id, idNegocioOk, idAlmacenOk, serieId, serie) {
    return _regenerator["default"].wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.prev = 0;
          _context16.next = 3;
          return _inventarios.Inventarios.updateOne({
            _id: id,
            "negocios.IdNegocioOK": idNegocioOk,
            "negocios.almacenes.IdAlmacenOK": idAlmacenOk,
            "negocios.almacenes.series.Serie": serieId
          }, {
            $set: {
              "negocios.$[n].almacenes.$[a].series.$[s].Serie": serie.Serie,
              "negocios.$[n].almacenes.$[a].series.$[s].Placa": serie.Placa,
              "negocios.$[n].almacenes.$[a].series.$[s].Observacion": serie.Observacion
            }
          }, {
            arrayFilters: [{
              "n.IdNegocioOK": idNegocioOk
            }, {
              "a.IdAlmacenOK": idAlmacenOk
            }, {
              "s.Serie": serieId
            }]
          });
        case 3:
          return _context16.abrupt("return", {
            message: "Serie actualizada con éxito"
          });
        case 6:
          _context16.prev = 6;
          _context16.t0 = _context16["catch"](0);
          throw _boom["default"].internal(_context16.t0);
        case 9:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[0, 6]]);
  }));
  return function putSerie(_x45, _x46, _x47, _x48, _x49) {
    return _ref16.apply(this, arguments);
  };
}();

// PUT (MODIFY) ESTATUS FÍSICO
var putEstatusFisico = exports.putEstatusFisico = /*#__PURE__*/function () {
  var _ref17 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(id, idNegocioOk, idAlmacenOk, serie, estatusFisicoId, estatusFisico) {
    return _regenerator["default"].wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.prev = 0;
          _context17.next = 3;
          return _inventarios.Inventarios.updateOne({
            _id: id,
            "negocios.IdNegocioOK": idNegocioOk,
            "negocios.almacenes.IdAlmacenOK": idAlmacenOk,
            "negocios.almacenes.series.Serie": serie,
            "negocios.almacenes.series.estatus_fisico.IdTipoEstatusOK": estatusFisicoId
          }, {
            $set: {
              "negocios.$[n].almacenes.$[a].series.$[s].estatus_fisico.$[ef]": estatusFisico
            }
          }, {
            arrayFilters: [{
              "n.IdNegocioOK": idNegocioOk
            }, {
              "a.IdAlmacenOK": idAlmacenOk
            }, {
              "s.Serie": serie
            }, {
              "ef.IdTipoEstatusOK": estatusFisicoId
            }]
          });
        case 3:
          return _context17.abrupt("return", {
            message: "Estatus físico actualizado con éxito"
          });
        case 6:
          _context17.prev = 6;
          _context17.t0 = _context17["catch"](0);
          throw _boom["default"].internal(_context17.t0);
        case 9:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[0, 6]]);
  }));
  return function putEstatusFisico(_x50, _x51, _x52, _x53, _x54, _x55) {
    return _ref17.apply(this, arguments);
  };
}();

// PUT (MODIFY) ESTATUS VENTA
var putEstatusVenta = exports.putEstatusVenta = /*#__PURE__*/function () {
  var _ref18 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(id, idNegocioOk, idAlmacenOk, serie, estatusVentaId, estatusVenta) {
    return _regenerator["default"].wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.prev = 0;
          _context18.next = 3;
          return _inventarios.Inventarios.updateOne({
            _id: id,
            "negocios.IdNegocioOK": idNegocioOk,
            "negocios.almacenes.IdAlmacenOK": idAlmacenOk,
            "negocios.almacenes.series.Serie": serie,
            "negocios.almacenes.series.estatus_venta.IdTipoEstatusOK": estatusVentaId
          }, {
            $set: {
              "negocios.$[n].almacenes.$[a].series.$[s].estatus_venta.$[ev]": estatusVenta
            }
          }, {
            arrayFilters: [{
              "n.IdNegocioOK": idNegocioOk
            }, {
              "a.IdAlmacenOK": idAlmacenOk
            }, {
              "s.Serie": serie
            }, {
              "ev.IdTipoEstatusOK": estatusVentaId
            }]
          });
        case 3:
          return _context18.abrupt("return", {
            message: "Estatus de venta actualizado con éxito"
          });
        case 6:
          _context18.prev = 6;
          _context18.t0 = _context18["catch"](0);
          throw _boom["default"].internal(_context18.t0);
        case 9:
        case "end":
          return _context18.stop();
      }
    }, _callee18, null, [[0, 6]]);
  }));
  return function putEstatusVenta(_x56, _x57, _x58, _x59, _x60, _x61) {
    return _ref18.apply(this, arguments);
  };
}();

// PUT (MODIFY) UBICACIÓN
var putUbicacion = exports.putUbicacion = /*#__PURE__*/function () {
  var _ref19 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19(id, idNegocioOk, idAlmacenOk, serie, ubicacionId, ubicacion) {
    return _regenerator["default"].wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          _context19.prev = 0;
          _context19.next = 3;
          return _inventarios.Inventarios.updateOne({
            _id: id,
            "negocios.IdNegocioOK": idNegocioOk,
            "negocios.almacenes.IdAlmacenOK": idAlmacenOk,
            "negocios.almacenes.series.Serie": serie,
            "negocios.almacenes.series.ubicaciones.Ubicacion": ubicacionId
          }, {
            $set: {
              "negocios.$[n].almacenes.$[a].series.$[s].ubicaciones.$[u]": ubicacion
            }
          }, {
            arrayFilters: [{
              "n.IdNegocioOK": idNegocioOk
            }, {
              "a.IdAlmacenOK": idAlmacenOk
            }, {
              "s.Serie": serie
            }, {
              "u.Ubicacion": ubicacionId
            }]
          });
        case 3:
          return _context19.abrupt("return", {
            message: "Ubicación actualizada con éxito"
          });
        case 6:
          _context19.prev = 6;
          _context19.t0 = _context19["catch"](0);
          throw _boom["default"].internal(_context19.t0);
        case 9:
        case "end":
          return _context19.stop();
      }
    }, _callee19, null, [[0, 6]]);
  }));
  return function putUbicacion(_x62, _x63, _x64, _x65, _x66, _x67) {
    return _ref19.apply(this, arguments);
  };
}();

// DELETE INVENTARIO BY ID
var deleteInventario = exports.deleteInventario = /*#__PURE__*/function () {
  var _ref20 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20(id) {
    var deletedInventario;
    return _regenerator["default"].wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          _context20.prev = 0;
          _context20.next = 3;
          return _inventarios.Inventarios.findByIdAndDelete(id);
        case 3:
          deletedInventario = _context20.sent;
          if (deletedInventario) {
            _context20.next = 6;
            break;
          }
          throw _boom["default"].badRequest("No se pudo eliminar el Inventario.");
        case 6:
          return _context20.abrupt("return", deletedInventario);
        case 9:
          _context20.prev = 9;
          _context20.t0 = _context20["catch"](0);
          throw _boom["default"].badImplementation(_context20.t0);
        case 12:
        case "end":
          return _context20.stop();
      }
    }, _callee20, null, [[0, 9]]);
  }));
  return function deleteInventario(_x68) {
    return _ref20.apply(this, arguments);
  };
}();

// DELETE NEGOCIO BY ID
var deleteNegocio = exports.deleteNegocio = /*#__PURE__*/function () {
  var _ref21 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee21(id, idNegocioOk) {
    var result;
    return _regenerator["default"].wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          _context21.prev = 0;
          _context21.next = 3;
          return _inventarios.Inventarios.updateOne({
            _id: id
          }, {
            $pull: {
              negocios: {
                IdNegocioOK: idNegocioOk
              }
            }
          });
        case 3:
          result = _context21.sent;
          if (!(result.modifiedCount === 0)) {
            _context21.next = 6;
            break;
          }
          throw _boom["default"].badRequest("No se pudo eliminar el negocio.");
        case 6:
          return _context21.abrupt("return", {
            message: "Negocio eliminado con éxito"
          });
        case 9:
          _context21.prev = 9;
          _context21.t0 = _context21["catch"](0);
          throw _boom["default"].badImplementation(_context21.t0);
        case 12:
        case "end":
          return _context21.stop();
      }
    }, _callee21, null, [[0, 9]]);
  }));
  return function deleteNegocio(_x69, _x70) {
    return _ref21.apply(this, arguments);
  };
}();

// DELETE ALMACÉN BY ID
var deleteAlmacen = exports.deleteAlmacen = /*#__PURE__*/function () {
  var _ref22 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee22(id, idNegocioOk, idAlmacenOk) {
    var result;
    return _regenerator["default"].wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          _context22.prev = 0;
          _context22.next = 3;
          return _inventarios.Inventarios.updateOne({
            _id: id,
            "negocios.IdNegocioOK": idNegocioOk
          }, {
            $pull: {
              "negocios.$.almacenes": {
                IdAlmacenOK: idAlmacenOk
              }
            }
          });
        case 3:
          result = _context22.sent;
          if (!(result.modifiedCount === 0)) {
            _context22.next = 6;
            break;
          }
          throw _boom["default"].badRequest("No se pudo eliminar el almacén.");
        case 6:
          return _context22.abrupt("return", {
            message: "Almacén eliminado con éxito"
          });
        case 9:
          _context22.prev = 9;
          _context22.t0 = _context22["catch"](0);
          throw _boom["default"].badImplementation(_context22.t0);
        case 12:
        case "end":
          return _context22.stop();
      }
    }, _callee22, null, [[0, 9]]);
  }));
  return function deleteAlmacen(_x71, _x72, _x73) {
    return _ref22.apply(this, arguments);
  };
}();

// DELETE SERIE BY ID
var deleteSerie = exports.deleteSerie = /*#__PURE__*/function () {
  var _ref23 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee23(id, idNegocioOk, idAlmacenOk, serieId) {
    var result;
    return _regenerator["default"].wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          _context23.prev = 0;
          _context23.next = 3;
          return _inventarios.Inventarios.updateOne({
            _id: id,
            "negocios.IdNegocioOK": idNegocioOk,
            "negocios.almacenes.IdAlmacenOK": idAlmacenOk
          }, {
            $pull: {
              "negocios.$.almacenes.$[a].series": {
                Serie: serieId
              }
            }
          }, {
            arrayFilters: [{
              "a.IdAlmacenOK": idAlmacenOk
            }]
          });
        case 3:
          result = _context23.sent;
          if (!(result.modifiedCount === 0)) {
            _context23.next = 6;
            break;
          }
          throw _boom["default"].badRequest("No se pudo eliminar la serie.");
        case 6:
          return _context23.abrupt("return", {
            message: "Serie eliminada con éxito"
          });
        case 9:
          _context23.prev = 9;
          _context23.t0 = _context23["catch"](0);
          throw _boom["default"].badImplementation(_context23.t0);
        case 12:
        case "end":
          return _context23.stop();
      }
    }, _callee23, null, [[0, 9]]);
  }));
  return function deleteSerie(_x74, _x75, _x76, _x77) {
    return _ref23.apply(this, arguments);
  };
}();

// DELETE ESTATUS FÍSICO BY ID
var deleteEstatusFisico = exports.deleteEstatusFisico = /*#__PURE__*/function () {
  var _ref24 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee24(id, idNegocioOk, idAlmacenOk, serie, estatusFisicoId) {
    var result;
    return _regenerator["default"].wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          _context24.prev = 0;
          _context24.next = 3;
          return _inventarios.Inventarios.updateOne({
            _id: id,
            "negocios.IdNegocioOK": idNegocioOk,
            "negocios.almacenes.IdAlmacenOK": idAlmacenOk,
            "negocios.almacenes.series.Serie": serie
          }, {
            $pull: {
              "negocios.$[n].almacenes.$[a].series.$[s].estatus_fisico": {
                IdTipoEstatusOK: estatusFisicoId
              }
            }
          }, {
            arrayFilters: [{
              "n.IdNegocioOK": idNegocioOk
            }, {
              "a.IdAlmacenOK": idAlmacenOk
            }, {
              "s.Serie": serie
            }]
          });
        case 3:
          result = _context24.sent;
          if (!(result.modifiedCount === 0)) {
            _context24.next = 6;
            break;
          }
          throw _boom["default"].badRequest("No se pudo eliminar el estatus físico.");
        case 6:
          return _context24.abrupt("return", {
            message: "Estatus físico eliminado con éxito"
          });
        case 9:
          _context24.prev = 9;
          _context24.t0 = _context24["catch"](0);
          throw _boom["default"].badImplementation(_context24.t0);
        case 12:
        case "end":
          return _context24.stop();
      }
    }, _callee24, null, [[0, 9]]);
  }));
  return function deleteEstatusFisico(_x78, _x79, _x80, _x81, _x82) {
    return _ref24.apply(this, arguments);
  };
}();

// DELETE ESTATUS VENTA BY ID
var deleteEstatusVenta = exports.deleteEstatusVenta = /*#__PURE__*/function () {
  var _ref25 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee25(id, idNegocioOk, idAlmacenOk, serie, estatusVentaId) {
    var result;
    return _regenerator["default"].wrap(function _callee25$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          _context25.prev = 0;
          _context25.next = 3;
          return _inventarios.Inventarios.updateOne({
            _id: id,
            "negocios.IdNegocioOK": idNegocioOk,
            "negocios.almacenes.IdAlmacenOK": idAlmacenOk,
            "negocios.almacenes.series.Serie": serie
          }, {
            $pull: {
              "negocios.$[n].almacenes.$[a].series.$[s].estatus_venta": {
                IdTipoEstatusOK: estatusVentaId
              }
            }
          }, {
            arrayFilters: [{
              "n.IdNegocioOK": idNegocioOk
            }, {
              "a.IdAlmacenOK": idAlmacenOk
            }, {
              "s.Serie": serie
            }]
          });
        case 3:
          result = _context25.sent;
          if (!(result.modifiedCount === 0)) {
            _context25.next = 6;
            break;
          }
          throw _boom["default"].badRequest("No se pudo eliminar el estatus de venta.");
        case 6:
          return _context25.abrupt("return", {
            message: "Estatus de venta eliminado con éxito"
          });
        case 9:
          _context25.prev = 9;
          _context25.t0 = _context25["catch"](0);
          throw _boom["default"].badImplementation(_context25.t0);
        case 12:
        case "end":
          return _context25.stop();
      }
    }, _callee25, null, [[0, 9]]);
  }));
  return function deleteEstatusVenta(_x83, _x84, _x85, _x86, _x87) {
    return _ref25.apply(this, arguments);
  };
}();

// DELETE UBICACIÓN BY ID
var deleteUbicacion = exports.deleteUbicacion = /*#__PURE__*/function () {
  var _ref26 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee26(id, idNegocioOk, idAlmacenOk, serie, ubicacionId) {
    var result;
    return _regenerator["default"].wrap(function _callee26$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          _context26.prev = 0;
          _context26.next = 3;
          return _inventarios.Inventarios.updateOne({
            _id: id,
            "negocios.IdNegocioOK": idNegocioOk,
            "negocios.almacenes.IdAlmacenOK": idAlmacenOk,
            "negocios.almacenes.series.Serie": serie
          }, {
            $pull: {
              "negocios.$[n].almacenes.$[a].series.$[s].ubicaciones": {
                Ubicacion: ubicacionId
              }
            }
          }, {
            arrayFilters: [{
              "n.IdNegocioOK": idNegocioOk
            }, {
              "a.IdAlmacenOK": idAlmacenOk
            }, {
              "s.Serie": serie
            }]
          });
        case 3:
          result = _context26.sent;
          if (!(result.modifiedCount === 0)) {
            _context26.next = 6;
            break;
          }
          throw _boom["default"].badRequest("No se pudo eliminar la ubicación.");
        case 6:
          return _context26.abrupt("return", {
            message: "Ubicación eliminada con éxito"
          });
        case 9:
          _context26.prev = 9;
          _context26.t0 = _context26["catch"](0);
          throw _boom["default"].badImplementation(_context26.t0);
        case 12:
        case "end":
          return _context26.stop();
      }
    }, _callee26, null, [[0, 9]]);
  }));
  return function deleteUbicacion(_x88, _x89, _x90, _x91, _x92) {
    return _ref26.apply(this, arguments);
  };
}();

// *************************************************************************
//                               CAT_PROD_SERV
// *************************************************************************

// GET ALL PRODSERV
var getAllProdserv = exports.getAllProdserv = /*#__PURE__*/function () {
  var _ref27 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee27() {
    var prodservList;
    return _regenerator["default"].wrap(function _callee27$(_context27) {
      while (1) switch (_context27.prev = _context27.next) {
        case 0:
          _context27.prev = 0;
          _context27.next = 3;
          return _inventarios.Prodserv.find();
        case 3:
          prodservList = _context27.sent;
          return _context27.abrupt("return", prodservList);
        case 7:
          _context27.prev = 7;
          _context27.t0 = _context27["catch"](0);
          throw _boom["default"].internal(_context27.t0);
        case 10:
        case "end":
          return _context27.stop();
      }
    }, _callee27, null, [[0, 7]]);
  }));
  return function getAllProdserv() {
    return _ref27.apply(this, arguments);
  };
}();

// GET CONCATENATED DESCRIPTION
var getConcatenatedDescription = exports.getConcatenatedDescription = /*#__PURE__*/function () {
  var _ref28 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee28() {
    var result;
    return _regenerator["default"].wrap(function _callee28$(_context28) {
      while (1) switch (_context28.prev = _context28.next) {
        case 0:
          _context28.prev = 0;
          _context28.next = 3;
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
              IdProdServOK: "$IdProdServOK",
              DesProdServ: "$prod_serv.DesProdServ",
              IdPresentaOK: "$prod_serv.presentaciones.IdPresentaOK",
              DesPresenta: "$prod_serv.presentaciones.DesPresenta",
              DescripcionConcatenada: 1
            }
          }]);
        case 3:
          result = _context28.sent;
          return _context28.abrupt("return", result);
        case 7:
          _context28.prev = 7;
          _context28.t0 = _context28["catch"](0);
          throw _boom["default"].internal(_context28.t0);
        case 10:
        case "end":
          return _context28.stop();
      }
    }, _callee28, null, [[0, 7]]);
  }));
  return function getConcatenatedDescription() {
    return _ref28.apply(this, arguments);
  };
}();