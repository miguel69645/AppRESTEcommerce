import * as mongoose from "mongoose";

// Etiquetas

const promoSchema = new mongoose.Schema({
  IdTipoPromoOK: { type: String, required: true },
  DesPromo: { type: String, required: true },
});

export default mongoose.model("cat_promo", promoSchema, "cat_promo");
