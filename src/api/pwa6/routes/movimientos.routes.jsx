import { Router } from "express";
import * as movimientosController from "../controllers/movimientos.controller";

const router = Router();

// GET
router.get("/", movimientosController.getMovimientosList);

export default router;
