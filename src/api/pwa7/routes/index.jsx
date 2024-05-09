import { Router } from "express";
import config from "../../../config/config";
import seriesRoutes from "./series.routes";

const routerAPI = (app) => {
    const router = Router();
    const api = config.API_URL;
    app.use(api, router);
    // Routes
    router.use("/pwa7/series", seriesRoutes);
    // Return Router
    return router;
};

module.exports = routerAPI;
