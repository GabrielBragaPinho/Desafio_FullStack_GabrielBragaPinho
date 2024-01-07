import { Contact } from "../entities";
import { contactRepository } from "../repositories";
import { ContactCreate, ContactRead, ContactReturn, ContactUpdate } from "../interfaces";
import { contactReadSchema, contactRetrieveSchema, contactReturnSchema } from "../schemas";


const create = async (payload: ContactCreate): Promise<Contact> => {
    return await contactRepository.save(payload);
};

const read = async (): Promise<ContactRead> => {
    return contactReadSchema.parse(await contactRepository.find());
};

const retrieve = async (contactId: number): Promise<ContactReturn> => {
    const contact = await contactRepository.findOne({
        where: { id: contactId},
    });

    return contactReturnSchema.parse(contact)
};

const destroy = async (contactId: number): Promise<void> => {
    const contact = await contactRepository.findOne({
        where: { id: contactId},
    });

    if (contact) {
        await contactRepository.delete(contact.id);
    } else {
        throw new Error(`Contact with ID ${contactId} not found`);
    }
};

const partialUpdate = async (contactId: number, payload: ContactUpdate): Promise<Contact> => {
    await contactRepository.findOne({
        where: { id: contactId},
    });

    return await contactRepository.save({ ...payload });
};

export default  { create, read, destroy, partialUpdate, retrieve };