import { NextFunction, Request, Response } from "express";

import { Client } from "../entities";
import { AppError } from "../errors";
import { clientRepository } from "../repositories";

export const uniqueName = async (req:Request, res:Response, next:NextFunction): Promise<void> => {
    const name: string = req.body.name;

    if (!name) {
        return next();
    };

    const foundEntity: Client | null = await clientRepository.findOneBy({ name });
    if (foundEntity) throw new AppError("Name already exists", 409);

    return next();
};