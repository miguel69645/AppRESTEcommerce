"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OK = exports.FAIL = void 0;
var OK = exports.OK = function OK(message, data) {
  return {
    message: message || 'OK',
    data: data,
    success: true,
    fail: false
  };
};
var FAIL = exports.FAIL = function FAIL(message, data) {
  return {
    message: message || 'FAIL',
    data: data,
    success: false,
    fail: true
  };
};