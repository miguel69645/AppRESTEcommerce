"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Prodserv = exports.Inventarios = void 0;
var mongoose = _interopRequireWildcard(require("mongoose"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var inventariosSchema = new mongoose.Schema({
  IdInstitutoOK: {
    type: String,
    required: true
  },
  IdProdServOK: {
    type: String,
    required: true
  },
  IdPresentaOK: {
    type: String,
    required: true
  },
  negocios: [{
    IdNegocioOK: {
      type: String,
      required: true
    },
    descripcionNegocio: {
      type: String,
      required: true
    },
    ControlaSerie: {
      type: String,
      required: true
    },
    almacenes: [{
      IdAlmacenOK: {
        type: String,
        required: true
      },
      Descripcion: {
        type: String,
        required: true
      },
      Principal: {
        type: String,
        required: true
      },
      CantidadActual: {
        type: Number,
        required: true
      },
      CantidadDisponible: {
        type: Number,
        required: true
      },
      CantidadApartada: {
        type: Number,
        required: true
      },
      CantidadTransito: {
        type: Number,
        required: true
      },
      CantidadMerma: {
        type: Number,
        required: true
      },
      StockMaximo: {
        type: Number,
        required: true
      },
      StockMinimo: {
        type: Number,
        required: true
      },
      series: [{
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
        },
        estatus_fisico: [{
          IdTipoEstatusOK: {
            type: String,
            required: true
          },
          Actual: {
            type: String,
            required: true
          },
          Observacion: {
            type: String,
            required: false
          }
        }],
        estatus_venta: [{
          IdTipoEstatusOK: {
            type: String,
            required: true
          },
          Actual: {
            type: String,
            required: true
          },
          Observacion: {
            type: String,
            required: false
          }
        }],
        ubicaciones: [{
          IdAlmacenOK: {
            type: String,
            required: false
          },
          Ubicacion: {
            type: String,
            required: true
          },
          Actual: {
            type: String,
            required: true
          }
        }]
      }]
    }]
  }]
});
var prodservSchema = new mongoose.Schema({
  IdInstitutoOK: {
    type: String
  },
  IdProdServOK: {
    type: String
  },
  IdProdServBK: {
    type: String
  },
  CodigoBarras: {
    type: String
  },
  DesProdServ: {
    type: String
  },
  Indice: {
    type: String
  },
  presentaciones: [{
    IdPresentaOK: {
      type: String
    },
    IdPresentaBK: {
      type: String
    },
    CodigoBarras: {
      type: String
    },
    DesPresenta: {
      type: String
    },
    Indice: {
      type: String
    },
    Principal: {
      type: String
    }
  }]
});
var Inventarios = exports.Inventarios = mongoose.model("cat_inventarios", inventariosSchema, "cat_inventarios");
var Prodserv = exports.Prodserv = mongoose.model("cat_prod_serv", prodservSchema, "cat_prod_serv");