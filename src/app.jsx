import express from "express";
//FIC: Establece la conexion a la BD
import { mongoose } from "./config/database.config";
import morgan from "morgan";
import cors from "cors";
//FIC: imports Swagger
//FIC: imports Routes
//FIC: imports Middlewares
//FIC: Config para variables de entorno
import config from "./config/config";
// Import Routes
// import routeAPICOM from "./api/v1/routes/index";
import routeAPIPWA from "./api/pwa/routes/index";
import routeAPIPWA2 from "./api/pwa2/routes/index";
import routeAPIPWA3 from "./api/pwa3/routes/index";
import routeAPIPWA4 from "./api/pwa4/routes/index";
// import routeAPIPWA5 from "./api/pwa5/routes/index";
// import routeAPIPWA6 from "./api/pwa6/routes/index";
// import routeAPIPWA7 from "./api/pwa7/routes/index";
// import routeAPIPWA8 from "./api/pwa8/routes/index";
// import routeAPIPWA9 from "./api/pwa9/routes/index";
//FIC: Declaramos la variable app igualandola a express
const app = express();
//FIC: Settings
app.set("port", config.PORT);
//FIC: Middlewares generales
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("dist"));
app.use(express.urlencoded({ extended: false }));
//FIC: Routes
const api = config.API_URL;
app.get(`${api}`, (req, res) => {
  res.send(
    `<h1>RESTful running in root</h1> <p> eCommerce: <b>${api}/api-docs</b> for more information.</p>`
  );
});
app.get("/DrFIC", (req, res) => {
  res.send(
    `<h1>RESTful running in DrFIC</h1> <p> eCommerce: <b>${api}/api-docs</b> for more information.</p>`
  );
});
// Routes
// routeAPICOM(app);
routeAPIPWA(app);
routeAPIPWA2(app);
routeAPIPWA3(app);
routeAPIPWA4(app);
// routeAPIPWA5(app);
// routeAPIPWA6(app);
// routeAPIPWA7(app);
// routeAPIPWA8(app);
// routeAPIPWA9(app);
// Swagger Docs
// Middleware para el manejo de errores
// Export App
export default app;
