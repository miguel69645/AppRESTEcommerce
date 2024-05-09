import { Router } from "express";
import * as NegociosController from "../controllers/negocios.controller";

const router = Router();

// GET
router.get("/", NegociosController.getNegociosList);
router.get("/:id", NegociosController.getNegocio);
// POST
router.post("/", NegociosController.postNegocio);
// PUT
router.put("/:id", NegociosController.putNegocioItem);
// DELETE
router.delete("/:id", NegociosController.deleteNegocio);

export default router;
