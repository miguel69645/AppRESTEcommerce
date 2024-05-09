import { Router } from "express";
import config from "../../../config/config";
import negociosRoutes from "./negocios.routes";

const routerAPI = (app) => {
    const router = Router();
    const api = config.API_URL;
    app.use(api, router);
    // Routes
    router.use("/pwa4/negocios", negociosRoutes);
    // Return Router
    return router;
};

module.exports = routerAPI;
