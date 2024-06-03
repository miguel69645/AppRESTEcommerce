"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateValorInCondicion = exports.updateRoleInLista = exports.updatePromotionInLista = exports.updatePriceInLista = exports.updateLista = exports.updateCondicionInPromo = exports.updateCondicionDetInRole = exports.updateBusinessInLista = exports.getValoresByIdEtiquetaOK = exports.getValorByIdTipoCondicionOK = exports.getListasList = exports.getLista = exports.getCondicionesByPromo = exports.getCondicionDet = exports.getAllRoles = exports.getAllPromotions = exports.getAllPrecios = exports.getAllNegocios = exports.deleteValorInCondicion = exports.deleteRoleInLista = exports.deletePromotionInLista = exports.deletePriceInLista = exports.deleteLista = exports.deleteCondicionInPromo = exports.deleteCondicionDetInRole = exports.deleteBusinessInLista = exports.createLista = exports.addValorToCondicion = exports.addRoleToLista = exports.addPromotionToLista = exports.addPriceToLista = exports.addCondicionToPromo = exports.addCondicionDetToRole = exports.addBusinessToLista = void 0;
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
          return ListasServices.getAllListas();
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

// GET ALL PRECIOS
var getAllPrecios = exports.getAllPrecios = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var id, precios;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _context3.next = 4;
          return ListasServices.getAllPrices(id);
        case 4:
          precios = _context3.sent;
          if (precios) {
            _context3.next = 9;
            break;
          }
          throw _boom["default"].notFound("No se encontraron precios.");
        case 9:
          res.status(200).json(precios);
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
  return function getAllPrecios(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

// GET ALL ROLES
var getAllRoles = exports.getAllRoles = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var id, roles;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 4;
          return ListasServices.getAllRoles(id);
        case 4:
          roles = _context4.sent;
          if (roles) {
            _context4.next = 9;
            break;
          }
          throw _boom["default"].notFound("No se encontraron roles.");
        case 9:
          res.status(200).json(roles);
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
  return function getAllRoles(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

// GET CONDICION DET BY CONDICION
var getCondicionDet = exports.getCondicionDet = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var _req$params, id, condicion, condicionDet;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _req$params = req.params, id = _req$params.id, condicion = _req$params.condicion;
          _context5.next = 4;
          return ListasServices.getCondicionDet(id, condicion);
        case 4:
          condicionDet = _context5.sent;
          if (condicionDet) {
            _context5.next = 9;
            break;
          }
          throw _boom["default"].notFound("No se encontraron detalles de la condición.");
        case 9:
          res.status(200).json(condicionDet);
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
  return function getCondicionDet(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();

// GET VALOR BY ID TIPO CONDICION OK
var getValorByIdTipoCondicionOK = exports.getValorByIdTipoCondicionOK = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res, next) {
    var _req$params2, id, condicion, IdTipoCondicionOK, valor;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _req$params2 = req.params, id = _req$params2.id, condicion = _req$params2.condicion, IdTipoCondicionOK = _req$params2.IdTipoCondicionOK;
          _context6.next = 4;
          return ListasServices.getValorByIdTipoCondicionOK(id, condicion, IdTipoCondicionOK);
        case 4:
          valor = _context6.sent;
          if (valor) {
            _context6.next = 9;
            break;
          }
          throw _boom["default"].notFound("Valor no encontrado.");
        case 9:
          res.status(200).json(valor);
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
  return function getValorByIdTipoCondicionOK(_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();

// GET ALL PROMOTIONS
var getAllPromotions = exports.getAllPromotions = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res, next) {
    var id, promociones;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          id = req.params.id;
          _context7.next = 4;
          return ListasServices.getAllPromotions(id);
        case 4:
          promociones = _context7.sent;
          if (promociones) {
            _context7.next = 9;
            break;
          }
          throw _boom["default"].notFound("No se encontraron promociones.");
        case 9:
          res.status(200).json(promociones);
        case 10:
          _context7.next = 15;
          break;
        case 12:
          _context7.prev = 12;
          _context7.t0 = _context7["catch"](0);
          next(_context7.t0);
        case 15:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 12]]);
  }));
  return function getAllPromotions(_x19, _x20, _x21) {
    return _ref7.apply(this, arguments);
  };
}();

