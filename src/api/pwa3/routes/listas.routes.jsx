import { Router } from "express";
import * as ListasController from "../controllers/listas.controller";

const router = Router();

// GET
router.get("/", ListasController.getListasList);
router.get("/:id", ListasController.getLista);
// POST
router.post("/", ListasController.postLista);
// PUT
router.put("/:id", ListasController.putListaItem);
// DELETE
router.delete("/:id", ListasController.deleteLista);

export default router;
