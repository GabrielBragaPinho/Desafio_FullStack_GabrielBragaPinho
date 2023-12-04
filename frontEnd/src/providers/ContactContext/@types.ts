import { IClient } from "../ClientContext/@types";
import { TFormNewContact } from "../../components/AddContactForm/newContactSchema";
import { TFormContactEdit } from "../../components/EditContactForm/editContactFormSchema";


export interface IContactContext {
    contactList: IContact[];
    currentID: number | undefined;
    currentContact: IContact | null;
    getContacts: () => Promise<void>;
    deleteContact: (id: number) => Promise<void>;
    getSpecificContact: (id: number) => Promise<void>;
    addNewContact: (formData: TFormNewContact) => Promise<void>;
    setCurrentID: React.Dispatch<React.SetStateAction<number>>;
    setCurrentContact: React.Dispatch<React.SetStateAction<IContact | null>>;
    handleEditContact: (formData: TFormContactEdit, id: number|null|undefined) => Promise<void>;
};

export interface IContact {
    id: number;
    fullName: string;
    email: string;
    phoneNumber: string;
    registeredAt: string;
    client: IClient;
};