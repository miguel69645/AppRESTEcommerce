"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putEstatusItem = exports.postEstatus = exports.getEstatusById = exports.getEstatus = exports.deleteEstatus = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _estatus = _interopRequireDefault(require("../models/estatus"));
var _boom = _interopRequireDefault(require("@hapi/boom"));
// GET ESTATUS LIST
var getEstatus = exports.getEstatus = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var estatusList;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _estatus["default"].find();
        case 3:
          estatusList = _context.sent;
          return _context.abrupt("return", estatusList);
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
  return function getEstatus() {
    return _ref.apply(this, arguments);
  };
}();

// GET ESTATUS BY ID
var getEstatusById = exports.getEstatusById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
    var estatusItem;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _estatus["default"].findOne({
            IdTipoEstatusOK: id
          });
        case 3:
          estatusItem = _context2.sent;
          return _context2.abrupt("return", estatusItem);
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
  return function getEstatusById(_x) {
    return _ref2.apply(this, arguments);
  };
}();

// POST (ADD) ESTATUS
var postEstatus = exports.postEstatus = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(estatusItem) {
    var newEstatusItem;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          newEstatusItem = new _estatus["default"](estatusItem);
          _context3.next = 4;
          return newEstatusItem.save();
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
  return function postEstatus(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

// PUT (MODIFY) ESTATUS
var putEstatusItem = exports.putEstatusItem = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id, estatusItem) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _estatus["default"].findOneAndUpdate({
            IdTipoEstatusOK: id
          }, estatusItem, {
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
  return function putEstatusItem(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}();

// DELETE ESTATUS BY ID
var deleteEstatus = exports.deleteEstatus = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
    var deletedEstatus;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _estatus["default"].findOneAndDelete({
            IdTipoEstatusOK: id
          });
        case 3:
          deletedEstatus = _context5.sent;
          if (deletedEstatus) {
            _context5.next = 6;
            break;
          }
          throw _boom["default"].badRequest("No se pudo eliminar el Estatus.");
        case 6:
          return _context5.abrupt("return", deletedEstatus);
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
  return function deleteEstatus(_x5) {
    return _ref5.apply(this, arguments);
  };
}();