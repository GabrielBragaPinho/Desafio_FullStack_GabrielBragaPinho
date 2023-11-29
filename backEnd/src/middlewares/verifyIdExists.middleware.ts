import { NextFunction, Request, Response } from "express";

import { Client } from "../entities";
import { AppError } from "../errors";
import { clientRepository } from "../repositories";


export const verifyIdExists = async (req:Request, res:Response, next: NextFunction): Promise<void> => {
    const foundClient: Client | null = await clientRepository.findOneBy({ id: Number(req.params.id) });

    if(!foundClient) throw new AppError("Client not found", 404);

    res.locals = { ...res.locals, foundClient };

    return next();
};