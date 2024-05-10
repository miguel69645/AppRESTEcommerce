"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var mongoose = _interopRequireWildcard(require("mongoose"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
// Dependiendo de cómo estén definidos estatusSchema y ubicacionesSchema, necesitas incluir sus definiciones.
var estatusSchema = new mongoose.Schema({
  // Define los campos necesarios para estatusSchema
});
var ubicacionesSchema = new mongoose.Schema({
  // Define los campos necesarios para ubicacionesSchema
});
var detailRowSchema = new mongoose.Schema({
  // Define la estructura de 'detailRowSchema' según necesites
});
var seriesSchema = new mongoose.Schema({
  Serie: {
    type: String,
    required: true
  },
  Placa: {
    type: String,
    required: true
  },
  Observacion: {
    type: String,
    required: false
  }
});
var _default = exports["default"] = mongoose.model("cat_series", seriesSchema, "cat_series");