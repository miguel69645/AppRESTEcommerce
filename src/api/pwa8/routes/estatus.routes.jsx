import { Router } from "express";
import * as EstatusController from "../controllers/estatus.controllers";

const router = Router();

// GET
router.get("/", EstatusController.getEstatusList);
router.get("/:id", EstatusController.getEstatus);
// POST
router.post("/", EstatusController.postEstatus);
// PUT
router.put("/:id", EstatusController.putEstatusItem);
// DELETE
router.delete("/:id", EstatusController.deleteEstatus);

export default router;
