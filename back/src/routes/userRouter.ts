import { Router, Request, Response} from 'express';
import { getUsers, createUser, loginUsers, getUserById} from '../controllers/userController';
import validateRegister from '../middleware/valildateRegister';
import validateLogin from "../middleware/validateLogin"

const userRouter = Router()

userRouter.post("/register", validateRegister, createUser); 
userRouter.get("/", getUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/login", validateLogin,  loginUsers);

export default userRouter;