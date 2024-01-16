import { verify } from "jsonwebtoken";
import { AppError } from "../errors";
import { NextFunction, Request, Response } from "express";


export const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
    const authorization: string | undefined = req.headers.authorization;
    if (!authorization) throw new AppError("Missing bearer token", 401);

    const [_bearer, token]: Array<string> = authorization.split(" ");

    res.locals = { ...res.locals, decoded: verify(token, process.env.SECRET_KEY!), };

    return next();
};