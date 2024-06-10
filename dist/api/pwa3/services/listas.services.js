"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateValorInCondicion = exports.updateRoleInLista = exports.updatePromotionInLista = exports.updatePriceInLista = exports.updateLista = exports.updateCondicionInPromo = exports.updateCondicionDetInRole = exports.updateBusinessInLista = exports.getValoresByIdEtiquetaOK = exports.getValorByIdTipoCondicionOK = exports.getLista = exports.getCondicionesByPromo = exports.getCondicionDet = exports.getAllRoles = exports.getAllPromotions = exports.getAllPrices = exports.getAllListas = exports.getAllBusinesses = exports.deleteValorInCondicion = exports.deleteRoleInLista = exports.deletePromotionInLista = exports.deletePriceInLista = exports.deleteLista = exports.deleteCondicionInPromo = exports.deleteCondicionDetInRole = exports.deleteBusinessInLista = exports.createLista = exports.addValorToCondicion = exports.addRoleToLista = exports.addPromotionToLista = exports.addPriceToLista = exports.addCondicionToPromo = exports.addCondicionDetToRole = exports.addBusinessToLista = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _listas = _interopRequireDefault(require("../models/listas"));
var _boom = _interopRequireDefault(require("@hapi/boom"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
// GET ALL LISTAS
var getAllListas = exports.getAllListas = /*#__PURE__*/function () {
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
  return function getAllListas() {
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

// GET ALL PRICES IN LISTA
var getAllPrices = exports.getAllPrices = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
    var listaItem, precios;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _listas["default"].findById(id);
        case 3:
          listaItem = _context3.sent;
          if (listaItem) {
            _context3.next = 6;
            break;
          }
          throw _boom["default"].notFound("Lista no encontrada.");
        case 6:
          precios = listaItem.precios.map(function (precio) {
            return {
              IdProdServOK: precio.IdProdServOK,
              IdPresentaOK: precio.IdPresentaOK,
              PresentacionDelProducto: precio.PresentacionDelProducto,
              IdTipoFormulaOK: precio.IdTipoFormulaOK,
              Formula: precio.Formula,
              Precio: precio.Precio
            };
          });
          return _context3.abrupt("return", precios);
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          throw _boom["default"].internal(_context3.t0.message);
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 10]]);
  }));
  return function getAllPrices(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

// GET ALL ROLES IN LISTA
var getAllRoles = exports.getAllRoles = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
    var listaItem, roles;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _listas["default"].findById(id);
        case 3:
          listaItem = _context4.sent;
          if (listaItem) {
            _context4.next = 6;
            break;
          }
          throw _boom["default"].notFound("Lista no encontrada.");
        case 6:
          roles = listaItem.roles.map(function (rol) {
            return {
              DesCondicion: rol.DesCondicion,
              FechaExpiraIni: rol.FechaExpiraIni,
              FechaExpiraFin: rol.FechaExpiraFin,
              Condicion: rol.Condicion
            };
          });
          return _context4.abrupt("return", roles);
        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          throw _boom["default"].internal(_context4.t0.message);
        case 13:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 10]]);
  }));
  return function getAllRoles(_x3) {
    return _ref4.apply(this, arguments);
  };
}();

// GET CONDICION DET BY CONDICION
var getCondicionDet = exports.getCondicionDet = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id, condicion) {
    var listaItem, role, condicionDet;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _listas["default"].findById(id);
        case 3:
          listaItem = _context5.sent;
          if (listaItem) {
            _context5.next = 6;
            break;
          }
          throw _boom["default"].notFound("Lista no encontrada.");
        case 6:
          role = listaItem.roles.find(function (rol) {
            return rol.Condicion === condicion;
          });
          if (role) {
            _context5.next = 9;
            break;
          }
          throw _boom["default"].notFound("Condición no encontrada.");
        case 9:
          condicionDet = role.condicion_det.map(function (cond) {
            return {
              IdTipoCondicionOK: cond.IdTipoCondicionOK,
              IdTipoOperadorOK: cond.IdTipoOperadorOK,
              Valor: cond.Valor,
              Secuecia: cond.Secuecia
            };
          });
          return _context5.abrupt("return", condicionDet);
        case 13:
          _context5.prev = 13;
          _context5.t0 = _context5["catch"](0);
          throw _boom["default"].internal(_context5.t0.message);
        case 16:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 13]]);
  }));
  return function getCondicionDet(_x4, _x5) {
    return _ref5.apply(this, arguments);
  };
}();

// GET VALOR BY ID TIPO CONDICION OK
var getValorByIdTipoCondicionOK = exports.getValorByIdTipoCondicionOK = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(id, condicion, IdTipoCondicionOK) {
    var listaItem, role, condicionDet;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return _listas["default"].findById(id);
        case 3:
          listaItem = _context6.sent;
          if (listaItem) {
            _context6.next = 6;
            break;
          }
          throw _boom["default"].notFound("Lista no encontrada.");
        case 6:
          role = listaItem.roles.find(function (rol) {
            return rol.Condicion === condicion;
          });
          if (role) {
            _context6.next = 9;
            break;
          }
          throw _boom["default"].notFound("Condición no encontrada.");
        case 9:
          condicionDet = role.condicion_det.find(function (cond) {
            return cond.IdTipoCondicionOK === IdTipoCondicionOK;
          });
          if (condicionDet) {
            _context6.next = 12;
            break;
          }
          throw _boom["default"].notFound("Condición det no encontrada.");
        case 12:
          return _context6.abrupt("return", {
            Valor: condicionDet.Valor
          });
        case 15:
          _context6.prev = 15;
          _context6.t0 = _context6["catch"](0);
          throw _boom["default"].internal(_context6.t0.message);
        case 18:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 15]]);
  }));
  return function getValorByIdTipoCondicionOK(_x6, _x7, _x8) {
    return _ref6.apply(this, arguments);
  };
}();