// GET CONDICIONES BY PROMO ID
var getCondicionesByPromo = exports.getCondicionesByPromo = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res, next) {
    var _req$params3, id, promoId, condiciones;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _req$params3 = req.params, id = _req$params3.id, promoId = _req$params3.promoId;
          _context8.next = 4;
          return ListasServices.getCondicionesByPromo(id, promoId);
        case 4:
          condiciones = _context8.sent;
          if (condiciones) {
            _context8.next = 9;
            break;
          }
          throw _boom["default"].notFound("No se encontraron condiciones para la promoción.");
        case 9:
          res.status(200).json(condiciones);
        case 10:
          _context8.next = 15;
          break;
        case 12:
          _context8.prev = 12;
          _context8.t0 = _context8["catch"](0);
          next(_context8.t0);
        case 15:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 12]]);
  }));
  return function getCondicionesByPromo(_x22, _x23, _x24) {
    return _ref8.apply(this, arguments);
  };
}();

// GET VALORES BY ID ETIQUETA OK
var getValoresByIdEtiquetaOK = exports.getValoresByIdEtiquetaOK = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res, next) {
    var _req$params4, id, IdTipoPromoOK, IdEtiquetaOK, valores;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _req$params4 = req.params, id = _req$params4.id, IdTipoPromoOK = _req$params4.IdTipoPromoOK, IdEtiquetaOK = _req$params4.IdEtiquetaOK;
          _context9.next = 4;
          return ListasServices.getValoresByIdEtiquetaOK(id, IdTipoPromoOK, IdEtiquetaOK);
        case 4:
          valores = _context9.sent;
          if (valores) {
            _context9.next = 9;
            break;
          }
          throw _boom["default"].notFound("No se encontraron valores.");
        case 9:
          res.status(200).json(valores);
        case 10:
          _context9.next = 15;
          break;
        case 12:
          _context9.prev = 12;
          _context9.t0 = _context9["catch"](0);
          next(_context9.t0);
        case 15:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 12]]);
  }));
  return function getValoresByIdEtiquetaOK(_x25, _x26, _x27) {
    return _ref9.apply(this, arguments);
  };
}();

// GET ALL NEGOCIOS
var getAllNegocios = exports.getAllNegocios = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res, next) {
    var id, negocios;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          id = req.params.id;
          _context10.next = 4;
          return ListasServices.getAllBusinesses(id);
        case 4:
          negocios = _context10.sent;
          if (negocios) {
            _context10.next = 9;
            break;
          }
          throw _boom["default"].notFound("No se encontraron negocios.");
        case 9:
          res.status(200).json(negocios);
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
  return function getAllNegocios(_x28, _x29, _x30) {
    return _ref10.apply(this, arguments);
  };
}();

// CREATE A NEW LISTA
var createLista = exports.createLista = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(req, res, next) {
    var data, newLista;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          data = req.body;
          _context11.next = 4;
          return ListasServices.createLista(data);
        case 4:
          newLista = _context11.sent;
          res.status(201).json(newLista);
          _context11.next = 11;
          break;
        case 8:
          _context11.prev = 8;
          _context11.t0 = _context11["catch"](0);
          next(_context11.t0);
        case 11:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 8]]);
  }));
  return function createLista(_x31, _x32, _x33) {
    return _ref11.apply(this, arguments);
  };
}();

// ADD NEW PRICE TO LISTA
var addPriceToLista = exports.addPriceToLista = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(req, res, next) {
    var id, priceData, precios;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          id = req.params.id;
          priceData = req.body;
          _context12.next = 5;
          return ListasServices.addPriceToLista(id, priceData);
        case 5:
          precios = _context12.sent;
          res.status(201).json(precios);
          _context12.next = 12;
          break;
        case 9:
          _context12.prev = 9;
          _context12.t0 = _context12["catch"](0);
          next(_context12.t0);
        case 12:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 9]]);
  }));
  return function addPriceToLista(_x34, _x35, _x36) {
    return _ref12.apply(this, arguments);
  };
}();

