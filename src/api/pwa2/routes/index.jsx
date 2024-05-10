//Education
import { Router } from "express";
import config from "../../../config/config";
// Import Routes
import labelsRoutes from "./labels.routes";
const routerAPI = (app) => {
  const router = Router();
  const api = config.API_URL;
  app.use(api, router);
  // Routes
  router.use("/pwa2/labels", labelsRoutes);
  // Return Router
  return router;
};
module.exports = routerAPI;
