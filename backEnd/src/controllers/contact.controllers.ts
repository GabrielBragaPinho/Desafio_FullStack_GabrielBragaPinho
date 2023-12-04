import { Request, Response } from "express";

import { Contact } from "../entities";
import { ContactRead } from "../interfaces";
import { contactServices } from "../services";


const create = async (req:Request, res:Response): Promise<Response> => {
    const contact: Contact = await contactServices.create(req.body);
    return res.status(201).json(contact);
};

const read = async (req:Request, res:Response): Promise<Response> => {
    const contacts: ContactRead = await contactServices.read();
    return res.status(200).json(contacts);
};

const destroy = async (req:Request, res:Response): Promise<Response> => {
    await contactServices.destroy(res.locals.foundcontact);
    return res.status(204).json();
};

const partialUpdate = async (req:Request, res:Response): Promise<Response> => {
    const { foundContact } = res.locals;
    const { body } = req;

    const contact: Contact = await contactServices.partialUpdate(foundContact, body);
    return res.status(200).json(contact);
};

export default { create, read, destroy, partialUpdate };