import { Router } from "express";
import * as MovimientosController from "../controllers/movimientos.controller";

const router = Router();

// GET
router.get("/", MovimientosController.getMovimientosList);
router.get("/:id", MovimientosController.getMovimiento);
// POST
router.post("/", MovimientosController.postMovimiento);
// PUT
router.put("/:id", MovimientosController.putMovimientoItem);
// DELETE
router.delete("/:id", MovimientosController.deleteMovimiento);

export default router;
