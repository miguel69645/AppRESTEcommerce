//Education
import { Router } from "express";
import config from "../../../config/config";
// Import Routes
import condicionesRoutes from "./institutos.routes";
const routerAPI = (app) => {
  const router = Router();
  const api = config.API_URL;
  app.use(api, router);
  // Routes
  router.use("/pwa/condiciones", condicionesRoutes);
  // Return Router
  return router;
};
module.exports = routerAPI;
