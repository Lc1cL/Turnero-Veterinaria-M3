import {Request, Response, NextFunction} from "express";

const validateRegister = (req: Request, res: Response, next: NextFunction): Response | void => {
    const {name, email, birthdate, nDni, username, pass } = req.body;

    if (
        name === "" ||
        email === "" ||
        birthdate === "" ||
        nDni === "" ||
        username === "" ||
        pass === "" 
    ) {
        return res.status(400).json({
            error: "Faltan datos del usuario (name, email, birthdate, nDni, username, pass)"
        });
    } else {
        next();
    }
};

export default validateRegister;