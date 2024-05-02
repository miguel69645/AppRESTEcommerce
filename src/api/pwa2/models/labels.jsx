import * as mongoose from "mongoose";

// Etiquetas

const etiquetasSchema = new mongoose.Schema({
  IdEtiquetaOK: { type: String, required: true },
  NombreEtiqueta: { type: String, required: true },
  Descripcion: { type: String, required: false },
  Alias: { type: String, required: false },
});

export default mongoose.model(
  "cat_labels",
  etiquetasSchema,
  "cat_labels"
);
