import * as mongoose from "mongoose";

// Etiquetas

const valorSchema = new mongoose.Schema({
  IdValorOK: { type: String, required: true },
  Valor: { type: String, required: true },
});

const etiquetasSchema = new mongoose.Schema({
  IdEtiquetaOK: { type: String, required: true },
  NombreEtiqueta: { type: String, required: true },
  Descripcion: { type: String, required: false },
  Alias: { type: String, required: false },
  valores: { type: [valorSchema], required: false },
});

export default mongoose.model("cat_labels", etiquetasSchema, "cat_labels");
