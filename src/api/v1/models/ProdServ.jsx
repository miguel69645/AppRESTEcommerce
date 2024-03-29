import * as mongoose from "mongoose";

const prodservSchema = new mongoose.Schema({
  IdProdServPK: { type: Number, required: true },
  IdProdServOK: { type: String },
  IdProdServBK: { type: String },
  IdProdServMaOK: { type: String },
  IdProdServMaBK: { type: String },
  DesProdServ: { type: String },
  IdUMedidaOK: { type: String },
  IdUMedidaBK: { type: String },
  cat_prod_serv_estatus: [
    {
      IdTipoGenEstatusOK: { type: String },
      IdGenEstatusOK: { type: String },
      TipoEstatus: { type: String },
      Actual: { type: String },
      Observacion: { type: String },
      detail_row: {
        FechaReg: { type: Date, default: Date.now },
        UsuarioReg: { type: String },
      },
      _id: false,
    },
  ],
  cat_prod_serv_paquetes: [
    {
      IdProdServOK: { type: String },
      IdProdServBK: { type: String },
      DesProdServ: { type: String },
      Cantidad: { type: Number },
      IdUMedidaOK: { type: String },
      IdUMedidaBK: { type: String },
      detail_row: {
        FechaReg: { type: Date, default: Date.now },
        UsuarioReg: { type: String },
        FechaUltMod: { type: Date, default: Date.now },
        UsuarioMod: { type: String },
        Activo: { type: String, default: "S" },
        Borrado: { type: String, default: "N" },
      },
    },
  ],
  cat_prod_serv_archivos: [
    {
      DesArchivo: { type: String },
      RutaArchivo: { type: String },
      IdTipoGenArchivoOK: { type: String },
      IdGenArchivoOK: { type: String },
      TipoArchivo: { type: String },
      IdTipoGenSeccionOK: { type: String },
      IdGenSeccionOK: { type: String },
      TipoSeccion: { type: String },
      Secuencia: { type: Number },
      Principal: { type: String },
      detail_row: {
        FechaReg: { type: Date, default: Date.now },
        UsuarioReg: { type: String },
        FechaUltMod: { type: Date, default: Date.now },
        UsuarioMod: { type: String },
        Activo: { type: String, default: "S" },
        Borrado: { type: String, default: "N" },
      },
      _id: false,
    },
  ],
  cat_prod_serv_info_adicional: [
    {
      IdEtiqueta: { type: String },
      Etiqueta: { type: String },
      Valor: { type: String },
      IdTipoGenSeccionOK: { type: String },
      IdGenSeccionOK: { type: String },
      TipoSeccion: { type: String },
      Secuencia: { type: Number },
      detail_row: {
        FechaReg: { type: Date, default: Date.now },
        UsuarioReg: { type: String },
        FechaUltMod: { type: Date, default: Date.now },
        UsuarioMod: { type: String },
        Activo: { type: String, default: "S" },
        Borrado: { type: String, default: "N" },
      },
    },
  ],
  detail_row: {
    FechaReg: { type: Date, default: Date.now },
    UsuarioReg: { type: String },
    FechaUltMod: { type: Date, default: Date.now },
    UsuarioMod: { type: String },
    Activo: { type: String, default: "S" },
    Borrado: { type: String, default: "N" },
  },
});

export default mongoose.model("cat_prod_serv", prodservSchema, "cat_prod_serv");
