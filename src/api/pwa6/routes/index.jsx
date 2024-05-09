import { Router } from "express";
import config from "../../../config/config";
import movimientosRoutes from "./movimientos.routes";

const routerAPI = (app) => {
    const router = Router();
    const api = config.API_URL;
    app.use(api, router);
    // Routes
    router.use("/pwa6/movimientos", movimientosRoutes);
    // Return Router
    return router;
};

module.exports = routerAPI;
