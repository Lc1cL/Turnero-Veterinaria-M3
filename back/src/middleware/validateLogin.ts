import {Request, Response, NextFunction} from "express";

const validateLogin = (req: Request, res: Response, next: NextFunction): Response | void => {
    const {username, pass } = req.body;

    if (
        username === "" ||
        pass === "" 
    ) {
        return res.status(400).json({
            error: "Faltan datos del usuario (username, pass)"
        });
    } else {
        next();
    }
};

export default validateLogin;