// GET ALL PROMOTIONS IN LISTA
var getAllPromotions = exports.getAllPromotions = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(id) {
    var listaItem, promociones;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return _listas["default"].findById(id);
        case 3:
          listaItem = _context7.sent;
          if (listaItem) {
            _context7.next = 6;
            break;
          }
          throw _boom["default"].notFound("Lista no encontrada.");
        case 6:
          promociones = listaItem.promociones.map(function (promo) {
            return {
              IdTipoPromoOK: promo.IdTipoPromoOK,
              DesPromo: promo.DesPromo,
              Formula: promo.Formula,
              FechaExpiraIni: promo.FechaExpiraIni,
              FechaExpiraFin: promo.FechaExpiraFin
            };
          });
          return _context7.abrupt("return", promociones);
        case 10:
          _context7.prev = 10;
          _context7.t0 = _context7["catch"](0);
          throw _boom["default"].internal(_context7.t0.message);
        case 13:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 10]]);
  }));
  return function getAllPromotions(_x9) {
    return _ref7.apply(this, arguments);
  };
}();

// GET CONDICIONES BY PROMO ID
var getCondicionesByPromo = exports.getCondicionesByPromo = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(id, IdTipoPromoOK) {
    var listaItem, promo, condiciones;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return _listas["default"].findById(id);
        case 3:
          listaItem = _context8.sent;
          if (listaItem) {
            _context8.next = 6;
            break;
          }
          throw _boom["default"].notFound("Lista no encontrada.");
        case 6:
          promo = listaItem.promociones.find(function (promo) {
            return promo.IdTipoPromoOK === IdTipoPromoOK;
          });
          if (promo) {
            _context8.next = 9;
            break;
          }
          throw _boom["default"].notFound("Promoción no encontrada.");
        case 9:
          condiciones = promo.condiciones.map(function (cond) {
            return {
              IdEtiquetaOK: cond.IdEtiquetaOK,
              Etiqueta: cond.Etiqueta,
              Valores: cond.Valores.map(function (val) {
                return {
                  valor: val.valor,
                  IdComparaValorOK: val.IdComparaValorOK
                };
              }),
              IdOpComparaValoresOK: cond.IdOpComparaValoresOK,
              IdOpLogicoEtiquetaOK: cond.IdOpLogicoEtiquetaOK
            };
          });
          return _context8.abrupt("return", condiciones);
        case 13:
          _context8.prev = 13;
          _context8.t0 = _context8["catch"](0);
          throw _boom["default"].internal(_context8.t0.message);
        case 16:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 13]]);
  }));
  return function getCondicionesByPromo(_x10, _x11) {
    return _ref8.apply(this, arguments);
  };
}();

// GET VALORES BY ID ETIQUETA OK
var getValoresByIdEtiquetaOK = exports.getValoresByIdEtiquetaOK = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(id, IdTipoPromoOK, IdEtiquetaOK) {
    var listaItem, promo, condicion, valores;
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return _listas["default"].findById(id);
        case 3:
          listaItem = _context9.sent;
          if (listaItem) {
            _context9.next = 6;
            break;
          }
          throw _boom["default"].notFound("Lista no encontrada.");
        case 6:
          promo = listaItem.promociones.find(function (promo) {
            return promo.IdTipoPromoOK === IdTipoPromoOK;
          });
          if (promo) {
            _context9.next = 9;
            break;
          }
          throw _boom["default"].notFound("Promoción no encontrada.");
        case 9:
          condicion = promo.condiciones.find(function (cond) {
            return cond.IdEtiquetaOK === IdEtiquetaOK;
          });
          if (condicion) {
            _context9.next = 12;
            break;
          }
          throw _boom["default"].notFound("Condición no encontrada.");
        case 12:
          valores = condicion.Valores.map(function (val) {
            return {
              Valor: val.valor,
              IdComparaValor: val.IdComparaValor
            };
          });
          return _context9.abrupt("return", valores);
        case 16:
          _context9.prev = 16;
          _context9.t0 = _context9["catch"](0);
          throw _boom["default"].internal(_context9.t0.message);
        case 19:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 16]]);
  }));
  return function getValoresByIdEtiquetaOK(_x12, _x13, _x14) {
    return _ref9.apply(this, arguments);
  };
}();

// GET ALL BUSINESSES IN LISTA
var getAllBusinesses = exports.getAllBusinesses = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(id) {
    var listaItem, negocios;
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return _listas["default"].findById(id);
        case 3:
          listaItem = _context10.sent;
          if (listaItem) {
            _context10.next = 6;
            break;
          }
          throw _boom["default"].notFound("Lista no encontrada.");
        case 6:
          negocios = listaItem.negocios.map(function (negocio) {
            return {
              IdNegocioOK: negocio.IdNegocioOK
            };
          });
          return _context10.abrupt("return", negocios);
        case 10:
          _context10.prev = 10;
          _context10.t0 = _context10["catch"](0);
          throw _boom["default"].internal(_context10.t0.message);
        case 13:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 10]]);
  }));
  return function getAllBusinesses(_x15) {
    return _ref10.apply(this, arguments);
  };
}();

// CREATE A NEW LISTA
var createLista = exports.createLista = /*#__PURE__*/function () {
  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee11(data) {
    var newLista;
    return _regenerator["default"].wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          newLista = new _listas["default"](data);
          _context11.next = 4;
          return newLista.save();
        case 4:
          return _context11.abrupt("return", newLista);
        case 7:
          _context11.prev = 7;
          _context11.t0 = _context11["catch"](0);
          throw _boom["default"].internal(_context11.t0.message);
        case 10:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 7]]);
  }));
  return function createLista(_x16) {
    return _ref11.apply(this, arguments);
  };
}();

