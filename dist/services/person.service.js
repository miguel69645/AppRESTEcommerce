"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addManyPersonsPWA = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _resp = require("../middlewares/resp.handler");
//FIC: Add import

//FIC: ADD MANY PERSONS FROM WEB/PWA ¡NO SAP!
var addManyPersonsPWA = exports.addManyPersonsPWA = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(persons) {
    var personsAdded;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return cat_personas.insertMany(persons, {
            order: true
          });
        case 3:
          personsAdded = _context.sent;
          return _context.abrupt("return", (0, _resp.OK)('Persona(s) agregada(s) correctamente al catalogo.', personsAdded));
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          if (!(_context.t0.code === 11000)) {
            _context.next = 13;
            break;
          }
          return _context.abrupt("return", (0, _resp.FAIL)('Alguna(s) de las personas enviadas ya están registradas en el catalogo de la BD. Verifica la información e intenta de nuevo.', _context.t0));
        case 13:
          return _context.abrupt("return", (0, _resp.FAIL)('No se pudo agregar la persona al catalogo. Error en el servidor.', _context.t0));
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function addManyPersonsPWA(_x) {
    return _ref.apply(this, arguments);
  };
}();