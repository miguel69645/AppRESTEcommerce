import * as mongoose from "mongoose";

// Dependiendo de cómo estén definidos estatusSchema y ubicacionesSchema, necesitas incluir sus definiciones.
const estatusSchema = new mongoose.Schema({
    // Define los campos necesarios para estatusSchema
});

const ubicacionesSchema = new mongoose.Schema({
    // Define los campos necesarios para ubicacionesSchema
});

const detailRowSchema = new mongoose.Schema({
    // Define la estructura de 'detailRowSchema' según necesites
});

const seriesSchema = new mongoose.Schema({
    Serie: { type: String, required: true },
    Placa: { type: String, required: true },
    Observacion: { type: String, required: false }
});

export default mongoose.model("cat_series", seriesSchema, "cat_series");
