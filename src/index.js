import app from './app';
import config from './config/config';
app.listen(app.get('port'));
console.log(
  `Servidor corriendo en: http://${config.HOST}:${app.get('port')}${
    config.API_URL
  }`
);