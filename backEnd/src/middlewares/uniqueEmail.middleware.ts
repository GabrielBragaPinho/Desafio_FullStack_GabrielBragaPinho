import { NextFunction, Request, Response } from "express";

import { Client } from "../entities";
import { AppError } from "../errors";
import { clientRepository } from "../repositories";


export const uniqueEmail = async (req:Request, res:Response, next:NextFunction): Promise<void> => {
    const email: string = req.body.email;

    if (!email) {
        return next();
    };

    const foundEntity: Client | null = await clientRepository.findOneBy({ email });
    if (foundEntity) throw new AppError("Email already exists", 409);

    return next();
};