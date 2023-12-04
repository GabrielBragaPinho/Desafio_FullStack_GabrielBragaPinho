import { useContext } from "react";

import { ContactContext } from "../../providers/ContactContext/ContactContext";

export const ContactInfo = () => {
    const { currentContact } = useContext(ContactContext);

    return (
        <div className="relative w-[578px]">
            <p className="absolute top-[-25px] right-0 text-[11px] text-green5">// HL.PR.RF_03</p>

            <h1 className="text base text-green2 text-[22px]">CONTACT INFO</h1>

            <p className="text base text-green2 text-[16px]">NAME:</p>
                <h3 className="w-[578px] h-[50px] bg-greenbg">{currentContact?.fullName}</h3>
            <p className="text base text-green2 text-[16px]">E-MAIL:</p>
                <h3 className="w-[578px] h-[50px] bg-greenbg">{currentContact?.email}</h3>
            <p className="text base text-green2 text-[16px]">PHONE NUMBER:</p>
                <h3 className="w-[578px] h-[50px] bg-greenbg">{currentContact?.phoneNumber}</h3>
            <p className="text base text-green2 text-[16px]">REGISTERED AT:</p>
                <h3 className="w-[578px] h-[50px] bg-greenbg">{currentContact?.registeredAt}</h3>
        </div>
    );
};