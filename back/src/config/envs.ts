import dotenv from 'dotenv';
import path from 'path';


const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath });


dotenv.config();

export const PORT = process.env.PORT || 3005;
export const DB_HOST = process.env.DB_HOST;
export const DB_PORT = process.env.DB_PORT;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_NAME = process.env.DB_NAME;