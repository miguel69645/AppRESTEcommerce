import { Router } from "express";
import * as negociosController from "../controllers/negocios.controller";

const router = Router();

// GET
router.get("/", negociosController.getNegociosList);

export default router;
