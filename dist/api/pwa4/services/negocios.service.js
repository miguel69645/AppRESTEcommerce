"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putNegocioItem = exports.postNegocio = exports.getNegocios = exports.getNegocio = exports.deleteNegocio = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _negocios = _interopRequireDefault(require("../models/negocios"));
var _boom = _interopRequireDefault(require("@hapi/boom"));
// Education

// GET ALL NEGOCIOS
var getNegocios = exports.getNegocios = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var negociosList;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _negocios["default"].find();
        case 3:
          negociosList = _context.sent;
          return _context.abrupt("return", negociosList);
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
  return function getNegocios() {
    return _ref.apply(this, arguments);
  };
}();

// GET NEGOCIO BY ID
var getNegocio = exports.getNegocio = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id, keyType) {
    var negocioItem;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          if (!(keyType === "OK")) {
            _context2.next = 7;
            break;
          }
          _context2.next = 4;
          return _negocios["default"].findOne({
            IdNegocioOK: id
          });
        case 4:
          negocioItem = _context2.sent;
          _context2.next = 11;
          break;
        case 7:
          if (!(keyType === "BK")) {
            _context2.next = 11;
            break;
          }
          _context2.next = 10;
          return _negocios["default"].findOne({
            IdNegocioBK: id
          });
        case 10:
          negocioItem = _context2.sent;
        case 11:
          return _context2.abrupt("return", negocioItem);
        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](0);
          throw _boom["default"].internal(_context2.t0);
        case 17:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 14]]);
  }));
  return function getNegocio(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

// POST (ADD) NEGOCIO
var postNegocio = exports.postNegocio = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(paNegocioItem) {
    var newNegocioItem;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          newNegocioItem = new _negocios["default"](paNegocioItem);
          _context3.next = 4;
          return newNegocioItem.save();
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
  return function postNegocio(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

// PUT (MODIFY) NEGOCIOS
var putNegocioItem = exports.putNegocioItem = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id, paNegocioItem) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _negocios["default"].findOneAndUpdate({
            IdNegocioOK: id
          }, paNegocioItem, {
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
  return function putNegocioItem(_x4, _x5) {
    return _ref4.apply(this, arguments);
  };
}();

// DELETE NEGOCIO BY ID
var deleteNegocio = exports.deleteNegocio = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
    var deletedNegocio;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _negocios["default"].findOneAndDelete({
            IdNegocioOK: id
          });
        case 3:
          deletedNegocio = _context5.sent;
          if (deletedNegocio) {
            _context5.next = 6;
            break;
          }
          throw _boom["default"].badRequest("No se pudo eliminar el negocio.");
        case 6:
          return _context5.abrupt("return", deletedNegocio);
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
  return function deleteNegocio(_x6) {
    return _ref5.apply(this, arguments);
  };
}();