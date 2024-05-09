import * as mongoose from "mongoose";

const estatusSchema = new mongoose.Schema({
  IdTipoEstatusOK: { type: String, required: true },
  Actual: { type: String, required: true },
  Observacion: { type: String, required: false },
});

export default mongoose.model("cat_estatus", estatusSchema, "cat_estatus");
