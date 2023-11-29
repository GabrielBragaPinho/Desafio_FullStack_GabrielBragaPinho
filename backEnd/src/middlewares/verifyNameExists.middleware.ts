import { NextFunction, Request, Response } from "express";

import { Client } from "../entities";
import { AppError } from "../errors";
import { clientRepository } from "../repositories";


export const verifyNameExists = async (req:Request, res:Response, next: NextFunction): Promise<void> => {
    const foundClient: Client | null = await clientRepository.findOneBy({ name: String(req.body.name) });

    if(foundClient && req.body.name) throw new AppError("Client already exists.", 409);

    res.locals = { ...res.locals, foundClient };

    return next();
};