// ADD NEW ROLE TO LISTA
var addRoleToLista = exports.addRoleToLista = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(req, res, next) {
    var id, roleData, roles;
    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          id = req.params.id;
          roleData = req.body;
          _context13.next = 5;
          return ListasServices.addRoleToLista(id, roleData);
        case 5:
          roles = _context13.sent;
          res.status(201).json(roles);
          _context13.next = 12;
          break;
        case 9:
          _context13.prev = 9;
          _context13.t0 = _context13["catch"](0);
          next(_context13.t0);
        case 12:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 9]]);
  }));
  return function addRoleToLista(_x37, _x38, _x39) {
    return _ref13.apply(this, arguments);
  };
}();

// ADD NEW CONDITION DET TO ROLE
var addCondicionDetToRole = exports.addCondicionDetToRole = /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(req, res, next) {
    var _req$params5, id, condicion, condicionDetData, condicionDet;
    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          _req$params5 = req.params, id = _req$params5.id, condicion = _req$params5.condicion;
          condicionDetData = req.body;
          _context14.next = 5;
          return ListasServices.addCondicionDetToRole(id, condicion, condicionDetData);
        case 5:
          condicionDet = _context14.sent;
          res.status(201).json(condicionDet);
          _context14.next = 12;
          break;
        case 9:
          _context14.prev = 9;
          _context14.t0 = _context14["catch"](0);
          next(_context14.t0);
        case 12:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[0, 9]]);
  }));
  return function addCondicionDetToRole(_x40, _x41, _x42) {
    return _ref14.apply(this, arguments);
  };
}();

// ADD NEW PROMOTION TO LISTA
var addPromotionToLista = exports.addPromotionToLista = /*#__PURE__*/function () {
  var _ref15 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(req, res, next) {
    var id, promoData, promociones;
    return _regenerator["default"].wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          id = req.params.id;
          promoData = req.body;
          _context15.next = 5;
          return ListasServices.addPromotionToLista(id, promoData);
        case 5:
          promociones = _context15.sent;
          res.status(201).json(promociones);
          _context15.next = 12;
          break;
        case 9:
          _context15.prev = 9;
          _context15.t0 = _context15["catch"](0);
          next(_context15.t0);
        case 12:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[0, 9]]);
  }));
  return function addPromotionToLista(_x43, _x44, _x45) {
    return _ref15.apply(this, arguments);
  };
}();

// ADD NEW CONDITION TO PROMO
var addCondicionToPromo = exports.addCondicionToPromo = /*#__PURE__*/function () {
  var _ref16 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(req, res, next) {
    var _req$params6, id, IdTipoPromoOK, condicionData, condiciones;
    return _regenerator["default"].wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.prev = 0;
          _req$params6 = req.params, id = _req$params6.id, IdTipoPromoOK = _req$params6.IdTipoPromoOK;
          condicionData = req.body;
          _context16.next = 5;
          return ListasServices.addCondicionToPromo(id, IdTipoPromoOK, condicionData);
        case 5:
          condiciones = _context16.sent;
          res.status(201).json(condiciones);
          _context16.next = 12;
          break;
        case 9:
          _context16.prev = 9;
          _context16.t0 = _context16["catch"](0);
          next(_context16.t0);
        case 12:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[0, 9]]);
  }));
  return function addCondicionToPromo(_x46, _x47, _x48) {
    return _ref16.apply(this, arguments);
  };
}();

// ADD NEW VALUE TO CONDITION IN PROMO
var addValorToCondicion = exports.addValorToCondicion = /*#__PURE__*/function () {
  var _ref17 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(req, res, next) {
    var _req$params7, id, IdTipoPromoOK, IdEtiquetaOK, valorData, valores;
    return _regenerator["default"].wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.prev = 0;
          _req$params7 = req.params, id = _req$params7.id, IdTipoPromoOK = _req$params7.IdTipoPromoOK, IdEtiquetaOK = _req$params7.IdEtiquetaOK;
          valorData = req.body;
          _context17.next = 5;
          return ListasServices.addValorToCondicion(id, IdTipoPromoOK, IdEtiquetaOK, valorData);
        case 5:
          valores = _context17.sent;
          res.status(201).json(valores);
          _context17.next = 12;
          break;
        case 9:
          _context17.prev = 9;
          _context17.t0 = _context17["catch"](0);
          next(_context17.t0);
        case 12:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[0, 9]]);
  }));
  return function addValorToCondicion(_x49, _x50, _x51) {
    return _ref17.apply(this, arguments);
  };
}();

