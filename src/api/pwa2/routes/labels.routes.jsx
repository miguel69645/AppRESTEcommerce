//Education
import { Router } from "express";
import * as labelsController from "../controllers/labels.controller";

const router = Router();

// GET
router.get("/", labelsController.getLabelsList);

export default router;
