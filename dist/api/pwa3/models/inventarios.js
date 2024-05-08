"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
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
    ControlaSerie: {
      type: String,
      required: true
    },
    almacenes: [{
      IdAlmacenOK: {
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
      info_ad: [{
        IdEtiquetaOK: {
          type: String,
          required: false
        },
        IdEtiqueta: {
          type: String,
          required: true
        },
        Etiqueta: {
          type: String,
          required: true
        },
        Valor: {
          type: String,
          required: true
        },
        IdTipoSeccionOK: {
          type: String,
          required: true
        },
        Secuencia: {
          type: Number,
          required: true
        },
        detail_row: {
          Activo: {
            type: String,
            required: true
          },
          Borrado: {
            type: String,
            required: true
          },
          FechaReg: {
            type: Date,
            required: false
          },
          UsuarioReg: {
            type: String,
            required: false
          }
        }
      }],
      movtos: [{
        CantidadMovto: {
          type: Number,
          required: true
        },
        CantidadAnt: {
          type: Number,
          required: true
        },
        CantidadAct: {
          type: Number,
          required: true
        },
        IdTipoMovtoOK: {
          type: String,
          required: true
        },
        IdClaseMovtoOK: {
          type: String,
          required: true
        },
        Referencia: {
          type: String,
          required: true
        },
        detail_row: {
          Activo: {
            type: String,
            required: true
          },
          Borrado: {
            type: String,
            required: true
          },
          FechaReg: {
            type: Date,
            required: false
          },
          UsuarioReg: {
            type: String,
            required: false
          }
        }
      }],
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
          },
          detail_row: {
            Activo: {
              type: String,
              required: true
            },
            Borrado: {
              type: String,
              required: true
            },
            FechaReg: {
              type: Date,
              required: false
            },
            UsuarioReg: {
              type: String,
              required: false
            }
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
          },
          detail_row: {
            Activo: {
              type: String,
              required: true
            },
            Borrado: {
              type: String,
              required: true
            },
            FechaReg: {
              type: Date,
              required: false
            },
            UsuarioReg: {
              type: String,
              required: false
            }
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
          },
          detail_row: {
            Activo: {
              type: String,
              required: true
            },
            Borrado: {
              type: String,
              required: true
            },
            FechaReg: {
              type: Date,
              required: false
            },
            UsuarioReg: {
              type: String,
              required: false
            }
          }
        }],
        detail_row: {
          Activo: {
            type: String,
            required: true
          },
          Borrado: {
            type: String,
            required: true
          },
          FechaReg: {
            type: Date,
            required: false
          },
          UsuarioReg: {
            type: String,
            required: false
          }
        }
      }],
      detail_row: {
        Activo: {
          type: String,
          required: true
        },
        Borrado: {
          type: String,
          required: true
        },
        FechaReg: {
          type: Date,
          required: false
        },
        UsuarioReg: {
          type: String,
          required: false
        }
      }
    }],
    detail_row: {
      Activo: {
        type: String,
        required: true
      },
      Borrado: {
        type: String,
        required: true
      },
      FechaReg: {
        type: Date,
        required: false
      },
      UsuarioReg: {
        type: String,
        required: false
      }
    }
  }],
  detail_row: {
    Activo: {
      type: String,
      required: true
    },
    Borrado: {
      type: String,
      required: true
    },
    FechaReg: {
      type: Date,
      required: false
    },
    UsuarioReg: {
      type: String,
      required: false
    }
  }
});
var _default = exports["default"] = mongoose.model("cat_inventarios", inventariosSchema, "cat_inventarios");