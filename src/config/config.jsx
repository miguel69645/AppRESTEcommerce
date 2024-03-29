import dotenv from 'dotenv';
dotenv.config();
export default {
    HOST: process.env.HOST || 'NO ENCONTRE VARIABE DE ENTORNO',
    PORT: process.env.PORT || 'NO ENCONTRE PORT',
    API_URL: process.env.API_URL || '/api/v1',
    CONNECTION_STRING: process.env.CONNECTION_STRING || 'mongodb://127.0.0.1:27017/?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000',
    DATABASE: process.env.DATABASE || 'db_commerce', 
    DB_USER: process.env.DB_USER || 'AdminUser', 
    DB_PASSWORD: process.env.DB_PASSWORD || 'florecitarockera',
}