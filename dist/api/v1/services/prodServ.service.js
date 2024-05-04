"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putProdServItem = exports.postProdServItem = exports.getProdServList = exports.getProdServItem = exports.deleteProdServItem = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _ProdServ = _interopRequireDefault(require("../models/ProdServ"));
var _boom = _interopRequireDefault(require("@hapi/boom"));
//Commerce

//FIC: GET PRODUCTS AND SERVICES LIST
var getProdServList = exports.getProdServList = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var prodServList;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _ProdServ["default"].find();
        case 3:
          prodServList = _context.sent;
          return _context.abrupt("return", prodServList);
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
  return function getProdServList() {
    return _ref.apply(this, arguments);
  };
}();

//FIC: GET PRODUCT OR SERVICE BY ID
var getProdServItem = exports.getProdServItem = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id, keyType) {
    var prodServItem;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          if (!(keyType === "OK")) {
            _context2.next = 7;
            break;
          }
          _context2.next = 4;
          return _ProdServ["default"].findOne({
            IdProdServOK: id
          });
        case 4:
          prodServItem = _context2.sent;
          _context2.next = 11;
          break;
        case 7:
          if (!(keyType === "BK")) {
            _context2.next = 11;
            break;
          }
          _context2.next = 10;
          return _ProdServ["default"].findOne({
            IdProdServBK: id
          });
        case 10:
          prodServItem = _context2.sent;
        case 11:
          return _context2.abrupt("return", prodServItem);
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
  return function getProdServItem(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

// POST (ADD) Productos y/o Servicios.
var postProdServItem = exports.postProdServItem = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(paProdServItem) {
    var newProdServItem;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          newProdServItem = new _ProdServ["default"](paProdServItem);
          _context3.next = 4;
          return newProdServItem.save();
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
  return function postProdServItem(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

//FIC: SERVICES PUT
// PUT (MODIFY) Productos y/o Servicios.
var putProdServItem = exports.putProdServItem = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id, paProdServItem) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _ProdServ["default"].findOneAndUpdate({
            IdProdServOK: id
          }, paProdServItem, {
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
  return function putProdServItem(_x4, _x5) {
    return _ref4.apply(this, arguments);
  };
}();

// DELETE (REMOVE) PRODSERV
var deleteProdServItem = exports.deleteProdServItem = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
    var deletedProdServItem;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _ProdServ["default"].findOneAndDelete({
            IdProdServOK: id
          });
        case 3:
          deletedProdServItem = _context5.sent;
          if (deletedProdServItem) {
            _context5.next = 6;
            break;
          }
          throw _boom["default"].badRequest("No se pudo eliminar el Producto y/o Servicio.");
        case 6:
          return _context5.abrupt("return", deletedProdServItem);
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
  return function deleteProdServItem(_x6) {
    return _ref5.apply(this, arguments);
  };
}();