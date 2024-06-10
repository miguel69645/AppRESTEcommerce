"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var mongoose = _interopRequireWildcard(require("mongoose"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var condicionesSchema = new mongoose.Schema({
  IdEtiquetaOK: {
    type: String,
    required: true
  },
  DesEtiqueta: {
    type: String,
    required: true
  },
  IdComparaValorOK: {
    type: String,
    required: true
  },
  DesComparaValor: {
    type: String,
    required: true
  },
  IdOpComparaValoresOK: {
    type: String,
    required: true
  },
  DesOpComparaValores: {
    type: String,
    required: true
  },
  IdOpLogicoEtiquetaOK: {
    type: String,
    required: true
  },
  DesOpLogicoEtiqueta: {
    type: String,
    required: true
  }
});
var _default = exports["default"] = mongoose.model("cat_condiciones", condicionesSchema, "cat_condiciones");