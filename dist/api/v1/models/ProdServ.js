"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var mongoose = _interopRequireWildcard(require("mongoose"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var prodservSchema = new mongoose.Schema({
  IdProdServPK: {
    type: Number,
    required: true
  },
  IdProdServOK: {
    type: String
  },
  IdProdServBK: {
    type: String
  },
  IdProdServMaOK: {
    type: String
  },
  IdProdServMaBK: {
    type: String
  },
  DesProdServ: {
    type: String
  },
  IdUMedidaOK: {
    type: String
  },
  IdUMedidaBK: {
    type: String
  },
  cat_prod_serv_estatus: [{
    IdTipoGenEstatusOK: {
      type: String
    },
    IdGenEstatusOK: {
      type: String
    },
    TipoEstatus: {
      type: String
    },
    Actual: {
      type: String
    },
    Observacion: {
      type: String
    },
    detail_row: {
      FechaReg: {
        type: Date,
        "default": Date.now
      },
      UsuarioReg: {
        type: String
      }
    },
    _id: false
  }],
  cat_prod_serv_paquetes: [{
    IdProdServOK: {
      type: String
    },
    IdProdServBK: {
      type: String
    },
    DesProdServ: {
      type: String
    },
    Cantidad: {
      type: Number
    },
    IdUMedidaOK: {
      type: String
    },
    IdUMedidaBK: {
      type: String
    },
    detail_row: {
      FechaReg: {
        type: Date,
        "default": Date.now
      },
      UsuarioReg: {
        type: String
      },
      FechaUltMod: {
        type: Date,
        "default": Date.now
      },
      UsuarioMod: {
        type: String
      },
      Activo: {
        type: String,
        "default": "S"
      },
      Borrado: {
        type: String,
        "default": "N"
      }
    }
  }],
  cat_prod_serv_archivos: [{
    DesArchivo: {
      type: String
    },
    RutaArchivo: {
      type: String
    },
    IdTipoGenArchivoOK: {
      type: String
    },
    IdGenArchivoOK: {
      type: String
    },
    TipoArchivo: {
      type: String
    },
    IdTipoGenSeccionOK: {
      type: String
    },
    IdGenSeccionOK: {
      type: String
    },
    TipoSeccion: {
      type: String
    },
    Secuencia: {
      type: Number
    },
    Principal: {
      type: String
    },
    detail_row: {
      FechaReg: {
        type: Date,
        "default": Date.now
      },
      UsuarioReg: {
        type: String
      },
      FechaUltMod: {
        type: Date,
        "default": Date.now
      },
      UsuarioMod: {
        type: String
      },
      Activo: {
        type: String,
        "default": "S"
      },
      Borrado: {
        type: String,
        "default": "N"
      }
    },
    _id: false
  }],
  cat_prod_serv_info_adicional: [{
    IdEtiqueta: {
      type: String
    },
    Etiqueta: {
      type: String
    },
    Valor: {
      type: String
    },
    IdTipoGenSeccionOK: {
      type: String
    },
    IdGenSeccionOK: {
      type: String
    },
    TipoSeccion: {
      type: String
    },
    Secuencia: {
      type: Number
    },
    detail_row: {
      FechaReg: {
        type: Date,
        "default": Date.now
      },
      UsuarioReg: {
        type: String
      },
      FechaUltMod: {
        type: Date,
        "default": Date.now
      },
      UsuarioMod: {
        type: String
      },
      Activo: {
        type: String,
        "default": "S"
      },
      Borrado: {
        type: String,
        "default": "N"
      }
    }
  }],
  detail_row: {
    FechaReg: {
      type: Date,
      "default": Date.now
    },
    UsuarioReg: {
      type: String
    },
    FechaUltMod: {
      type: Date,
      "default": Date.now
    },
    UsuarioMod: {
      type: String
    },
    Activo: {
      type: String,
      "default": "S"
    },
    Borrado: {
      type: String,
      "default": "N"
    }
  }
});
var _default = exports["default"] = mongoose.model("cat_prod_serv", prodservSchema, "cat_prod_serv");