// ADD NEW BUSINESS TO LISTA
var addBusinessToLista = exports.addBusinessToLista = /*#__PURE__*/function () {
  var _ref18 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(req, res, next) {
    var id, businessData, negocios;
    return _regenerator["default"].wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.prev = 0;
          id = req.params.id;
          businessData = req.body;
          _context18.next = 5;
          return ListasServices.addBusinessToLista(id, businessData);
        case 5:
          negocios = _context18.sent;
          res.status(201).json(negocios);
          _context18.next = 12;
          break;
        case 9:
          _context18.prev = 9;
          _context18.t0 = _context18["catch"](0);
          next(_context18.t0);
        case 12:
        case "end":
          return _context18.stop();
      }
    }, _callee18, null, [[0, 9]]);
  }));
  return function addBusinessToLista(_x52, _x53, _x54) {
    return _ref18.apply(this, arguments);
  };
}();

// UPDATE LISTA
var updateLista = exports.updateLista = /*#__PURE__*/function () {
  var _ref19 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19(req, res, next) {
    var id, data, updatedLista;
    return _regenerator["default"].wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          _context19.prev = 0;
          id = req.params.id;
          data = req.body;
          _context19.next = 5;
          return ListasServices.updateLista(id, data);
        case 5:
          updatedLista = _context19.sent;
          if (updatedLista) {
            _context19.next = 10;
            break;
          }
          throw _boom["default"].notFound("Lista no encontrada.");
        case 10:
          res.status(200).json(updatedLista);
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
  return function updateLista(_x55, _x56, _x57) {
    return _ref19.apply(this, arguments);
  };
}();

// UPDATE PRICE IN LISTA
var updatePriceInLista = exports.updatePriceInLista = /*#__PURE__*/function () {
  var _ref20 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20(req, res, next) {
    var _req$params8, id, priceId, priceData, updatedPrice;
    return _regenerator["default"].wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          _context20.prev = 0;
          _req$params8 = req.params, id = _req$params8.id, priceId = _req$params8.priceId;
          priceData = req.body;
          _context20.next = 5;
          return ListasServices.updatePriceInLista(id, priceId, priceData);
        case 5:
          updatedPrice = _context20.sent;
          if (updatedPrice) {
            _context20.next = 10;
            break;
          }
          throw _boom["default"].notFound("Precio no encontrado.");
        case 10:
          res.status(200).json(updatedPrice);
        case 11:
          _context20.next = 16;
          break;
        case 13:
          _context20.prev = 13;
          _context20.t0 = _context20["catch"](0);
          next(_context20.t0);
        case 16:
        case "end":
          return _context20.stop();
      }
    }, _callee20, null, [[0, 13]]);
  }));
  return function updatePriceInLista(_x58, _x59, _x60) {
    return _ref20.apply(this, arguments);
  };
}();

// UPDATE ROLE IN LISTA
var updateRoleInLista = exports.updateRoleInLista = /*#__PURE__*/function () {
  var _ref21 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee21(req, res, next) {
    var _req$params9, id, roleId, roleData, updatedRole;
    return _regenerator["default"].wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          _context21.prev = 0;
          _req$params9 = req.params, id = _req$params9.id, roleId = _req$params9.roleId;
          roleData = req.body;
          _context21.next = 5;
          return ListasServices.updateRoleInLista(id, roleId, roleData);
        case 5:
          updatedRole = _context21.sent;
          if (updatedRole) {
            _context21.next = 10;
            break;
          }
          throw _boom["default"].notFound("Rol no encontrado.");
        case 10:
          res.status(200).json(updatedRole);
        case 11:
          _context21.next = 16;
          break;
        case 13:
          _context21.prev = 13;
          _context21.t0 = _context21["catch"](0);
          next(_context21.t0);
        case 16:
        case "end":
          return _context21.stop();
      }
    }, _callee21, null, [[0, 13]]);
  }));
  return function updateRoleInLista(_x61, _x62, _x63) {
    return _ref21.apply(this, arguments);
  };
}();

