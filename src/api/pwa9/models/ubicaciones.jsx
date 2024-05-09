import * as mongoose from "mongoose";

const ubicacionesSchema = new mongoose.Schema({
  Ubicacion: { type: String, required: true },
  Actual: { type: String, required: true },
  IdAlmacenOK: { type: String, required: false },
});

export default mongoose.model(
  "cat_ubicaciones",
  ubicacionesSchema,
  "cat_ubicaciones"
);
