import { DataSource } from "typeorm";
import { DB_URL, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER, DB_PASSWORD_DEPLOY, DB_NAME_DEPLOY, DB_USERNAME_DEPLOY, DB_HOST_DEPLOY, DB_PORT_DEPLOY,  } from "./envs";
import User from "../entities/User";
import Turno from "../entities/Turno";
import Credentials from "../entities/Credentials";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST_DEPLOY,
    port: Number(DB_PORT_DEPLOY),
    username: DB_USERNAME_DEPLOY,
    password: DB_PASSWORD_DEPLOY,
    database: DB_NAME_DEPLOY,
    synchronize: false,
    dropSchema: false,
    logging: ["error"],
    entities: [User, Turno, Credentials],
    subscribers: [],
    migrations: [],
    ssl: {
        rejectUnauthorized: false,
    },
});