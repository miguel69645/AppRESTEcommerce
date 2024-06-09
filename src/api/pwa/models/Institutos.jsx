import * as mongoose from "mongoose";

//Education

const condicionSchema = new mongoose.Schema({
  IdTipoCondicionOK: { type: String, required: true },
  IdTipoOperadorOK: { type: String, required: true },
  DesCondicion: { type: String, required: true },
  DesOperador: { type: String, required: false },
});

//Education

export default mongoose.model(
  "cat_condicion",
  condicionSchema,
  "cat_condicion"
);