// ADD NEW PRICE TO LISTA
var addPriceToLista = exports.addPriceToLista = /*#__PURE__*/function () {
  var _ref12 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee12(id, priceData) {
    var listaItem;
    return _regenerator["default"].wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          _context12.next = 3;
          return _listas["default"].findById(id);
        case 3:
          listaItem = _context12.sent;
          if (listaItem) {
            _context12.next = 6;
            break;
          }
          throw _boom["default"].notFound("Lista no encontrada.");
        case 6:
          listaItem.precios.push(priceData);
          _context12.next = 9;
          return listaItem.save();
        case 9:
          return _context12.abrupt("return", listaItem.precios);
        case 12:
          _context12.prev = 12;
          _context12.t0 = _context12["catch"](0);
          throw _boom["default"].internal(_context12.t0.message);
        case 15:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 12]]);
  }));
  return function addPriceToLista(_x17, _x18) {
    return _ref12.apply(this, arguments);
  };
}();

// ADD NEW ROLE TO LISTA
var addRoleToLista = exports.addRoleToLista = /*#__PURE__*/function () {
  var _ref13 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee13(id, roleData) {
    var listaItem;
    return _regenerator["default"].wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          _context13.next = 3;
          return _listas["default"].findById(id);
        case 3:
          listaItem = _context13.sent;
          if (listaItem) {
            _context13.next = 6;
            break;
          }
          throw _boom["default"].notFound("Lista no encontrada.");
        case 6:
          listaItem.roles.push(roleData);
          _context13.next = 9;
          return listaItem.save();
        case 9:
          return _context13.abrupt("return", listaItem.roles);
        case 12:
          _context13.prev = 12;
          _context13.t0 = _context13["catch"](0);
          throw _boom["default"].internal(_context13.t0.message);
        case 15:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 12]]);
  }));
  return function addRoleToLista(_x19, _x20) {
    return _ref13.apply(this, arguments);
  };
}();

// ADD NEW CONDITION DET TO ROLE
var addCondicionDetToRole = exports.addCondicionDetToRole = /*#__PURE__*/function () {
  var _ref14 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee14(id, condicion, condicionDetData) {
    var listaItem, role;
    return _regenerator["default"].wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          _context14.next = 3;
          return _listas["default"].findById(id);
        case 3:
          listaItem = _context14.sent;
          if (listaItem) {
            _context14.next = 6;
            break;
          }
          throw _boom["default"].notFound("Lista no encontrada.");
        case 6:
          role = listaItem.roles.find(function (rol) {
            return rol.Condicion === condicion;
          });
          if (role) {
            _context14.next = 9;
            break;
          }
          throw _boom["default"].notFound("Condición no encontrada.");
        case 9:
          role.condicion_det.push(condicionDetData);
          _context14.next = 12;
          return listaItem.save();
        case 12:
          return _context14.abrupt("return", role.condicion_det);
        case 15:
          _context14.prev = 15;
          _context14.t0 = _context14["catch"](0);
          throw _boom["default"].internal(_context14.t0.message);
        case 18:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[0, 15]]);
  }));
  return function addCondicionDetToRole(_x21, _x22, _x23) {
    return _ref14.apply(this, arguments);
  };
}();

// ADD NEW PROMOTION TO LISTA
var addPromotionToLista = exports.addPromotionToLista = /*#__PURE__*/function () {
  var _ref15 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee15(id, promoData) {
    var listaItem;
    return _regenerator["default"].wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          _context15.next = 3;
          return _listas["default"].findById(id);
        case 3:
          listaItem = _context15.sent;
          if (listaItem) {
            _context15.next = 6;
            break;
          }
          throw _boom["default"].notFound("Lista no encontrada.");
        case 6:
          listaItem.promociones.push(promoData);
          _context15.next = 9;
          return listaItem.save();
        case 9:
          return _context15.abrupt("return", listaItem.promociones);
        case 12:
          _context15.prev = 12;
          _context15.t0 = _context15["catch"](0);
          throw _boom["default"].internal(_context15.t0.message);
        case 15:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[0, 12]]);
  }));
  return function addPromotionToLista(_x24, _x25) {
    return _ref15.apply(this, arguments);
  };
}();

// ADD NEW CONDITION TO PROMO
var addCondicionToPromo = exports.addCondicionToPromo = /*#__PURE__*/function () {
  var _ref16 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee16(id, IdTipoPromoOK, condicionData) {
    var listaItem, promo;
    return _regenerator["default"].wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.prev = 0;
          _context16.next = 3;
          return _listas["default"].findById(id);
        case 3:
          listaItem = _context16.sent;
          if (listaItem) {
            _context16.next = 6;
            break;
          }
          throw _boom["default"].notFound("Lista no encontrada.");
        case 6:
          promo = listaItem.promociones.find(function (promo) {
            return promo.IdTipoPromoOK === IdTipoPromoOK;
          });
          if (promo) {
            _context16.next = 9;
            break;
          }
          throw _boom["default"].notFound("Promoción no encontrada.");
        case 9:
          // Add new condition to the promo
          promo.condiciones.push({
            IdEtiquetaOK: condicionData.IdEtiquetaOK,
            Etiqueta: condicionData.Etiqueta,
            Valores: condicionData.Valores.map(function (v) {
              return {
                valor: v.valor,
                IdComparaValorOK: v.IdComparaValorOK
              };
            }),
            IdOpComparaValoresOK: condicionData.IdOpComparaValoresOK,
            IdOpLogicoEtiquetaOK: condicionData.IdOpLogicoEtiquetaOK
          });
          _context16.next = 12;
          return listaItem.save();
        case 12:
          return _context16.abrupt("return", promo.condiciones);
        case 15:
          _context16.prev = 15;
          _context16.t0 = _context16["catch"](0);
          throw _boom["default"].internal(_context16.t0.message);
        case 18:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[0, 15]]);
  }));
  return function addCondicionToPromo(_x26, _x27, _x28) {
    return _ref16.apply(this, arguments);
  };
}();

