import { Router } from "express";
import * as AlmacenesController from "../controllers/almacen.controllers";

const router = Router();

// GET
router.get("/", AlmacenesController.getAlmacenesList);
router.get("/:id", AlmacenesController.getAlmacen);
// POST
router.post("/", AlmacenesController.postAlmacen);
// PUT
router.put("/:id", AlmacenesController.putAlmacenItem);
// DELETE
router.delete("/:id", AlmacenesController.deleteAlmacen);

export default router;
