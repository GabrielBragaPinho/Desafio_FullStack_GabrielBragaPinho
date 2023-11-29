import { Contact } from "../entities";
import { contactRepository } from "../repositories";
import { ContactCreate, ContactRead, Pagination, PaginationParams } from "../interfaces";
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

export default  { create, read, destroy };