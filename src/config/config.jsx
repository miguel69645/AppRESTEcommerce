import dotenv from 'dotenv';
dotenv.config();
export default {
    HOST: process.env.HOST || 'NO ENCONTRE VARIABE DE ENTORNO',
    PORT: process.env.PORT || 'NO ENCONTRE PORT',
    API_URL: process.env.API_URL || '/api',
    // CONNECTION_STRING: process.env.CONNECTION_STRING || 'mongodb://localhost:27017/?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000',
    CONNECTION_STRING: process.env.CONNECTION_STRING || 'mongodb+srv://miguel:Tec12345678@innedutec.rsxjfcd.mongodb.net/',
    DATABASE: process.env.DATABASE || 'db_ecommerce', 
    DB_USER: process.env.DB_USER || 'AdminUser', 
    DB_PASSWORD: process.env.DB_PASSWORD || 'florecitarockera',
}