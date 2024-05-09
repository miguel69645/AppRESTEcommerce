import * as mongoose from "mongoose";

// Negocios

const almacenesSchema = new mongoose.Schema({
    // Define la estructura de 'almacenesSchema' según necesites
});

const detailRowSchema = new mongoose.Schema({
    // Define la estructura de 'detailRowSchema' según necesites
});

const negocioSchema = new mongoose.Schema({
    IdNegocioOK: { type: String, required: true },
    ControlaSerie: { type: String, required: true },
    almacenes: [almacenesSchema],
    detail_row: { type: detailRowSchema, required: true }
});

export default mongoose.model("cat_negocios", negocioSchema, "cat_negocios");
