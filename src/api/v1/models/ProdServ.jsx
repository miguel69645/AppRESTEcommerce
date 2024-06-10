import * as mongoose from "mongoose";

const condicionesSchema = new mongoose.Schema({
  IdEtiquetaOK: { type: String, required: true},
  DesEtiqueta: { type: String, required: true },
  IdComparaValorOK: { type: String, required: true },
  DesComparaValor: { type: String, required: true },
  IdOpComparaValoresOK: { type: String, required: true },
  DesOpComparaValores: { type: String, required: true },
  IdOpLogicoEtiquetaOK: { type: String, required: true },
  DesOpLogicoEtiqueta: { type: String, required: true },
});

export default mongoose.model("cat_condiciones", condicionesSchema, "cat_condiciones");
