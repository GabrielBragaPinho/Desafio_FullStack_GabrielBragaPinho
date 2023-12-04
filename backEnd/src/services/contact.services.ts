import { Contact } from "../entities";
import { contactRepository } from "../repositories";
import { ContactCreate, ContactRead, ContactUpdate } from "../interfaces";
import { contactReadSchema } from "../schemas";

const create = async (payload: ContactCreate): Promise<Contact> => {
    return await contactRepository.save(payload);
};

const read = async (): Promise<ContactRead> => {
    return contactReadSchema.parse(await contactRepository.find());
};

const destroy = async (contact: Contact): Promise<void> => {
    await contactRepository.remove(contact);
};

const partialUpdate = async (contact: Contact, payload: ContactUpdate): Promise<Contact> => {
    return await contactRepository.save({ ...contact, ...payload });
};

export default  { create, read, destroy, partialUpdate };