// UPDATE CONDITION DET IN ROLE
var updateCondicionDetInRole = exports.updateCondicionDetInRole = /*#__PURE__*/function () {
  var _ref22 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee22(req, res, next) {
    var _req$params10, id, condicion, condicionDetId, condicionDetData, updatedCondicionDet;
    return _regenerator["default"].wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          _context22.prev = 0;
          _req$params10 = req.params, id = _req$params10.id, condicion = _req$params10.condicion, condicionDetId = _req$params10.condicionDetId;
          condicionDetData = req.body;
          _context22.next = 5;
          return ListasServices.updateCondicionDetInRole(id, condicion, condicionDetId, condicionDetData);
        case 5:
          updatedCondicionDet = _context22.sent;
          if (updatedCondicionDet) {
            _context22.next = 10;
            break;
          }
          throw _boom["default"].notFound("Condición det no encontrada.");
        case 10:
          res.status(200).json(updatedCondicionDet);
        case 11:
          _context22.next = 16;
          break;
        case 13:
          _context22.prev = 13;
          _context22.t0 = _context22["catch"](0);
          next(_context22.t0);
        case 16:
        case "end":
          return _context22.stop();
      }
    }, _callee22, null, [[0, 13]]);
  }));
  return function updateCondicionDetInRole(_x64, _x65, _x66) {
    return _ref22.apply(this, arguments);
  };
}();

// UPDATE PROMOTION IN LISTA
var updatePromotionInLista = exports.updatePromotionInLista = /*#__PURE__*/function () {
  var _ref23 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee23(req, res, next) {
    var _req$params11, id, promoId, promoData, updatedPromo;
    return _regenerator["default"].wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          _context23.prev = 0;
          _req$params11 = req.params, id = _req$params11.id, promoId = _req$params11.promoId;
          promoData = req.body;
          _context23.next = 5;
          return ListasServices.updatePromotionInLista(id, promoId, promoData);
        case 5:
          updatedPromo = _context23.sent;
          if (updatedPromo) {
            _context23.next = 10;
            break;
          }
          throw _boom["default"].notFound("Promoción no encontrada.");
        case 10:
          res.status(200).json(updatedPromo);
        case 11:
          _context23.next = 16;
          break;
        case 13:
          _context23.prev = 13;
          _context23.t0 = _context23["catch"](0);
          next(_context23.t0);
        case 16:
        case "end":
          return _context23.stop();
      }
    }, _callee23, null, [[0, 13]]);
  }));
  return function updatePromotionInLista(_x67, _x68, _x69) {
    return _ref23.apply(this, arguments);
  };
}();

// UPDATE CONDITION IN PROMO
var updateCondicionInPromo = exports.updateCondicionInPromo = /*#__PURE__*/function () {
  var _ref24 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee24(req, res, next) {
    var _req$params12, id, IdTipoPromoOK, condicionId, condicionData, updatedCondicion;
    return _regenerator["default"].wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          _context24.prev = 0;
          _req$params12 = req.params, id = _req$params12.id, IdTipoPromoOK = _req$params12.IdTipoPromoOK, condicionId = _req$params12.condicionId;
          condicionData = req.body;
          _context24.next = 5;
          return ListasServices.updateCondicionInPromo(id, IdTipoPromoOK, condicionId, condicionData);
        case 5:
          updatedCondicion = _context24.sent;
          if (updatedCondicion) {
            _context24.next = 10;
            break;
          }
          throw _boom["default"].notFound("Condición no encontrada.");
        case 10:
          res.status(200).json(updatedCondicion);
        case 11:
          _context24.next = 16;
          break;
        case 13:
          _context24.prev = 13;
          _context24.t0 = _context24["catch"](0);
          next(_context24.t0);
        case 16:
        case "end":
          return _context24.stop();
      }
    }, _callee24, null, [[0, 13]]);
  }));
  return function updateCondicionInPromo(_x70, _x71, _x72) {
    return _ref24.apply(this, arguments);
  };
}();

