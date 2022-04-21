import { Router } from "express";
import PixController from "../resources/pix/pix.controller";
import userAuthenticated from '../middlewares/userAuthenticated';


const pixRoutes = Router()
const pixController = new PixController();

pixRoutes.use(userAuthenticated)

pixRoutes.post("/request", pixController.request)
pixRoutes.post("/pay/:key", pixController.pay)
pixRoutes.get("/transactions", pixController.transactions)

export default pixRoutes