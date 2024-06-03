"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var ListasController = _interopRequireWildcard(require("../controllers/listas.controller"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var router = (0, _express.Router)();

// GET
router.get("/", ListasController.getListasList);
router.get("/:id", ListasController.getLista);
router.get("/:id/precios", ListasController.getAllPrecios);
router.get("/:id/roles", ListasController.getAllRoles);
router.get("/:id/roles/:condicion/condicion_det", ListasController.getCondicionDet);
router.get("/:id/roles/:condicion/condicion_det/:IdTipoCondicionOK/valor", ListasController.getValorByIdTipoCondicionOK);
router.get("/:id/promociones", ListasController.getAllPromotions);
router.get("/:id/promociones/:promoId/condiciones", ListasController.getCondicionesByPromo);
router.get("/:id/promociones/:IdTipoPromoOK/condiciones/:IdEtiquetaOK/valores", ListasController.getValoresByIdEtiquetaOK);
router.get("/:id/negocios", ListasController.getAllNegocios);
// POST
router.post("/", ListasController.createLista);
router.post("/:id/precios", ListasController.addPriceToLista);
router.post("/:id/roles", ListasController.addRoleToLista);
router.post("/:id/roles/:condicion/condicion_det", ListasController.addCondicionDetToRole);
router.post("/:id/promociones", ListasController.addPromotionToLista);
router.post("/:id/promociones/:IdTipoPromoOK/condiciones", ListasController.addCondicionToPromo);
router.post("/:id/promociones/:IdTipoPromoOK/condiciones/:IdEtiquetaOK/valores", ListasController.addValorToCondicion);
router.post("/:id/negocios", ListasController.addBusinessToLista);
// PUT
router.put("/:id", ListasController.updateLista);
router.put("/:id/precios/:priceId", ListasController.updatePriceInLista);
router.put("/:id/roles/:roleId", ListasController.updateRoleInLista);
router.put("/:id/roles/:condicion/condicion_det/:condicionDetId", ListasController.updateCondicionDetInRole);
router.put("/:id/promociones/:promoId", ListasController.updatePromotionInLista);
router.put("/:id/promociones/:IdTipoPromoOK/condiciones/:condicionId", ListasController.updateCondicionInPromo);
router.put("/:id/promociones/:IdTipoPromoOK/condiciones/:IdEtiquetaOK/valores/:valorId", ListasController.updateValorInCondicion);
router.put("/:id/negocios/:businessId", ListasController.updateBusinessInLista);
// DELETE
router["delete"]("/:id", ListasController.deleteLista);
router["delete"]("/:id/precios/:priceId", ListasController.deletePriceInLista);
router["delete"]("/:id/roles/:roleId", ListasController.deleteRoleInLista);
router["delete"]("/:id/roles/:condicion/condicion_det/:condicionDetId", ListasController.deleteCondicionDetInRole);
router["delete"]("/:id/promociones/:promoId", ListasController.deletePromotionInLista);
router["delete"]("/:id/promociones/:IdTipoPromoOK/condiciones/:condicionId", ListasController.deleteCondicionInPromo);
router["delete"]("/:id/promociones/:IdTipoPromoOK/condiciones/:IdEtiquetaOK/valores/:valorId", ListasController.deleteValorInCondicion);
router["delete"]("/:id/negocios/:businessId", ListasController.deleteBusinessInLista);
var _default = exports["default"] = router;