// ADD NEW VALUE TO CONDITION IN PROMO
var addValorToCondicion = exports.addValorToCondicion = /*#__PURE__*/function () {
  var _ref17 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee17(id, IdTipoPromoOK, IdEtiquetaOK, valorData) {
    var listaItem, promo, condicion;
    return _regenerator["default"].wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.prev = 0;
          _context17.next = 3;
          return _listas["default"].findById(id);
        case 3:
          listaItem = _context17.sent;
          if (listaItem) {
            _context17.next = 6;
            break;
          }
          throw _boom["default"].notFound("Lista no encontrada.");
        case 6:
          promo = listaItem.promociones.find(function (promo) {
            return promo.IdTipoPromoOK === IdTipoPromoOK;
          });
          if (promo) {
            _context17.next = 9;
            break;
          }
          throw _boom["default"].notFound("Promoción no encontrada.");
        case 9:
          condicion = promo.condiciones.find(function (cond) {
            return cond.IdEtiquetaOK === IdEtiquetaOK;
          });
          if (condicion) {
            _context17.next = 12;
            break;
          }
          throw _boom["default"].notFound("Condición no encontrada.");
        case 12:
          condicion.Valores.push(valorData);
          _context17.next = 15;
          return listaItem.save();
        case 15:
          return _context17.abrupt("return", condicion.Valores);
        case 18:
          _context17.prev = 18;
          _context17.t0 = _context17["catch"](0);
          throw _boom["default"].internal(_context17.t0.message);
        case 21:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[0, 18]]);
  }));
  return function addValorToCondicion(_x29, _x30, _x31, _x32) {
    return _ref17.apply(this, arguments);
  };
}();

// ADD NEW BUSINESS TO LISTA
var addBusinessToLista = exports.addBusinessToLista = /*#__PURE__*/function () {
  var _ref18 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee18(id, businessData) {
    var listaItem;
    return _regenerator["default"].wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.prev = 0;
          _context18.next = 3;
          return _listas["default"].findById(id);
        case 3:
          listaItem = _context18.sent;
          if (listaItem) {
            _context18.next = 6;
            break;
          }
          throw _boom["default"].notFound("Lista no encontrada.");
        case 6:
          listaItem.negocios.push(businessData);
          _context18.next = 9;
          return listaItem.save();
        case 9:
          return _context18.abrupt("return", listaItem.negocios);
        case 12:
          _context18.prev = 12;
          _context18.t0 = _context18["catch"](0);
          throw _boom["default"].internal(_context18.t0.message);
        case 15:
        case "end":
          return _context18.stop();
      }
    }, _callee18, null, [[0, 12]]);
  }));
  return function addBusinessToLista(_x33, _x34) {
    return _ref18.apply(this, arguments);
  };
}();

// UPDATE LISTA
var updateLista = exports.updateLista = /*#__PURE__*/function () {
  var _ref19 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee19(id, data) {
    var listaItem, key;
    return _regenerator["default"].wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          _context19.prev = 0;
          _context19.next = 3;
          return _listas["default"].findById(id);
        case 3:
          listaItem = _context19.sent;
          if (listaItem) {
            _context19.next = 6;
            break;
          }
          throw _boom["default"].notFound("Lista no encontrada.");
        case 6:
          // Only update the fields provided in data
          for (key in data) {
            if (data.hasOwnProperty(key)) {
              listaItem[key] = data[key];
            }
          }
          _context19.next = 9;
          return listaItem.save();
        case 9:
          return _context19.abrupt("return", listaItem);
        case 12:
          _context19.prev = 12;
          _context19.t0 = _context19["catch"](0);
          throw _boom["default"].internal(_context19.t0.message);
        case 15:
        case "end":
          return _context19.stop();
      }
    }, _callee19, null, [[0, 12]]);
  }));
  return function updateLista(_x35, _x36) {
    return _ref19.apply(this, arguments);
  };
}();

// UPDATE PRICE IN LISTA
var updatePriceInLista = exports.updatePriceInLista = /*#__PURE__*/function () {
  var _ref20 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee20(id, priceId, priceData) {
    var listaItem, priceIndex;
    return _regenerator["default"].wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          _context20.prev = 0;
          _context20.next = 3;
          return _listas["default"].findById(id);
        case 3:
          listaItem = _context20.sent;
          if (listaItem) {
            _context20.next = 6;
            break;
          }
          throw _boom["default"].notFound("Lista no encontrada.");
        case 6:
          priceIndex = listaItem.precios.findIndex(function (price) {
            return price.IdProdServOK.toString() === priceId;
          });
          if (!(priceIndex === -1)) {
            _context20.next = 9;
            break;
          }
          throw _boom["default"].notFound("Precio no encontrado.");
        case 9:
          listaItem.precios[priceIndex] = _objectSpread(_objectSpread({}, listaItem.precios[priceIndex].toObject()), priceData);
          _context20.next = 12;
          return listaItem.save();
        case 12:
          return _context20.abrupt("return", listaItem.precios[priceIndex]);
        case 15:
          _context20.prev = 15;
          _context20.t0 = _context20["catch"](0);
          throw _boom["default"].internal(_context20.t0.message);
        case 18:
        case "end":
          return _context20.stop();
      }
    }, _callee20, null, [[0, 15]]);
  }));
  return function updatePriceInLista(_x37, _x38, _x39) {
    return _ref20.apply(this, arguments);
  };
}();

