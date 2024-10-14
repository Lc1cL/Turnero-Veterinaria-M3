import {Request, Response, NextFunction} from "express";

const validateTurno = (req: Request, res: Response, next: NextFunction): Response | void => {
    const {time, date, descrpitiom, userID} = req.body;

    if (
        time === "" ||
        date === "" ||
        descrpitiom === "" ||
        userID === "" 
    ) {
        return res.status(400).json({
            error: "Faltan datos del turno (time, date, description, userID)"
        });
    } else {
        next();
    }
};

export default validateTurno;
