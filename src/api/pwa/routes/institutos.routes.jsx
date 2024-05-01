//Education
import { Router } from "express";
import * as InstitutosController from "../controllers/institutos.controller";

const router = Router();

// GET
router.get("/", InstitutosController.getInstitutosList);
router.get("/:id", InstitutosController.getInstituto);
// POST
router.post("/", InstitutosController.postInstituto);
// PUT
router.put("/:id", InstitutosController.putInstitutoItem);
// DELETE
router.delete("/:id", InstitutosController.deleteInstituto);

export default router;