// UPDATE ROLE IN LISTA
var updateRoleInLista = exports.updateRoleInLista = /*#__PURE__*/function () {
  var _ref21 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee21(id, roleId, roleData) {
    var listaItem, roleIndex, key;
    return _regenerator["default"].wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          _context21.prev = 0;
          _context21.next = 3;
          return _listas["default"].findById(id);
        case 3:
          listaItem = _context21.sent;
          if (listaItem) {
            _context21.next = 6;
            break;
          }
          throw _boom["default"].notFound("Lista no encontrada.");
        case 6:
          roleIndex = listaItem.roles.findIndex(function (role) {
            return role.Condicion.toString() === roleId;
          });
          if (!(roleIndex === -1)) {
            _context21.next = 9;
            break;
          }
          throw _boom["default"].notFound("Rol no encontrado.");
        case 9:
          // Only update the fields provided in roleData
          for (key in roleData) {
            if (roleData.hasOwnProperty(key)) {
              listaItem.roles[roleIndex][key] = roleData[key];
            }
          }
          _context21.next = 12;
          return listaItem.save();
        case 12:
          return _context21.abrupt("return", listaItem.roles[roleIndex]);
        case 15:
          _context21.prev = 15;
          _context21.t0 = _context21["catch"](0);
          throw _boom["default"].internal(_context21.t0.message);
        case 18:
        case "end":
          return _context21.stop();
      }
    }, _callee21, null, [[0, 15]]);
  }));
  return function updateRoleInLista(_x40, _x41, _x42) {
    return _ref21.apply(this, arguments);
  };
}();

// UPDATE CONDITION DET IN ROLE
var updateCondicionDetInRole = exports.updateCondicionDetInRole = /*#__PURE__*/function () {
  var _ref22 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee22(id, condicion, condicionDetId, condicionDetData) {
    var listaItem, role, condicionDetIndex, key;
    return _regenerator["default"].wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          _context22.prev = 0;
          _context22.next = 3;
          return _listas["default"].findById(id);
        case 3:
          listaItem = _context22.sent;
          if (listaItem) {
            _context22.next = 6;
            break;
          }
          throw _boom["default"].notFound("Lista no encontrada.");
        case 6:
          role = listaItem.roles.find(function (rol) {
            return rol.Condicion === condicion;
          });
          if (role) {
            _context22.next = 9;
            break;
          }
          throw _boom["default"].notFound("Condición no encontrada.");
        case 9:
          condicionDetIndex = role.condicion_det.findIndex(function (cond) {
            return cond.IdTipoCondicionOK.toString() === condicionDetId;
          });
          if (!(condicionDetIndex === -1)) {
            _context22.next = 12;
            break;
          }
          throw _boom["default"].notFound("Condición det no encontrada.");
        case 12:
          // Only update the fields provided in condicionDetData
          for (key in condicionDetData) {
            if (condicionDetData.hasOwnProperty(key)) {
              role.condicion_det[condicionDetIndex][key] = condicionDetData[key];
            }
          }
          _context22.next = 15;
          return listaItem.save();
        case 15:
          return _context22.abrupt("return", role.condicion_det[condicionDetIndex]);
        case 18:
          _context22.prev = 18;
          _context22.t0 = _context22["catch"](0);
          throw _boom["default"].internal(_context22.t0.message);
        case 21:
        case "end":
          return _context22.stop();
      }
    }, _callee22, null, [[0, 18]]);
  }));
  return function updateCondicionDetInRole(_x43, _x44, _x45, _x46) {
    return _ref22.apply(this, arguments);
  };
}();

// UPDATE PROMOTION IN LISTA
var updatePromotionInLista = exports.updatePromotionInLista = /*#__PURE__*/function () {
  var _ref23 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee23(id, promoId, promoData) {
    var listaItem, promoIndex, key;
    return _regenerator["default"].wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          _context23.prev = 0;
          _context23.next = 3;
          return _listas["default"].findById(id);
        case 3:
          listaItem = _context23.sent;
          if (listaItem) {
            _context23.next = 6;
            break;
          }
          throw _boom["default"].notFound("Lista no encontrada.");
        case 6:
          promoIndex = listaItem.promociones.findIndex(function (promo) {
            return promo.IdTipoPromoOK.toString() === promoId;
          });
          if (!(promoIndex === -1)) {
            _context23.next = 9;
            break;
          }
          throw _boom["default"].notFound("Promoción no encontrada.");
        case 9:
          // Only update the fields provided in promoData
          for (key in promoData) {
            if (promoData.hasOwnProperty(key) && key !== "condiciones") {
              listaItem.promociones[promoIndex][key] = promoData[key];
            }
          }
          _context23.next = 12;
          return listaItem.save();
        case 12:
          return _context23.abrupt("return", listaItem.promociones[promoIndex]);
        case 15:
          _context23.prev = 15;
          _context23.t0 = _context23["catch"](0);
          throw _boom["default"].internal(_context23.t0.message);
        case 18:
        case "end":
          return _context23.stop();
      }
    }, _callee23, null, [[0, 15]]);
  }));
  return function updatePromotionInLista(_x47, _x48, _x49) {
    return _ref23.apply(this, arguments);
  };
}();

// UPDATE CONDITION IN PROMO
var updateCondicionInPromo = exports.updateCondicionInPromo = /*#__PURE__*/function () {
  var _ref24 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee24(id, IdTipoPromoOK, condicionId, condicionData) {
    var listaItem, promo, condicionIndex, key;
    return _regenerator["default"].wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          _context24.prev = 0;
          _context24.next = 3;
          return _listas["default"].findById(id);
        case 3:
          listaItem = _context24.sent;
          if (listaItem) {
            _context24.next = 6;
            break;
          }
          throw _boom["default"].notFound("Lista no encontrada.");
        case 6:
          promo = listaItem.promociones.find(function (promo) {
            return promo.IdTipoPromoOK === IdTipoPromoOK;
          });
          if (promo) {
            _context24.next = 9;
            break;
          }
          throw _boom["default"].notFound("Promoción no encontrada.");
        case 9:
          condicionIndex = promo.condiciones.findIndex(function (cond) {
            return cond.IdEtiquetaOK.toString() === condicionId;
          });
          if (!(condicionIndex === -1)) {
            _context24.next = 12;
            break;
          }
          throw _boom["default"].notFound("Condición no encontrada.");
        case 12:
          // Only update the fields provided in condicionData
          for (key in condicionData) {
            if (condicionData.hasOwnProperty(key) && key !== "Valores") {
              promo.condiciones[condicionIndex][key] = condicionData[key];
            }
          }
          _context24.next = 15;
          return listaItem.save();
        case 15:
          return _context24.abrupt("return", promo.condiciones[condicionIndex]);
        case 18:
          _context24.prev = 18;
          _context24.t0 = _context24["catch"](0);
          throw _boom["default"].internal(_context24.t0.message);
        case 21:
        case "end":
          return _context24.stop();
      }
    }, _callee24, null, [[0, 18]]);
  }));
  return function updateCondicionInPromo(_x50, _x51, _x52, _x53) {
    return _ref24.apply(this, arguments);
  };
}();

