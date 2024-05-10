//Education
import { Router } from "express";
import config from "../../../config/config";
// Import Routes
import institutosRoutes from "./institutos.routes";
const routerAPI = (app) => {
  const router = Router();
  const api = config.API_URL;
  app.use(api, router);
  // Routes
  router.use("/pwa/institutos", institutosRoutes);
  // Return Router
  return router;
};
module.exports = routerAPI;
