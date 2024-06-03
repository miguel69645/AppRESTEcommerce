import { Router } from "express";
import * as ListasController from "../controllers/listas.controller";

const router = Router();

// GET
router.get("/", ListasController.getListasList);
router.get("/:id", ListasController.getLista);
router.get("/:id/precios", ListasController.getAllPrecios);
router.get("/:id/roles", ListasController.getAllRoles);
router.get(
  "/:id/roles/:condicion/condicion_det",
  ListasController.getCondicionDet
);
router.get(
  "/:id/roles/:condicion/condicion_det/:IdTipoCondicionOK/valor",
  ListasController.getValorByIdTipoCondicionOK
);
router.get("/:id/promociones", ListasController.getAllPromotions);
router.get(
  "/:id/promociones/:promoId/condiciones",
  ListasController.getCondicionesByPromo
);
router.get(
  "/:id/promociones/:IdTipoPromoOK/condiciones/:IdEtiquetaOK/valores",
  ListasController.getValoresByIdEtiquetaOK
);
router.get("/:id/negocios", ListasController.getAllNegocios);
// POST
router.post("/", ListasController.createLista);
router.post("/:id/precios", ListasController.addPriceToLista);
router.post("/:id/roles", ListasController.addRoleToLista);
router.post(
  "/:id/roles/:condicion/condicion_det",
  ListasController.addCondicionDetToRole
);
router.post("/:id/promociones", ListasController.addPromotionToLista);
router.post(
  "/:id/promociones/:IdTipoPromoOK/condiciones",
  ListasController.addCondicionToPromo
);
router.post(
  "/:id/promociones/:IdTipoPromoOK/condiciones/:IdEtiquetaOK/valores",
  ListasController.addValorToCondicion
);
router.post("/:id/negocios", ListasController.addBusinessToLista);
// PUT
router.put("/:id", ListasController.updateLista);
router.put("/:id/precios/:priceId", ListasController.updatePriceInLista);
router.put("/:id/roles/:roleId", ListasController.updateRoleInLista);
router.put(
  "/:id/roles/:condicion/condicion_det/:condicionDetId",
  ListasController.updateCondicionDetInRole
);
router.put(
  "/:id/promociones/:promoId",
  ListasController.updatePromotionInLista
);
router.put(
  "/:id/promociones/:IdTipoPromoOK/condiciones/:condicionId",
  ListasController.updateCondicionInPromo
);
router.put(
  "/:id/promociones/:IdTipoPromoOK/condiciones/:IdEtiquetaOK/valores/:valorId",
  ListasController.updateValorInCondicion
);
router.put("/:id/negocios/:businessId", ListasController.updateBusinessInLista);
// DELETE
router.delete("/:id", ListasController.deleteLista);
router.delete("/:id/precios/:priceId", ListasController.deletePriceInLista);
router.delete("/:id/roles/:roleId", ListasController.deleteRoleInLista);
router.delete(
  "/:id/roles/:condicion/condicion_det/:condicionDetId",
  ListasController.deleteCondicionDetInRole
);
router.delete(
  "/:id/promociones/:promoId",
  ListasController.deletePromotionInLista
);
router.delete(
  "/:id/promociones/:IdTipoPromoOK/condiciones/:condicionId",
  ListasController.deleteCondicionInPromo
);
router.delete(
  "/:id/promociones/:IdTipoPromoOK/condiciones/:IdEtiquetaOK/valores/:valorId",
  ListasController.deleteValorInCondicion
);
router.delete(
  "/:id/negocios/:businessId",
  ListasController.deleteBusinessInLista
);

export default router;
