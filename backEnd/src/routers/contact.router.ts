import { Router } from "express";
import middlewares from "../middlewares";

import { contactControllers } from "../controllers";
import { contactCreateSchema, contactUpdateSchema } from "../schemas";


export const contactRouter: Router = Router();

contactRouter.post("", middlewares.verifyToken, middlewares.validateBody(contactCreateSchema), contactControllers.create);
contactRouter.get("", middlewares.verifyToken, middlewares.pagination, contactControllers.read);
contactRouter.get("/:id", middlewares.verifyToken, contactControllers.retrieve);
contactRouter.delete("/:id", middlewares.verifyToken, contactControllers.destroy);
contactRouter.patch("/:id", middlewares.validateBody(contactUpdateSchema), contactControllers.partialUpdate);