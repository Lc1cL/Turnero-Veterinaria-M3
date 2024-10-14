import { Router} from 'express';
import userRouter from './userRouter';
import turnoRouter from './turnoRouter';

const router = Router();

router.use("/users", userRouter);
router.use("/turnos", turnoRouter);


export default router;

