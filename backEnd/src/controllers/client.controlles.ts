import { Request, Response } from "express";

import { Client } from "../entities";
import { ClientReturn, Pagination } from "../interfaces";
import { clientServices } from "../services";


const create = async (req:Request, res:Response): Promise<Response> => {
    const client: ClientReturn = await clientServices.create(req.body);
    return res.status(201).json(client);
};

const read = async (req:Request, res:Response): Promise<Response> => {
    const { pagination } = res.locals;
    const clients: Pagination = await clientServices.read(pagination);
    return res.status(200).json(clients);
};

const destroy = async (req:Request, res:Response): Promise<Response> => {
    await clientServices.destroy(res.locals.foundclient);
    return res.status(204).json();
};

const partialUpdate = async (req:Request, res:Response): Promise<Response> => {
    const { foundClient } = res.locals;
    const { body } = req;

    const client: Client = await clientServices.partialUpdate(foundClient, body);
    return res.status(200).json(client);
};

export default { create, read, destroy, partialUpdate };