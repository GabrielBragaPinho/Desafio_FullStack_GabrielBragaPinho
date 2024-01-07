import React, { useContext } from "react"
import { ContactContext } from "../../providers/ContactContext/ContactContext"


interface ContactProps {
    id: number;
    fullName: string;
    email: string;
    phoneNumber: string;
};
export const ContactIcon: React.FC<ContactProps> = ({ id, fullName }) => {
    const { getSpecificContact , setCurrentID, deleteContact, currentID } = useContext(ContactContext)

    return (
        <li className="flex flex-row justify-between bg-greenbg h-[40px] w-full pl-[0px] pr-[20px]">
                <button className="  w-[150px] text-[17px] text-green2" onClick={()=> {setCurrentID(id);console.log(id); getSpecificContact(id)}}>{fullName}</button>
                <button className="  w-[100px] text-[17px] text-rmred" onClick={()=> deleteContact(currentID!)}>DELETE</button>
        </li>
    );
};