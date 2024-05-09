import { Router } from "express";
import * as seriesController from "../controllers/series.controller";

const router = Router();

// GET
router.get("/", seriesController.getSeriesList);

export default router;