// UPDATE VALUE IN CONDITION IN PROMO
var updateValorInCondicion = exports.updateValorInCondicion = /*#__PURE__*/function () {
  var _ref25 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee25(req, res, next) {
    var _req$params13, id, IdTipoPromoOK, IdEtiquetaOK, valorId, valorData, updatedValor;
    return _regenerator["default"].wrap(function _callee25$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          _context25.prev = 0;
          _req$params13 = req.params, id = _req$params13.id, IdTipoPromoOK = _req$params13.IdTipoPromoOK, IdEtiquetaOK = _req$params13.IdEtiquetaOK, valorId = _req$params13.valorId;
          valorData = req.body;
          _context25.next = 5;
          return ListasServices.updateValorInCondicion(id, IdTipoPromoOK, IdEtiquetaOK, valorId, valorData);
        case 5:
          updatedValor = _context25.sent;
          if (updatedValor) {
            _context25.next = 10;
            break;
          }
          throw _boom["default"].notFound("Valor no encontrado.");
        case 10:
          res.status(200).json(updatedValor);
        case 11:
          _context25.next = 16;
          break;
        case 13:
          _context25.prev = 13;
          _context25.t0 = _context25["catch"](0);
          next(_context25.t0);
        case 16:
        case "end":
          return _context25.stop();
      }
    }, _callee25, null, [[0, 13]]);
  }));
  return function updateValorInCondicion(_x73, _x74, _x75) {
    return _ref25.apply(this, arguments);
  };
}();

// UPDATE BUSINESS IN LISTA
var updateBusinessInLista = exports.updateBusinessInLista = /*#__PURE__*/function () {
  var _ref26 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee26(req, res, next) {
    var _req$params14, id, businessId, businessData, updatedBusiness;
    return _regenerator["default"].wrap(function _callee26$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          _context26.prev = 0;
          _req$params14 = req.params, id = _req$params14.id, businessId = _req$params14.businessId;
          businessData = req.body;
          _context26.next = 5;
          return ListasServices.updateBusinessInLista(id, businessId, businessData);
        case 5:
          updatedBusiness = _context26.sent;
          if (updatedBusiness) {
            _context26.next = 10;
            break;
          }
          throw _boom["default"].notFound("Negocio no encontrado.");
        case 10:
          res.status(200).json(updatedBusiness);
        case 11:
          _context26.next = 16;
          break;
        case 13:
          _context26.prev = 13;
          _context26.t0 = _context26["catch"](0);
          next(_context26.t0);
        case 16:
        case "end":
          return _context26.stop();
      }
    }, _callee26, null, [[0, 13]]);
  }));
  return function updateBusinessInLista(_x76, _x77, _x78) {
    return _ref26.apply(this, arguments);
  };
}();

// DELETE LISTA
var deleteLista = exports.deleteLista = /*#__PURE__*/function () {
  var _ref27 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee27(req, res, next) {
    var id, deletedLista;
    return _regenerator["default"].wrap(function _callee27$(_context27) {
      while (1) switch (_context27.prev = _context27.next) {
        case 0:
          _context27.prev = 0;
          id = req.params.id;
          _context27.next = 4;
          return ListasServices.deleteLista(id);
        case 4:
          deletedLista = _context27.sent;
          if (deletedLista) {
            _context27.next = 9;
            break;
          }
          throw _boom["default"].notFound("Lista no encontrada.");
        case 9:
          res.status(200).json({
            message: "Lista eliminada con éxito."
          });
        case 10:
          _context27.next = 15;
          break;
        case 12:
          _context27.prev = 12;
          _context27.t0 = _context27["catch"](0);
          next(_context27.t0);
        case 15:
        case "end":
          return _context27.stop();
      }
    }, _callee27, null, [[0, 12]]);
  }));
  return function deleteLista(_x79, _x80, _x81) {
    return _ref27.apply(this, arguments);
  };
}();

// DELETE PRICE IN LISTA
var deletePriceInLista = exports.deletePriceInLista = /*#__PURE__*/function () {
  var _ref28 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee28(req, res, next) {
    var _req$params15, id, priceId, updatedPrices;
    return _regenerator["default"].wrap(function _callee28$(_context28) {
      while (1) switch (_context28.prev = _context28.next) {
        case 0:
          _context28.prev = 0;
          _req$params15 = req.params, id = _req$params15.id, priceId = _req$params15.priceId;
          _context28.next = 4;
          return ListasServices.deletePriceInLista(id, priceId);
        case 4:
          updatedPrices = _context28.sent;
          if (updatedPrices) {
            _context28.next = 9;
            break;
          }
          throw _boom["default"].notFound("Precio no encontrado.");
        case 9:
          res.status(200).json(updatedPrices);
        case 10:
          _context28.next = 15;
          break;
        case 12:
          _context28.prev = 12;
          _context28.t0 = _context28["catch"](0);
          next(_context28.t0);
        case 15:
        case "end":
          return _context28.stop();
      }
    }, _callee28, null, [[0, 12]]);
  }));
  return function deletePriceInLista(_x82, _x83, _x84) {
    return _ref28.apply(this, arguments);
  };
}();

