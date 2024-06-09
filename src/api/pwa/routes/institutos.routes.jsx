//Education
import { Router } from "express";
import * as CondicionesController from "../controllers/institutos.controller";

const router = Router();

// GET
router.get("/", CondicionesController.getCondicionesList);
// router.get("/:id", InstitutosController.getInstituto);
// // POST
// router.post("/", InstitutosController.postInstituto);
// // PUT
// router.put("/:id", InstitutosController.putInstitutoItem);
// // DELETE
// router.delete("/:id", InstitutosController.deleteInstituto);

export default router;
