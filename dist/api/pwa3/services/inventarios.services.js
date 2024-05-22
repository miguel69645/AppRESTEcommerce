"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putNegocioByParams = exports.putInventarioItem = exports.postNegocio = exports.postInventario = exports.getNegociosByParams = exports.getInventarios = exports.getInventario = exports.getAlmacenesByParams = exports.getAlmacenByParams = exports.deleteNegocioByParams = exports.deleteInventario = void 0;
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
          return _inventarios["default"].findById(id);
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
// GET NEGOCIOS BY PARAMETERS
var getNegociosByParams = exports.getNegociosByParams = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(IdInstitutoOK, IdProdServOK, IdPresentaOK) {
    var inventarioItem;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return _inventarios["default"].findOne({
            IdInstitutoOK: IdInstitutoOK,
            IdProdServOK: IdProdServOK,
            IdPresentaOK: IdPresentaOK
          }).select("IdNegocioOK");
        case 3:
          inventarioItem = _context6.sent;
          return _context6.abrupt("return", inventarioItem ? inventarioItem.IdNegocioOK : null);
        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          throw _boom["default"].internal(_context6.t0);
        case 10:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 7]]);
  }));
  return function getNegociosByParams(_x6, _x7, _x8) {
    return _ref6.apply(this, arguments);
  };
}();
// POST NEGOCIO
var postNegocio = exports.postNegocio = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(IdInstitutoOK, IdProdServOK, IdPresentaOK, negocioData) {
    var inventarioItem;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return _inventarios["default"].findOne({
            IdInstitutoOK: IdInstitutoOK,
            IdProdServOK: IdProdServOK,
            IdPresentaOK: IdPresentaOK
          });
        case 3:
          inventarioItem = _context7.sent;
          if (!inventarioItem) {
            _context7.next = 9;
            break;
          }
          inventarioItem.negocios.push(negocioData);
          _context7.next = 8;
          return inventarioItem.save();
        case 8:
          return _context7.abrupt("return", negocioData);
        case 9:
          throw new Error("Inventario no encontrado");
        case 12:
          _context7.prev = 12;
          _context7.t0 = _context7["catch"](0);
          throw _boom["default"].internal(_context7.t0);
        case 15:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 12]]);
  }));
  return function postNegocio(_x9, _x10, _x11, _x12) {
    return _ref7.apply(this, arguments);
  };
}();

// PUT NEGOCIO BY PARAMETERS
var putNegocioByParams = exports.putNegocioByParams = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(IdInstitutoOK, IdProdServOK, IdPresentaOK, IdNegocioOK, negocioData) {
    var inventarioItem, negocio;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return _inventarios["default"].findOne({
            IdInstitutoOK: IdInstitutoOK,
            IdProdServOK: IdProdServOK,
            IdPresentaOK: IdPresentaOK
          });
        case 3:
          inventarioItem = _context8.sent;
          if (!inventarioItem) {
            _context8.next = 11;
            break;
          }
          negocio = inventarioItem.negocios.find(function (negocio) {
            return negocio.IdNegocioOK === IdNegocioOK;
          });
          if (!negocio) {
            _context8.next = 11;
            break;
          }
          Object.assign(negocio, negocioData);
          _context8.next = 10;
          return inventarioItem.save();
        case 10:
          return _context8.abrupt("return", negocio);
        case 11:
          throw new Error("Negocio no encontrado");
        case 14:
          _context8.prev = 14;
          _context8.t0 = _context8["catch"](0);
          throw _boom["default"].internal(_context8.t0);
        case 17:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 14]]);
  }));
  return function putNegocioByParams(_x13, _x14, _x15, _x16, _x17) {
    return _ref8.apply(this, arguments);
  };
}();

// DELETE NEGOCIO BY PARAMETERS
var deleteNegocioByParams = exports.deleteNegocioByParams = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(IdInstitutoOK, IdProdServOK, IdPresentaOK, IdNegocioOK) {
    var inventarioItem, index;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return _inventarios["default"].findOne({
            IdInstitutoOK: IdInstitutoOK,
            IdProdServOK: IdProdServOK,
            IdPresentaOK: IdPresentaOK
          });
        case 3:
          inventarioItem = _context9.sent;
          if (!inventarioItem) {
            _context9.next = 11;
            break;
          }
          index = inventarioItem.negocios.findIndex(function (negocio) {
            return negocio.IdNegocioOK === IdNegocioOK;
          });
          if (!(index !== -1)) {
            _context9.next = 11;
            break;
          }
          inventarioItem.negocios.splice(index, 1);
          _context9.next = 10;
          return inventarioItem.save();
        case 10:
          return _context9.abrupt("return", {
            message: "Negocio eliminado"
          });
        case 11:
          throw new Error("Negocio no encontrado");
        case 14:
          _context9.prev = 14;
          _context9.t0 = _context9["catch"](0);
          throw _boom["default"].internal(_context9.t0);
        case 17:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 14]]);
  }));
  return function deleteNegocioByParams(_x18, _x19, _x20, _x21) {
    return _ref9.apply(this, arguments);
  };
}();
// GET ALMACENES BY PARAMETERS
var getAlmacenesByParams = exports.getAlmacenesByParams = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(IdInstitutoOK, IdProdServOK, IdPresentaOK, IdNegocioOK) {
    var inventarioItem, negocio;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return _inventarios["default"].findOne({
            IdInstitutoOK: IdInstitutoOK,
            IdProdServOK: IdProdServOK,
            IdPresentaOK: IdPresentaOK
          });
        case 3:
          inventarioItem = _context10.sent;
          if (!inventarioItem) {
            _context10.next = 7;
            break;
          }
          negocio = inventarioItem.negocios.find(function (negocio) {
            return negocio.IdNegocioOK === IdNegocioOK;
          });
          return _context10.abrupt("return", negocio ? negocio.almacenes : null);
        case 7:
          return _context10.abrupt("return", null);
        case 10:
          _context10.prev = 10;
          _context10.t0 = _context10["catch"](0);
          throw _boom["default"].internal(_context10.t0);
        case 13:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 10]]);
  }));
  return function getAlmacenesByParams(_x22, _x23, _x24, _x25) {
    return _ref10.apply(this, arguments);
  };
}();
// GET ALMACEN BY PARAMETERS
var getAlmacenByParams = exports.getAlmacenByParams = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(IdInstitutoOK, IdProdServOK, IdPresentaOK, IdNegocioOK, IdAlmacenOK) {
    var inventarioItem, negocio, almacen;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          _context11.next = 3;
          return _inventarios["default"].findOne({
            IdInstitutoOK: IdInstitutoOK,
            IdProdServOK: IdProdServOK,
            IdPresentaOK: IdPresentaOK
          });
        case 3:
          inventarioItem = _context11.sent;
          if (!inventarioItem) {
            _context11.next = 9;
            break;
          }
          negocio = inventarioItem.negocios.find(function (negocio) {
            return negocio.IdNegocioOK === IdNegocioOK;
          });
          if (!negocio) {
            _context11.next = 9;
            break;
          }
          almacen = negocio.almacenes.find(function (almacen) {
            return almacen.IdAlmacenOK === IdAlmacenOK;
          });
          return _context11.abrupt("return", almacen);
        case 9:
          return _context11.abrupt("return", null);
        case 12:
          _context11.prev = 12;
          _context11.t0 = _context11["catch"](0);
          throw _boom["default"].internal(_context11.t0);
        case 15:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 12]]);
  }));
  return function getAlmacenByParams(_x26, _x27, _x28, _x29, _x30) {
    return _ref11.apply(this, arguments);
  };
}();