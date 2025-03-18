import { Request, Response } from "express";
import { getUsersService, createUserService, getUserByIdService, findUserByCredentialId } from "../services/userService";
import ICrearCredencialesDto from "../dto/ICrearCredencialesDto";
import ICrearUserDto from "../dto/UserDto";
import { validateCredential } from "../services/credencialesService";
import User from "../entities/User.entity";
import Credentials from "../entities/Credentials.entity";
import ICredenciales from "../interfaces/ICredenciales";

export const createUser = async (req: Request<{},{},ICrearUserDto>, res : Response) => {
    console.log("Creatting new user...")
    try{
    const {name, email, birthdate, nDni, username, pass } = req.body;
    const newUser : User = await createUserService({name, email, birthdate, nDni, username, pass });  // queda el newUser sin uso pero con el usuario construido y grabado en la BBDD
    
    const { credential, ...shownUser } = newUser;

    console.log("User created successfully")

    // No se retorna el usuario ya que muestra sus credenciales
    res.status(201).json(shownUser);
 }catch (error:any){
    res.status(400).json({message: error.message})
 }
}  


export const loginUsers = async (req: Request<{},{}, ICrearCredencialesDto> , res: Response) => {
    console.log("Loging in...")
    try{
        const {username, pass} = req.body;
        const credential : ICredenciales = await validateCredential({username, pass});

        const user: User = await findUserByCredentialId(credential.id);
        return res.status(200).json({loggin: true, user});
    }catch (error:any) {
        res.status(400).json({message: error.message});
    }

}



export const getUsers = async (req: Request , res: Response) => {
    console.log("Gettings users...")
    try{
        const users : User[] = await getUsersService();
        res.status(200).json(users);
    }catch (error:any){
        res.status(400).json({message: error.message})
    }


}  


export const getUserById = async (req: Request<{id:string},{},{}>, res: Response) => {
    console.log("Getting user by ID...")
    try{
        const {id} = req.params;

        const user: User | null = await getUserByIdService(Number(id));


        res.status(200).json(user);
    }catch (error:any){
        res.status(404).json({message: error.message});
    }
}

