//Inventarios
import { Router } from "express";
import config from "../../../config/config";
// Import Routes
import inventariosRoutes from "./inventarios.routes";
const routerAPI = (app) => {
  const router = Router();
  const api = config.API_URL;
  app.use(api, router);
  // Routes
  router.use("/pwa3/inventarios", inventariosRoutes);
  // Return Router
  return router;
};
module.exports = routerAPI;
