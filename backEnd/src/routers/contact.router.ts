import { Router } from "express";
import middlewares from "../middlewares";

import { contactCreateSchema } from "../schemas";
import { contactControllers } from "../controllers";


export const contactRouter: Router = Router();

contactRouter.post("", middlewares.verifyToken, middlewares.validateBody(contactCreateSchema), contactControllers.create);
contactRouter.get("", middlewares.verifyToken, middlewares.pagination, contactControllers.read);

contactRouter.use("/:id", middlewares.verifyIdExists);

contactRouter.delete("/:id", middlewares.verifyToken, contactControllers.destroy);