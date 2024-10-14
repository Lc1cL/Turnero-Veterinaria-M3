import ICrearTurnoDto from "../dto/ICrearTurnoDto";
import Turno from "../entities/Turno";
import User from "../entities/User";
import { turnoModel, userModel } from "../repositories";

///////// Implementar una función que pueda retornar el arreglo completo de turnos.


export const getTurnosService = async (): Promise<Turno[]> => {
    const allAppointments: Turno[] = await turnoModel.find();
    return allAppointments;
}; 


/////// Implementar una función que pueda obtener el detalle de un turno por ID.

export const getTurnoByIdService = async (id: number): Promise<Turno | null> => {
    const  turno : Turno | null = await turnoModel.findOneBy({ 
        id:id
    });
    if(!turno) throw new Error ("Appointment not found");

    return turno;
}


// Implementar una función que pueda crear un nuevo turno, siempre guardando, además, el ID del usuario que ha creado dicho turno. 
// NO PUEDE HABER UN TURNO SIN ID DE USUARIO. 

export const agendarTurnoService = async (turno: ICrearTurnoDto): Promise<Turno> => {

    const user : User | null = await userModel.findOneBy({id : turno.userID});
    if (!user) throw Error ("User not found");

    const newTurno: Turno = turnoModel.create(turno);
    newTurno.user = user;
    await turnoModel.save(newTurno);
    return newTurno; 
}


// Implementar una función que reciba el id de un turno específico y una vez identificado el turno correspondiente, 
// cambiar su estado a “cancelled”.

export const cancelarTurnoService = async (id: number): Promise<Turno> => {
    const turno : Turno | null = await turnoModel.findOneBy({
        id:id
    });
    if (!turno) throw new Error("Appointment not found");

    turno.status = "cancelled";
    await turnoModel.save(turno);

 return turno;
}