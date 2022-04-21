import { Router } from "express";
import UserController from "../resources/user/user.controller";
import userAuthenticated from "../middlewares/userAuthenticated";



const userRoutes = Router();
const userController = new UserController();

userRoutes.post("/signin", userController.signin)
userRoutes.post("/signup", userController.signup) 
userRoutes.get('/me', userAuthenticated, userController.me)

export default userRoutes