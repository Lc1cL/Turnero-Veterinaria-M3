import ICrearCredencialesDto from "../dto/ICrearCredencialesDto";
import Credentials from "../entities/Credentials.entity";
import {credentialModel} from "../repositories/index"
import IValidateCredentialsDto from "../dto/IValidateCredentialsDto";


export const createCredential = async (crearCredentialsDto : ICrearCredencialesDto): Promise<Credentials> => {
    //verificar que no exista el email
    //Crear credencial
    const newCredential : Credentials  = credentialModel.create(crearCredentialsDto)
    //Grabar en BBDD
    await credentialModel.save(newCredential);

    return newCredential;
};


export const validateCredential = async (validateCredentialDto : IValidateCredentialsDto): Promise<Credentials> => {
    const {username, pass} = validateCredentialDto;
    const foundCredential: Credentials | null = await credentialModel.findOneBy({username: username});

    if (!foundCredential) throw Error ("Credenciales incorrectas");
    if (pass !== foundCredential?.pass) throw Error ("Credenciales incorrectas");
    
    return foundCredential;
};







