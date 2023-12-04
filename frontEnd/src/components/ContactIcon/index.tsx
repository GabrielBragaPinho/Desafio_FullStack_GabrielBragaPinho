import React, { useContext } from "react"
import { ContactContext } from "../../providers/ContactContext/ContactContext"

interface ContactProps {
    id: number;
    fullName: string;
    email: string;
    phoneNumber: string;
};
function handleNavigateInternPage(id: number,setCurrentContact: React.Dispatch<React.SetStateAction<number>>) {setCurrentContact(id);}

export const ContactIcon: React.FC<ContactProps> = ({ id, fullName }) => {
    const { setCurrentID } = useContext(ContactContext)
    return (
        <li onClick={()=> handleNavigateInternPage(id, setCurrentID)}>
            <h1 className="text-[15px] text-green2">{fullName}</h1>
        </li>
    );
};