// UPDATE VALUE IN CONDITION IN PROMO
var updateValorInCondicion = exports.updateValorInCondicion = /*#__PURE__*/function () {
  var _ref25 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee25(id, IdTipoPromoOK, IdEtiquetaOK, valorId, valorData) {
    var listaItem, promo, condicion, valorIndex;
    return _regenerator["default"].wrap(function _callee25$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          _context25.prev = 0;
          _context25.next = 3;
          return _listas["default"].findById(id);
        case 3:
          listaItem = _context25.sent;
          if (listaItem) {
            _context25.next = 6;
            break;
          }
          throw _boom["default"].notFound("Lista no encontrada.");
        case 6:
          promo = listaItem.promociones.find(function (promo) {
            return promo.IdTipoPromoOK === IdTipoPromoOK;
          });
          if (promo) {
            _context25.next = 9;
            break;
          }
          throw _boom["default"].notFound("Promoción no encontrada.");
        case 9:
          condicion = promo.condiciones.find(function (cond) {
            return cond.IdEtiquetaOK === IdEtiquetaOK;
          });
          if (condicion) {
            _context25.next = 12;
            break;
          }
          throw _boom["default"].notFound("Condición no encontrada.");
        case 12:
          valorIndex = condicion.Valores.findIndex(function (val) {
            return val.valor.toString() === valorId;
          });
          if (!(valorIndex === -1)) {
            _context25.next = 15;
            break;
          }
          throw _boom["default"].notFound("Valor no encontrado.");
        case 15:
          condicion.Valores[valorIndex] = _objectSpread(_objectSpread({}, condicion.Valores[valorIndex].toObject()), valorData);
          _context25.next = 18;
          return listaItem.save();
        case 18:
          return _context25.abrupt("return", condicion.Valores[valorIndex]);
        case 21:
          _context25.prev = 21;
          _context25.t0 = _context25["catch"](0);
          throw _boom["default"].internal(_context25.t0.message);
        case 24:
        case "end":
          return _context25.stop();
      }
    }, _callee25, null, [[0, 21]]);
  }));
  return function updateValorInCondicion(_x54, _x55, _x56, _x57, _x58) {
    return _ref25.apply(this, arguments);
  };
}();

// UPDATE BUSINESS IN LISTA
var updateBusinessInLista = exports.updateBusinessInLista = /*#__PURE__*/function () {
  var _ref26 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee26(id, businessId, businessData) {
    var listaItem, businessIndex;
    return _regenerator["default"].wrap(function _callee26$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          _context26.prev = 0;
          _context26.next = 3;
          return _listas["default"].findById(id);
        case 3:
          listaItem = _context26.sent;
          if (listaItem) {
            _context26.next = 6;
            break;
          }
          throw _boom["default"].notFound("Lista no encontrada.");
        case 6:
          businessIndex = listaItem.negocios.findIndex(function (business) {
            return business.IdNegocioOK.toString() === businessId;
          });
          if (!(businessIndex === -1)) {
            _context26.next = 9;
            break;
          }
          throw _boom["default"].notFound("Negocio no encontrado.");
        case 9:
          listaItem.negocios[businessIndex] = _objectSpread(_objectSpread({}, listaItem.negocios[businessIndex].toObject()), businessData);
          _context26.next = 12;
          return listaItem.save();
        case 12:
          return _context26.abrupt("return", listaItem.negocios[businessIndex]);
        case 15:
          _context26.prev = 15;
          _context26.t0 = _context26["catch"](0);
          throw _boom["default"].internal(_context26.t0.message);
        case 18:
        case "end":
          return _context26.stop();
      }
    }, _callee26, null, [[0, 15]]);
  }));
  return function updateBusinessInLista(_x59, _x60, _x61) {
    return _ref26.apply(this, arguments);
  };
}();

// DELETE LISTA
var deleteLista = exports.deleteLista = /*#__PURE__*/function () {
  var _ref27 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee27(id) {
    var deletedLista;
    return _regenerator["default"].wrap(function _callee27$(_context27) {
      while (1) switch (_context27.prev = _context27.next) {
        case 0:
          _context27.prev = 0;
          _context27.next = 3;
          return _listas["default"].findByIdAndDelete(id);
        case 3:
          deletedLista = _context27.sent;
          if (deletedLista) {
            _context27.next = 6;
            break;
          }
          throw _boom["default"].notFound("Lista no encontrada.");
        case 6:
          return _context27.abrupt("return", deletedLista);
        case 9:
          _context27.prev = 9;
          _context27.t0 = _context27["catch"](0);
          throw _boom["default"].internal(_context27.t0.message);
        case 12:
        case "end":
          return _context27.stop();
      }
    }, _callee27, null, [[0, 9]]);
  }));
  return function deleteLista(_x62) {
    return _ref27.apply(this, arguments);
  };
}();

