import * as mongoose from "mongoose";

const almacenesSchema = new mongoose.Schema({
  IdAlmacenOK: { type: String, required: true },
  Principal: { type: String, required: true },
  CantidadActual: { type: Number, required: true },
  CantidadDisponible: { type: Number, required: true },
  CantidadApartada: { type: Number, required: true },
  CantidadTransito: { type: Number, required: true },
  CantidadMerma: { type: Number, required: true },
  StockMaximo: { type: Number, required: true },
  StockMinimo: { type: Number, required: true },
});

export default mongoose.model(
  "cat_almacenes",
  almacenesSchema,
  "cat_almacenes"
);
