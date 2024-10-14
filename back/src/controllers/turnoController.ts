import ICrearTurnoDto from "../dto/ICrearTurnoDto";
import Turno from "../entities/Turno";
import { getTurnosService, agendarTurnoService, cancelarTurnoService, getTurnoByIdService } from "../services/turnoService";
import { Request, Response } from "express";

export const getTurnos = async (req: Request, res : Response) => {
    console.log("Getting appointments...")
    try{
        const turnos : Turno[] = await getTurnosService();
        res.status(200).json(turnos);
    }catch (error: any){
        res.status(400).json({message: error.message})
    }
}

export const getTurnoById = async (req: Request<{id : string}, {},{}>, res: Response) => {
    console.log("Getting appointment by ID...")
    try{
        const {id: Id} = req.params; 

        const numericId = Number(Id);  
        if (isNaN(numericId)) {
            throw new Error("Invalid ID");
        }

        const turno: Turno | null = await getTurnoByIdService(numericId);
        res.status(200).json(turno);
    }catch (error:any) {
      res.status (404).json({message: error.message});
    }
}

export const agendarTurno = async (req: Request<{}, {}, ICrearTurnoDto>, res: Response) => {
    console.log("Scheduling appointment...");
    try {
        let { date, time, userID, description } = req.body;
        if (!userID) throw new Error("User ID is required");
        userID = Number(userID);
        const nuevoTurno: Turno = await agendarTurnoService({ date, time, userID, description });
        res.status(201).json(nuevoTurno);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}

export const cancelarTurno = async (req: Request<{ id: number },{},{}>, res: Response) => {
    console.log("Cancelling appointment...");
    
    const { id } = req.params;
    
    try {
        const turnoCancelado = await cancelarTurnoService(id);
        res.status(200).json(turnoCancelado);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
}