// DELETE PRICE IN LISTA
var deletePriceInLista = exports.deletePriceInLista = /*#__PURE__*/function () {
  var _ref28 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee28(id, priceId) {
    var listaItem, priceIndex;
    return _regenerator["default"].wrap(function _callee28$(_context28) {
      while (1) switch (_context28.prev = _context28.next) {
        case 0:
          _context28.prev = 0;
          _context28.next = 3;
          return _listas["default"].findById(id);
        case 3:
          listaItem = _context28.sent;
          if (listaItem) {
            _context28.next = 6;
            break;
          }
          throw _boom["default"].notFound("Lista no encontrada.");
        case 6:
          priceIndex = listaItem.precios.findIndex(function (price) {
            return price.IdProdServOK.toString() === priceId;
          });
          if (!(priceIndex === -1)) {
            _context28.next = 9;
            break;
          }
          throw _boom["default"].notFound("Precio no encontrado.");
        case 9:
          listaItem.precios.splice(priceIndex, 1);
          _context28.next = 12;
          return listaItem.save();
        case 12:
          return _context28.abrupt("return", listaItem.precios);
        case 15:
          _context28.prev = 15;
          _context28.t0 = _context28["catch"](0);
          throw _boom["default"].internal(_context28.t0.message);
        case 18:
        case "end":
          return _context28.stop();
      }
    }, _callee28, null, [[0, 15]]);
  }));
  return function deletePriceInLista(_x63, _x64) {
    return _ref28.apply(this, arguments);
  };
}();

// DELETE ROLE IN LISTA
var deleteRoleInLista = exports.deleteRoleInLista = /*#__PURE__*/function () {
  var _ref29 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee29(id, roleId) {
    var listaItem, roleIndex;
    return _regenerator["default"].wrap(function _callee29$(_context29) {
      while (1) switch (_context29.prev = _context29.next) {
        case 0:
          _context29.prev = 0;
          _context29.next = 3;
          return _listas["default"].findById(id);
        case 3:
          listaItem = _context29.sent;
          if (listaItem) {
            _context29.next = 6;
            break;
          }
          throw _boom["default"].notFound("Lista no encontrada.");
        case 6:
          roleIndex = listaItem.roles.findIndex(function (role) {
            return role.Condicion.toString() === roleId;
          });
          if (!(roleIndex === -1)) {
            _context29.next = 9;
            break;
          }
          throw _boom["default"].notFound("Rol no encontrado.");
        case 9:
          listaItem.roles.splice(roleIndex, 1);
          _context29.next = 12;
          return listaItem.save();
        case 12:
          return _context29.abrupt("return", listaItem.roles);
        case 15:
          _context29.prev = 15;
          _context29.t0 = _context29["catch"](0);
          throw _boom["default"].internal(_context29.t0.message);
        case 18:
        case "end":
          return _context29.stop();
      }
    }, _callee29, null, [[0, 15]]);
  }));
  return function deleteRoleInLista(_x65, _x66) {
    return _ref29.apply(this, arguments);
  };
}();

// DELETE CONDITION DET IN ROLE
var deleteCondicionDetInRole = exports.deleteCondicionDetInRole = /*#__PURE__*/function () {
  var _ref30 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee30(id, condicion, condicionDetId) {
    var listaItem, role, condicionDetIndex;
    return _regenerator["default"].wrap(function _callee30$(_context30) {
      while (1) switch (_context30.prev = _context30.next) {
        case 0:
          _context30.prev = 0;
          _context30.next = 3;
          return _listas["default"].findById(id);
        case 3:
          listaItem = _context30.sent;
          if (listaItem) {
            _context30.next = 6;
            break;
          }
          throw _boom["default"].notFound("Lista no encontrada.");
        case 6:
          role = listaItem.roles.find(function (rol) {
            return rol.Condicion === condicion;
          });
          if (role) {
            _context30.next = 9;
            break;
          }
          throw _boom["default"].notFound("Condición no encontrada.");
        case 9:
          condicionDetIndex = role.condicion_det.findIndex(function (cond) {
            return cond.IdTipoCondicionOK.toString() === condicionDetId;
          });
          if (!(condicionDetIndex === -1)) {
            _context30.next = 12;
            break;
          }
          throw _boom["default"].notFound("Condición det no encontrada.");
        case 12:
          role.condicion_det.splice(condicionDetIndex, 1);
          _context30.next = 15;
          return listaItem.save();
        case 15:
          return _context30.abrupt("return", role.condicion_det);
        case 18:
          _context30.prev = 18;
          _context30.t0 = _context30["catch"](0);
          throw _boom["default"].internal(_context30.t0.message);
        case 21:
        case "end":
          return _context30.stop();
      }
    }, _callee30, null, [[0, 18]]);
  }));
  return function deleteCondicionDetInRole(_x67, _x68, _x69) {
    return _ref30.apply(this, arguments);
  };
}();

// DELETE PROMOTION IN LISTA
var deletePromotionInLista = exports.deletePromotionInLista = /*#__PURE__*/function () {
  var _ref31 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee31(id, promoId) {
    var listaItem, promoIndex;
    return _regenerator["default"].wrap(function _callee31$(_context31) {
      while (1) switch (_context31.prev = _context31.next) {
        case 0:
          _context31.prev = 0;
          _context31.next = 3;
          return _listas["default"].findById(id);
        case 3:
          listaItem = _context31.sent;
          if (listaItem) {
            _context31.next = 6;
            break;
          }
          throw _boom["default"].notFound("Lista no encontrada.");
        case 6:
          promoIndex = listaItem.promociones.findIndex(function (promo) {
            return promo.IdTipoPromoOK.toString() === promoId;
          });
          if (!(promoIndex === -1)) {
            _context31.next = 9;
            break;
          }
          throw _boom["default"].notFound("Promoción no encontrada.");
        case 9:
          listaItem.promociones.splice(promoIndex, 1);
          _context31.next = 12;
          return listaItem.save();
        case 12:
          return _context31.abrupt("return", listaItem.promociones);
        case 15:
          _context31.prev = 15;
          _context31.t0 = _context31["catch"](0);
          throw _boom["default"].internal(_context31.t0.message);
        case 18:
        case "end":
          return _context31.stop();
      }
    }, _callee31, null, [[0, 15]]);
  }));
  return function deletePromotionInLista(_x70, _x71) {
    return _ref31.apply(this, arguments);
  };
}();

