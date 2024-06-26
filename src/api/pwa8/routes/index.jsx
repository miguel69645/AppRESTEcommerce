//Inventarios
import { Router } from "express";
import config from "../../../config/config";
// Import Routes
import estatusRoutes from "./estatus.routes";
const routerAPI = (app) => {
  const router = Router();
  const api = config.API_URL;
  app.use(api, router);
  // Routes
  router.use("/pwa8/estatus", estatusRoutes);
  // Return Router
  return router;
};
module.exports = routerAPI;
