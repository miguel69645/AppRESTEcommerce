"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.putInstitutoItem = exports.postInstituto = exports.getInstituto = exports.getCondiciones = exports.deleteInstituto = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _Institutos = _interopRequireDefault(require("../models/Institutos"));
var _boom = _interopRequireDefault(require("@hapi/boom"));
//Education

// FIC: GET INSTITUTOS LIST
var getCondiciones = exports.getCondiciones = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var condicionesList;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _Institutos["default"].find();
        case 3:
          condicionesList = _context.sent;
          return _context.abrupt("return", condicionesList);
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
  return function getCondiciones() {
    return _ref.apply(this, arguments);
  };
}();

// FIC: GET INSTITUTO BY ID
var getInstituto = exports.getInstituto = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id, keyType) {
    var institutoItem;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          if (!(keyType === "OK")) {
            _context2.next = 7;
            break;
          }
          _context2.next = 4;
          return Institutos.findOne({
            IdInstitutoOK: id
          });
        case 4:
          institutoItem = _context2.sent;
          _context2.next = 11;
          break;
        case 7:
          if (!(keyType === "BK")) {
            _context2.next = 11;
            break;
          }
          _context2.next = 10;
          return Institutos.findOne({
            IdInstitutoBK: id
          });
        case 10:
          institutoItem = _context2.sent;
        case 11:
          return _context2.abrupt("return", institutoItem);
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
  return function getInstituto(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

//Education
// FIC: POST (ADD) Instituto.
var postInstituto = exports.postInstituto = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(paInstitutoItem) {
    var newInstitutoItem;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          newInstitutoItem = new Institutos(paInstitutoItem);
          _context3.next = 4;
          return newInstitutoItem.save();
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
  return function postInstituto(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

//FIC: SERVICES PUT
// PUT (MODIFY) INSTITUTOS
var putInstitutoItem = exports.putInstitutoItem = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id, paInstitutoItem) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Institutos.findOneAndUpdate({
            IdInstitutoOK: id
          }, paInstitutoItem, {
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
  return function putInstitutoItem(_x4, _x5) {
    return _ref4.apply(this, arguments);
  };
}();

// FIC: DELETE INSTITUTO BY ID
var deleteInstituto = exports.deleteInstituto = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
    var deletedInstituto;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Institutos.findOneAndDelete({
            IdInstitutoOK: id
          });
        case 3:
          deletedInstituto = _context5.sent;
          if (deletedInstituto) {
            _context5.next = 6;
            break;
          }
          throw _boom["default"].badRequest("No se pudo eliminar el Instituto.");
        case 6:
          return _context5.abrupt("return", deletedInstituto);
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
  return function deleteInstituto(_x6) {
    return _ref5.apply(this, arguments);
  };
}();