// DELETE CONDITION IN PROMO
var deleteCondicionInPromo = exports.deleteCondicionInPromo = /*#__PURE__*/function () {
  var _ref32 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee32(id, IdTipoPromoOK, condicionId) {
    var listaItem, promo, condicionIndex;
    return _regenerator["default"].wrap(function _callee32$(_context32) {
      while (1) switch (_context32.prev = _context32.next) {
        case 0:
          _context32.prev = 0;
          _context32.next = 3;
          return _listas["default"].findById(id);
        case 3:
          listaItem = _context32.sent;
          if (listaItem) {
            _context32.next = 6;
            break;
          }
          throw _boom["default"].notFound("Lista no encontrada.");
        case 6:
          promo = listaItem.promociones.find(function (promo) {
            return promo.IdTipoPromoOK === IdTipoPromoOK;
          });
          if (promo) {
            _context32.next = 9;
            break;
          }
          throw _boom["default"].notFound("Promoción no encontrada.");
        case 9:
          condicionIndex = promo.condiciones.findIndex(function (cond) {
            return cond.IdEtiquetaOK.toString() === condicionId;
          });
          if (!(condicionIndex === -1)) {
            _context32.next = 12;
            break;
          }
          throw _boom["default"].notFound("Condición no encontrada.");
        case 12:
          promo.condiciones.splice(condicionIndex, 1);
          _context32.next = 15;
          return listaItem.save();
        case 15:
          return _context32.abrupt("return", promo.condiciones);
        case 18:
          _context32.prev = 18;
          _context32.t0 = _context32["catch"](0);
          throw _boom["default"].internal(_context32.t0.message);
        case 21:
        case "end":
          return _context32.stop();
      }
    }, _callee32, null, [[0, 18]]);
  }));
  return function deleteCondicionInPromo(_x72, _x73, _x74) {
    return _ref32.apply(this, arguments);
  };
}();

// DELETE VALUE IN CONDITION IN PROMO
var deleteValorInCondicion = exports.deleteValorInCondicion = /*#__PURE__*/function () {
  var _ref33 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee33(id, IdTipoPromoOK, IdEtiquetaOK, valorId) {
    var listaItem, promo, condicion, valorIndex;
    return _regenerator["default"].wrap(function _callee33$(_context33) {
      while (1) switch (_context33.prev = _context33.next) {
        case 0:
          _context33.prev = 0;
          _context33.next = 3;
          return _listas["default"].findById(id);
        case 3:
          listaItem = _context33.sent;
          if (listaItem) {
            _context33.next = 6;
            break;
          }
          throw _boom["default"].notFound("Lista no encontrada.");
        case 6:
          promo = listaItem.promociones.find(function (promo) {
            return promo.IdTipoPromoOK === IdTipoPromoOK;
          });
          if (promo) {
            _context33.next = 9;
            break;
          }
          throw _boom["default"].notFound("Promoción no encontrada.");
        case 9:
          condicion = promo.condiciones.find(function (cond) {
            return cond.IdEtiquetaOK === IdEtiquetaOK;
          });
          if (condicion) {
            _context33.next = 12;
            break;
          }
          throw _boom["default"].notFound("Condición no encontrada.");
        case 12:
          valorIndex = condicion.Valores.findIndex(function (val) {
            return val.valor.toString() === valorId;
          });
          if (!(valorIndex === -1)) {
            _context33.next = 15;
            break;
          }
          throw _boom["default"].notFound("Valor no encontrado.");
        case 15:
          condicion.Valores.splice(valorIndex, 1);
          _context33.next = 18;
          return listaItem.save();
        case 18:
          return _context33.abrupt("return", condicion.Valores);
        case 21:
          _context33.prev = 21;
          _context33.t0 = _context33["catch"](0);
          throw _boom["default"].internal(_context33.t0.message);
        case 24:
        case "end":
          return _context33.stop();
      }
    }, _callee33, null, [[0, 21]]);
  }));
  return function deleteValorInCondicion(_x75, _x76, _x77, _x78) {
    return _ref33.apply(this, arguments);
  };
}();

// DELETE BUSINESS IN LISTA
var deleteBusinessInLista = exports.deleteBusinessInLista = /*#__PURE__*/function () {
  var _ref34 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee34(id, businessId) {
    var listaItem, businessIndex;
    return _regenerator["default"].wrap(function _callee34$(_context34) {
      while (1) switch (_context34.prev = _context34.next) {
        case 0:
          _context34.prev = 0;
          _context34.next = 3;
          return _listas["default"].findById(id);
        case 3:
          listaItem = _context34.sent;
          if (listaItem) {
            _context34.next = 6;
            break;
          }
          throw _boom["default"].notFound("Lista no encontrada.");
        case 6:
          businessIndex = listaItem.negocios.findIndex(function (business) {
            return business.IdNegocioOK.toString() === businessId;
          });
          if (!(businessIndex === -1)) {
            _context34.next = 9;
            break;
          }
          throw _boom["default"].notFound("Negocio no encontrado.");
        case 9:
          listaItem.negocios.splice(businessIndex, 1);
          _context34.next = 12;
          return listaItem.save();
        case 12:
          return _context34.abrupt("return", listaItem.negocios);
        case 15:
          _context34.prev = 15;
          _context34.t0 = _context34["catch"](0);
          throw _boom["default"].internal(_context34.t0.message);
        case 18:
        case "end":
          return _context34.stop();
      }
    }, _callee34, null, [[0, 15]]);
  }));
  return function deleteBusinessInLista(_x79, _x80) {
    return _ref34.apply(this, arguments);
  };
}();