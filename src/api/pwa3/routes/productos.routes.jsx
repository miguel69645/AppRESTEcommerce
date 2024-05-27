//Productos
import { Router } from "express";
import * as InventariosController from "../controllers/inventarios.controller";

const router = Router();

// GET
router.get("/", InventariosController.getAllProdserv);
router.get("/presentations", InventariosController.getProductPresentations);

export default router;
