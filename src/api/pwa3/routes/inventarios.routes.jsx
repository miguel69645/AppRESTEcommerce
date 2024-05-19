//Inventarios
import { Router } from "express";
import * as InventariosController from "../controllers/inventarios.controller";

const router = Router();

// GET
router.get("/", InventariosController.getInventariosList);
router.get("/:id", InventariosController.getInventario);
router.get(
  "/:IdInstitutoOK/:IdProdServOK/:IdPresentaOK",
  InventariosController.getInventarioByParams
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
// PUT
router.put("/:id", InventariosController.putInventarioItem);
// DELETE
router.delete("/:id", InventariosController.deleteInventario);

export default router;
