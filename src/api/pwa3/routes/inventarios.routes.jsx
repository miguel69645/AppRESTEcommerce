//Inventarios
import { Router } from "express";
import * as InventariosController from "../controllers/inventarios.controller";

const router = Router();

// GET
router.get("/", InventariosController.getInventariosList);
router.get("/description", InventariosController.getConcatenatedDescription); 
router.get("/:id", InventariosController.getInventario);
router.get("/:id/:selectedBusinessId", InventariosController.getAllStores); 
router.get("/:id/:selectedBusinessId/:selectedStoresId", InventariosController.getAllSeries); 
// POST
router.post("/", InventariosController.postInventario);
// PUT
router.put("/:id", InventariosController.putInventarioItem);
// DELETE
router.delete("/:id", InventariosController.deleteInventario);

export default router;
