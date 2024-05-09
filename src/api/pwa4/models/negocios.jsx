import * as mongoose from "mongoose";

// Negocios


const negocioSchema = new mongoose.Schema({
    IdNegocioOK: { type: String, required: true },
    ControlaSerie: { type: String, required: true },
});

export default mongoose.model("cat_negocios", negocioSchema, "cat_negocios");
