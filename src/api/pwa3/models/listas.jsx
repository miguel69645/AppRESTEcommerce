import * as mongoose from "mongoose";

const listasSchema = new mongoose.Schema({
  IdInstitutoOK: { type: String, required: true },
  IdListaOK: { type: String, required: true },
  IdListaBK: { type: String, required: true },
  DesLista: { type: String, required: true },
  FechaExpiraIni: { type: Date, required: true },
  FechaExpiraFin: { type: Date, required: true },
  IdTipoListaOK: { type: String, required: true },
  IdTipoGeneraListaOK: { type: String, required: true },
  IdListaBaseOK: { type: String, required: true },
  IdTipoFormulaOK: { type: String, required: true },
  precios: [
    {
      IdProdServOK: { type: String },
      IdPresentaOK: { type: String },
      PresentacionDelProducto: { type: String },
      IdTipoFormulaOK: { type: String },
      Formula: { type: String },
      Precio: { type: Number },
    },
  ],
  roles: [
    {
      DesCondicion: { type: String, required: true },
      FechaExpiraIni: { type: Date, required: true },
      FechaExpiraFin: { type: Date, required: true },
      Condicion: { type: String, required: true },
      condicion_det: [
        {
          IdTipoCondicionOK: { type: String, required: true },
          IdTipoOperadorOK: { type: String, required: true },
          Valor: { type: String, required: true },
          Secuecia: { type: Number, required: true },
        },
      ],
    },
  ],
  promociones: [
    {
      IdTipoPromoOK: { type: String, required: true },
      DesPromo: { type: String, required: true },
      Formula: { type: String, required: true },
      FechaExpiraIni: { type: Date, required: true },
      FechaExpiraFin: { type: Date, required: true },
      condiciones: [
        {
          IdEtiquetaOK: { type: String, required: true },
          Etiqueta: { type: String, required: true },
          Valores: [
            {
              valor: { type: String, required: true },
              IdComparaValor: { type: String, required: true },
            },
          ],
          IdOpComparaValores: { type: String, required: true },
          IdOpLogicoEtiqueta: { type: String, required: true },
        },
      ],
    },
  ],
  negocios: [
    {
      IdNegocioOK: { type: String, required: true },
    },
  ],
});

export default mongoose.model("listas", listasSchema, "listas");