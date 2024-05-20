//Inventarios
import { Router } from "express";
import * as InventariosController from "../controllers/inventarios.controller";

const router = Router();

// GET
router.get("/", InventariosController.getInventariosList);
router.get("/:id", InventariosController.getInventario);
router.get(
  "/:IdInstitutoOK/:IdProdServOK/:IdPresentaOK",
  InventariosController.getNegociosByParams
);
router.get(
  "/:IdInstitutoOK/:IdProdServOK/:IdPresentaOK/:IdNegocioOK",
  InventariosController.getAlmacenesByParams
);
router.get(
  "/:IdInstitutoOK/:IdProdServOK/:IdPresentaOK/:IdNegocioOK/:IdAlmacenOK",
  InventariosController.getAlmacenByParams
);
// POST
router.post("/", InventariosController.postInventario);
router.post(
  "/:IdInstitutoOK/:IdProdServOK/:IdPresentaOK",
  InventariosController.postNegocioController
);
// PUT
router.put("/:id", InventariosController.putInventarioItem);
router.put(
  "/:IdInstitutoOK/:IdProdServOK/:IdPresentaOK/:IdNegocioOK",
  InventariosController.putNegocioByParamsController
);
// DELETE
router.delete("/:id", InventariosController.deleteInventario);
router.delete(
  "/:IdInstitutoOK/:IdProdServOK/:IdPresentaOK/:IdNegocioOK",
  InventariosController.deleteNegocioByParamsController
);

export default router;
