import { createContext, useState, useEffect, ReactNode, useContext } from "react";

import { api } from "../../service/api";
import { IContactContext } from "./@types";
import { ClientContext } from "../ClientContext/ClientContext";
import { TFormNewContact } from "../../components/AddContactForm/newContactSchema";
import { TFormContactEdit } from "../../components/EditContactForm/editContactFormSchema";
import { IContact } from "./@types";

export const ContactContext = createContext({} as IContactContext);

export const ContactProvider = ({ children }: { children: ReactNode }) => {
    const [contacts, setContacts] = useState<IContact[]>([]);
    const [currentID, setCurrentID] = useState(0);
    const [currentContact, setCurrentContact] = useState<IContact | null>(null);

    const { client, setLoading } = useContext(ClientContext);

    const token = localStorage.getItem("@TOKEN");

    const getContacts = async () => {
        try {
            setLoading(true);
            const response = await api.get("/contacts");
            setContacts(response.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        };
    };

    const getSpecificContact = async (id: number | undefined) => {
        try {
            const response = await api.get(`/contacts/${id}`);
            setCurrentContact(response.data);
        } catch (error) {
            console.log(error);
        };
    };

    const addNewContact = async (formData: TFormNewContact) => {
        try {
            setLoading(true);
            const body = {
                ...formData,
                owner: client?.name,
                clientId: client?.id,
            };
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            const response = await api.post("/contacts", body, { headers });
            setCurrentContact(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
        };
    };

    const handleEditContact = async (formData: TFormContactEdit, id: number | null | undefined) => {
        const token = localStorage.getItem("@TOKEN");
        try {
            setLoading(true);
            const response = await api.patch(
                `/posts/${id}`,
                { ...formData, owner: client?.name, clientId: client?.id },
                { headers: { Authorization: `Bearer ${token}` }, }
            );
            setCurrentContact(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
        };
    };

    const deleteContact = async (id: number) => {
        try {
            setLoading(true);
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            await api.delete(`/contacts/${id}`, { headers });
            getContacts();
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
        };
    };

    useEffect(() => {
        getContacts();
    }, []);

    useEffect(() => {
        if (currentID !== 0) {
            getSpecificContact(currentID);
        }
    }, [currentID]);

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
