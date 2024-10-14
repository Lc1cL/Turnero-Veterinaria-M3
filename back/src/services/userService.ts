import ICrearUserDto from "../dto/UserDto";
import Credentials from "../entities/Credentials";
import User from "../entities/User";
import { userModel } from "../repositories";
import { createCredential } from "./credencialesService";


export const createUserService = async (userData: ICrearUserDto) => {
  // Crea usuario
  const newUser: User = userModel.create(userData);
 
  //Crea credencial
  const newCredential: Credentials = await createCredential({
    username : userData.username,
    pass: userData.pass
  });

  //Asocia credencial con usuario y graba en BBDD
  newUser.credential = newCredential;
  await userModel.save(newUser);

  return newUser;
}

export const findUserByCredentialId = async (credentialId: number): Promise<User> => {
  const user: User | null = await userModel.findOne({where: {credential: {id:credentialId}}});

  if (!user) throw new Error ("User not found");
  return user;
}

export const getUsersService = async () : Promise<User[]> => {
    const allUsers: User[] = await userModel.find({relations: { turnos: true}});
    
    return allUsers;
}  

export const getUserByIdService = async (id : number): Promise<User | null> => {
    const user: User | null = await userModel.findOne({ 
      where : {id: id}, 
      relations : {turnos: true}
    });

    if (!user) throw new Error ("User not found");
    return user;
    
}
 

// export const deleteUserService = async (id : number): Promise<void> => {
//   users = users.filter((user: IUser)=> {
//     return user.id !== id;
//   })
// }