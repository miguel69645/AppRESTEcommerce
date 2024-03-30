import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
// Import Routes
import routeAPI from './api/v1/routes/index';


//CEAJ: imports Swagger
//CEAJ: imports Routes
//CEAJ: imports Middlewares
//CEAJ: Config para variables de entorno
import config from './config/config';
//CEAJ: Declaramos la variable app igualandola a express
const app = express();

//CEAJ: Establece la conexion a la BD
import { mongoose } from './config/database.config';

//CEAJ: Settings
app.set('port', config.PORT);
//CEAJ: Middlewares generales
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//CEAJ: Routes
const api = config.API_URL;
app.get(`${api}`, (req,res)=>{
    res.send(
        `<h1>RESTful running in root</h1> <p> eCommerce: <b>${api}/api-docs</b> for more information.</p>`
    );
})
app.get('/CEAJ', (req,res)=>{
    res.send(
        `<h1>RESTful corriendo en CEAJ</h1> <p> eCommerce: <b>${api}/api-docs</b> for more information.</p>`
    );
})

// Swagger Docs
// Middleware para el manejo de errores


// Routes
routeAPI(app);

// Export App
export default app;