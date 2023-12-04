import { Router } from "express";
import middlewares from "../middlewares";

import { clientControllers } from "../controllers";
import { clientCreateSchema, clientUpdateSchema } from "../schemas";


export const clientRouter: Router = Router();

clientRouter.post("", middlewares.validateBody(clientCreateSchema), middlewares.uniqueEmail, middlewares.uniqueName, clientControllers.create);
clientRouter.get("", middlewares.pagination, clientControllers.read);
clientRouter.delete("/:id",middlewares.verifyIdExists, clientControllers.destroy);
clientRouter.patch("/:id", middlewares.validateBody(clientUpdateSchema), middlewares.verifyNameExists, middlewares.verifyIdExists, clientControllers.partialUpdate);
