import { Router } from "express";

import userRoutes from "./user.routes";
import pixRoutes from './pix.routes'


const routes = Router();

routes.use("/user", userRoutes);
routes.use('/pix', pixRoutes);

export default routes