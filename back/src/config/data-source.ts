import { DataSource } from "typeorm";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "./envs";
import User from "../entities/User";
import Turno from "../entities/Turno";
import Credentials from "../entities/Credentials";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USER,   // Consultar con Ariel
    password: DB_PASSWORD,
    database:  DB_NAME,
    synchronize: false,
    dropSchema: false,
    logging: ["error"],
    entities: [User, Turno, Credentials],
    subscribers: [],
    migrations: [],
})