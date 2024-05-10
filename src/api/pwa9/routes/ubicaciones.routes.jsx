import { Router } from "express";
import * as CatUbicacionesController from "../controllers/ubicaciones.controllers";

const router = Router();

// GET
router.get("/", CatUbicacionesController.getCatUbicacionesList);
router.get("/:id", CatUbicacionesController.getCatUbicacion);
// POST
router.post("/", CatUbicacionesController.postCatUbicacion);
// PUT
router.put("/:id", CatUbicacionesController.putCatUbicacionItem);
// DELETE
router.delete("/:id", CatUbicacionesController.deleteCatUbicacion);

export default router;
