"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var mongoose = _interopRequireWildcard(require("mongoose"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var listasSchema = new mongoose.Schema({
  IdInstitutoOK: {
    type: String,
    required: true
  },
  IdListaOK: {
    type: String,
    required: true
  },
  IdListaBK: {
    type: String,
    required: true
  },
  DesLista: {
    type: String,
    required: true
  },
  FechaExpiraIni: {
    type: Date,
    required: true
  },
  FechaExpiraFin: {
    type: Date,
    required: true
  },
  IdTipoListaOK: {
    type: String,
    required: true
  },
  IdTipoGeneraListaOK: {
    type: String,
    required: true
  },
  IdListaBaseOK: {
    type: String,
    required: true
  },
  IdTipoFormulaOK: {
    type: String,
    required: true
  },
  precios: [{
    IdProdServOK: {
      type: String
    },
    IdPresentaOK: {
      type: String
    },
    PresentacionDelProducto: {
      type: String
    },
    IdTipoFormulaOK: {
      type: String
    },
    Formula: {
      type: String
    },
    Precio: {
      type: Number
    }
  }],
  roles: [{
    DesCondicion: {
      type: String,
      required: true
    },
    FechaExpiraIni: {
      type: Date,
      required: true
    },
    FechaExpiraFin: {
      type: Date,
      required: true
    },
    Condicion: {
      type: String,
      required: true
    },
    condicion_det: [{
      IdTipoCondicionOK: {
        type: String,
        required: true
      },
      IdTipoOperadorOK: {
        type: String,
        required: true
      },
      Valor: {
        type: String,
        required: true
      },
      Secuecia: {
        type: Number,
        required: true
      }
    }]
  }],
  promociones: [{
    IdTipoPromoOK: {
      type: String,
      required: true
    },
    DesPromo: {
      type: String,
      required: true
    },
    Formula: {
      type: String,
      required: true
    },
    FechaExpiraIni: {
      type: Date,
      required: true
    },
    FechaExpiraFin: {
      type: Date,
      required: true
    },
    condiciones: [{
      IdEtiquetaOK: {
        type: String,
        required: true
      },
      Etiqueta: {
        type: String,
        required: true
      },
      Valores: [{
        valor: {
          type: String,
          required: true
        },
        IdComparaValorOK: {
          type: String,
          required: true
        }
      }],
      IdOpComparaValoresOK: {
        type: String,
        required: true
      },
      IdOpLogicoEtiquetaOK: {
        type: String,
        required: true
      }
    }]
  }],
  negocios: [{
    IdNegocioOK: {
      type: String,
      required: true
    }
  }]
});
var _default = exports["default"] = mongoose.model("listas", listasSchema, "listas");