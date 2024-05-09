import * as mongoose from "mongoose";

// Movimientos

const detailRowSchema = new mongoose.Schema({
    // Define la estructura de 'detailRowSchema' según necesites
});

const movimientosSchema = new mongoose.Schema({
    CantidadMovto: { type: Number, required: true },
    CantidadAnt: { type: Number, required: true },
    CantidadAct: { type: Number, required: true },
    IdTipoMovtoOK: { type: String, required: true },
    IdClaseMovtoOK: { type: String, required: true },
    Referencia: { type: String, required: true },
    detail_row: { type: detailRowSchema, required: true }
});

export default mongoose.model("cat_movimientos", movimientosSchema, "cat_movimientos");
