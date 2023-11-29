import { ZodTypeAny } from "zod";
import { NextFunction, Request, Response } from "express";

export const validateBody = (schema: ZodTypeAny) => (req:Request, res:Response, next: NextFunction): void => {
    req.body = schema.parse(req.body);
    return next();
};