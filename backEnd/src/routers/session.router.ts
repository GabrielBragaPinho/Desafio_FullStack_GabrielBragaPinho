import { Router } from "express";

import { sessionSchema } from "../schemas";
import middlewares from "../middlewares";
import { sessionControllers } from "../controllers";


export const sessionRouter: Router = Router();

sessionRouter.post("", middlewares.validateBody(sessionSchema), sessionControllers.create);