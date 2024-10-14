import { AppDataSource } from "../config/data-source";
import Credentials from "../entities/Credentials";
import Turno from "../entities/Turno";
import User from "../entities/User";

export const credentialModel = AppDataSource.getRepository(Credentials);

export const userModel= AppDataSource.getRepository(User);

export const turnoModel = AppDataSource.getRepository(Turno);



