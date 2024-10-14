import { Router} from 'express';
import { getTurnos, agendarTurno, cancelarTurno, getTurnoById } from '../controllers/turnoController';
import  validateTurno  from '../middleware/validateTurno';

const turnoRouter = Router()

turnoRouter.get("/", getTurnos);
turnoRouter.get("/:id", getTurnoById);
turnoRouter.post("/agendar", validateTurno,  agendarTurno);
turnoRouter.put("/cancel/:id", cancelarTurno);

export default turnoRouter;