import { useContext } from "react";

import { ContactContext } from "../../providers/ContactContext/ContactContext";

export const ContactInfo = () => {
    const { currentContact } = useContext(ContactContext);

    return (
        <div className="relative w-[578px]">
            <p className="absolute top-[-25px] right-0 text-[11px] text-green5">// HL.PR.RF_03</p>

            <h1 className="h3G">CONTACT INFO</h1>

            <p className="h4">NAME:</p>
                <h3 className="p">{currentContact?.fullName}</h3>
            <p className="h4">E-MAIL:</p>
                <h3 className="p">{currentContact?.email}</h3>
            <p className="h4">PHONE NUMBER:</p>
                <h3 className="p">{currentContact?.phoneNumber}</h3>
            <p className="h4">REGISTERED AT:</p>
                <h3 className="p">{currentContact?.registeredAt}</h3>
        </div>
    );
};