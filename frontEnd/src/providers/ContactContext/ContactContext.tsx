import { createContext, useState, useContext } from "react";

import { api } from "../../service/api";
import { TFormNewContact } from "../../components/AddContactForm/newContactSchema";
import { TFormContactEdit } from "../../components/EditContactForm/editContactFormSchema";
import { IContact, IContactContext, IContactProviderProps } from "./@types";

export const ContactContext = createContext({} as IContactContext);

export const ContactProvider = ({ children }: IContactProviderProps) => {
    const [contacts, setContacts] = useState<IContact[]>([]);
    const [currentID, setCurrentID] = useState(0);
    const [currentContact, setCurrentContact] = useState<IContact | null>(null);

    const token = localStorage.getItem("@TOKEN");


    const getContacts = async () => {
        try {
            const { data } = await api.get(`/contacts`, {
                headers: {
                Authorization: `Bearer ${token}`,
                },
            });
            setContacts(data);
        } catch (error) {
            console.log(error);
    };}

    const getSpecificContact = async (id: number | undefined) => {
        try {
            const response = await api.get(`/contacts/${id}`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
            });
            setCurrentContact(response.data);
        } catch (error) {
            console.log(error);
        };
    };

    const addNewContact = async (formData: TFormNewContact) => {
        try {
            const body = {
                ...formData
            };
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            const response = await api.post("/contacts", body, { headers });
            setCurrentContact(response.data);
            getContacts()
            } catch (error) {
                console.log(error);
    };}

    const handleEditContact = async (formData: TFormContactEdit, id: number | null | undefined) => {
        try {
            const response = await api.patch(
                `/contacts/${id}`,
                { ...formData },
                { headers: { Authorization: `Bearer ${token}` }, }
            );
            setCurrentContact(response.data);
            } catch (error) {
                console.log(error);
    };}

    const deleteContact = async (id: number) => {
        try {
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            console.log(id)

            await api.delete(`/contacts/${id}`, { headers });
            console.log(id)
            getContacts()
            } catch (error) {
                console.log(error);
    };}

    return (
        <ContactContext.Provider
            value={{
                contactList: contacts,
                currentID,
                getContacts,
                setCurrentID,
                addNewContact,
                deleteContact,
                currentContact,
                handleEditContact,
                setCurrentContact,
                getSpecificContact,
            }}> {children}
        </ContactContext.Provider>
    );
};
