import { Router } from "express";
import middlewares from "../middlewares";

import { contactCreateSchema, contactUpdateSchema } from "../schemas";
import { contactControllers } from "../controllers";


export const contactRouter: Router = Router();

contactRouter.post("", middlewares.verifyToken, middlewares.validateBody(contactCreateSchema), contactControllers.create);
contactRouter.get("", middlewares.verifyToken, middlewares.pagination, contactControllers.read);
contactRouter.delete("/:id", middlewares.verifyToken, middlewares.verifyIdExists, contactControllers.destroy);
contactRouter.patch("/:id", middlewares.validateBody(contactUpdateSchema), middlewares.verifyNameExists, middlewares.verifyIdExists, contactControllers.partialUpdate);