// DELETE ROLE IN LISTA
var deleteRoleInLista = exports.deleteRoleInLista = /*#__PURE__*/function () {
  var _ref29 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee29(req, res, next) {
    var _req$params16, id, roleId, updatedRoles;
    return _regenerator["default"].wrap(function _callee29$(_context29) {
      while (1) switch (_context29.prev = _context29.next) {
        case 0:
          _context29.prev = 0;
          _req$params16 = req.params, id = _req$params16.id, roleId = _req$params16.roleId;
          _context29.next = 4;
          return ListasServices.deleteRoleInLista(id, roleId);
        case 4:
          updatedRoles = _context29.sent;
          if (updatedRoles) {
            _context29.next = 9;
            break;
          }
          throw _boom["default"].notFound("Rol no encontrado.");
        case 9:
          res.status(200).json(updatedRoles);
        case 10:
          _context29.next = 15;
          break;
        case 12:
          _context29.prev = 12;
          _context29.t0 = _context29["catch"](0);
          next(_context29.t0);
        case 15:
        case "end":
          return _context29.stop();
      }
    }, _callee29, null, [[0, 12]]);
  }));
  return function deleteRoleInLista(_x85, _x86, _x87) {
    return _ref29.apply(this, arguments);
  };
}();

// DELETE CONDITION DET IN ROLE
var deleteCondicionDetInRole = exports.deleteCondicionDetInRole = /*#__PURE__*/function () {
  var _ref30 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee30(req, res, next) {
    var _req$params17, id, condicion, condicionDetId, updatedCondicionDet;
    return _regenerator["default"].wrap(function _callee30$(_context30) {
      while (1) switch (_context30.prev = _context30.next) {
        case 0:
          _context30.prev = 0;
          _req$params17 = req.params, id = _req$params17.id, condicion = _req$params17.condicion, condicionDetId = _req$params17.condicionDetId;
          _context30.next = 4;
          return ListasServices.deleteCondicionDetInRole(id, condicion, condicionDetId);
        case 4:
          updatedCondicionDet = _context30.sent;
          if (updatedCondicionDet) {
            _context30.next = 9;
            break;
          }
          throw _boom["default"].notFound("Condición det no encontrada.");
        case 9:
          res.status(200).json(updatedCondicionDet);
        case 10:
          _context30.next = 15;
          break;
        case 12:
          _context30.prev = 12;
          _context30.t0 = _context30["catch"](0);
          next(_context30.t0);
        case 15:
        case "end":
          return _context30.stop();
      }
    }, _callee30, null, [[0, 12]]);
  }));
  return function deleteCondicionDetInRole(_x88, _x89, _x90) {
    return _ref30.apply(this, arguments);
  };
}();

// DELETE PROMOTION IN LISTA
var deletePromotionInLista = exports.deletePromotionInLista = /*#__PURE__*/function () {
  var _ref31 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee31(req, res, next) {
    var _req$params18, id, promoId, updatedPromotions;
    return _regenerator["default"].wrap(function _callee31$(_context31) {
      while (1) switch (_context31.prev = _context31.next) {
        case 0:
          _context31.prev = 0;
          _req$params18 = req.params, id = _req$params18.id, promoId = _req$params18.promoId;
          _context31.next = 4;
          return ListasServices.deletePromotionInLista(id, promoId);
        case 4:
          updatedPromotions = _context31.sent;
          if (updatedPromotions) {
            _context31.next = 9;
            break;
          }
          throw _boom["default"].notFound("Promoción no encontrada.");
        case 9:
          res.status(200).json(updatedPromotions);
        case 10:
          _context31.next = 15;
          break;
        case 12:
          _context31.prev = 12;
          _context31.t0 = _context31["catch"](0);
          next(_context31.t0);
        case 15:
        case "end":
          return _context31.stop();
      }
    }, _callee31, null, [[0, 12]]);
  }));
  return function deletePromotionInLista(_x91, _x92, _x93) {
    return _ref31.apply(this, arguments);
  };
}();

