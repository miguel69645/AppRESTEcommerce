import { Router } from "express";
import * as SeriesController from "../controllers/series.controller";

const router = Router();

// GET
router.get("/", SeriesController.getSeriesList);
router.get("/:id", SeriesController.getSerie);
// POST
router.post("/", SeriesController.postSerie);
// PUT
router.put("/:id", SeriesController.putSerieItem);
// DELETE
router.delete("/:id", SeriesController.deleteSerie);

export default router;
