//Inventarios
import { Router } from "express";
import config from "../../../config/config";
// Import Routes
import ubicacionesRoutes from "./ubicaciones.routes";
const routerAPI = (app) => {
  const router = Router();
  const api = config.API_URL;
  app.use(api, router);
  // Routes
  router.use("/pwa9/ubicaciones", ubicacionesRoutes);
  // Return Router
  return router;
};
module.exports = routerAPI;