// DELETE CONDITION IN PROMO
var deleteCondicionInPromo = exports.deleteCondicionInPromo = /*#__PURE__*/function () {
  var _ref32 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee32(req, res, next) {
    var _req$params19, id, IdTipoPromoOK, condicionId, updatedCondiciones;
    return _regenerator["default"].wrap(function _callee32$(_context32) {
      while (1) switch (_context32.prev = _context32.next) {
        case 0:
          _context32.prev = 0;
          _req$params19 = req.params, id = _req$params19.id, IdTipoPromoOK = _req$params19.IdTipoPromoOK, condicionId = _req$params19.condicionId;
          _context32.next = 4;
          return ListasServices.deleteCondicionInPromo(id, IdTipoPromoOK, condicionId);
        case 4:
          updatedCondiciones = _context32.sent;
          if (updatedCondiciones) {
            _context32.next = 9;
            break;
          }
          throw _boom["default"].notFound("Condición no encontrada.");
        case 9:
          res.status(200).json(updatedCondiciones);
        case 10:
          _context32.next = 15;
          break;
        case 12:
          _context32.prev = 12;
          _context32.t0 = _context32["catch"](0);
          next(_context32.t0);
        case 15:
        case "end":
          return _context32.stop();
      }
    }, _callee32, null, [[0, 12]]);
  }));
  return function deleteCondicionInPromo(_x94, _x95, _x96) {
    return _ref32.apply(this, arguments);
  };
}();

// DELETE VALUE IN CONDITION IN PROMO
var deleteValorInCondicion = exports.deleteValorInCondicion = /*#__PURE__*/function () {
  var _ref33 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee33(req, res, next) {
    var _req$params20, id, IdTipoPromoOK, IdEtiquetaOK, valorId, updatedValores;
    return _regenerator["default"].wrap(function _callee33$(_context33) {
      while (1) switch (_context33.prev = _context33.next) {
        case 0:
          _context33.prev = 0;
          _req$params20 = req.params, id = _req$params20.id, IdTipoPromoOK = _req$params20.IdTipoPromoOK, IdEtiquetaOK = _req$params20.IdEtiquetaOK, valorId = _req$params20.valorId;
          _context33.next = 4;
          return ListasServices.deleteValorInCondicion(id, IdTipoPromoOK, IdEtiquetaOK, valorId);
        case 4:
          updatedValores = _context33.sent;
          if (updatedValores) {
            _context33.next = 9;
            break;
          }
          throw _boom["default"].notFound("Valor no encontrado.");
        case 9:
          res.status(200).json(updatedValores);
        case 10:
          _context33.next = 15;
          break;
        case 12:
          _context33.prev = 12;
          _context33.t0 = _context33["catch"](0);
          next(_context33.t0);
        case 15:
        case "end":
          return _context33.stop();
      }
    }, _callee33, null, [[0, 12]]);
  }));
  return function deleteValorInCondicion(_x97, _x98, _x99) {
    return _ref33.apply(this, arguments);
  };
}();

// DELETE BUSINESS IN LISTA
var deleteBusinessInLista = exports.deleteBusinessInLista = /*#__PURE__*/function () {
  var _ref34 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee34(req, res, next) {
    var _req$params21, id, businessId, updatedNegocios;
    return _regenerator["default"].wrap(function _callee34$(_context34) {
      while (1) switch (_context34.prev = _context34.next) {
        case 0:
          _context34.prev = 0;
          _req$params21 = req.params, id = _req$params21.id, businessId = _req$params21.businessId;
          _context34.next = 4;
          return ListasServices.deleteBusinessInLista(id, businessId);
        case 4:
          updatedNegocios = _context34.sent;
          if (updatedNegocios) {
            _context34.next = 9;
            break;
          }
          throw _boom["default"].notFound("Negocio no encontrado.");
        case 9:
          res.status(200).json(updatedNegocios);
        case 10:
          _context34.next = 15;
          break;
        case 12:
          _context34.prev = 12;
          _context34.t0 = _context34["catch"](0);
          next(_context34.t0);
        case 15:
        case "end":
          return _context34.stop();
      }
    }, _callee34, null, [[0, 12]]);
  }));
  return function deleteBusinessInLista(_x100, _x101, _x102) {
    return _ref34.apply(this, arguments);
  };
}();