import { AppDataSource } from "../config/data-source";
import Credentials from "../entities/Credentials.entity";
import Turno from "../entities/Turno.entity";
import User from "../entities/User.entity";

export const credentialModel = AppDataSource.getRepository(Credentials);

export const userModel= AppDataSource.getRepository(User);

export const turnoModel = AppDataSource.getRepository(Turno);



