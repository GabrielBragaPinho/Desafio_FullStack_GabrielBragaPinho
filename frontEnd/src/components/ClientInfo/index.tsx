import { useContext } from "react";

import { ClientContext } from "../../providers/ClientContext/ClientContext";


export const ClientInfo = () => {
    const { client } = useContext(ClientContext);

    return (
        <div className="relative w-[578px]">
            <p className="absolute top-[-25px] right-0 text-[11px] text-green5">// HL.PR.RF_03</p>

            <h1 className="text base text-green2 text-[22px]">YOUR INFO</h1>

            <p className="text base text-green2 text-[16px]">NAME:</p>
                <h3 className="w-[578px] h-[50px] bg-greenbg">{client?.name}</h3>
            <p className="text base text-green2 text-[16px]">E-MAIL:</p>
                <h3 className="w-[578px] h-[50px] bg-greenbg">{client?.email}</h3>
            <p className="text base text-green2 text-[16px]">PHONE NUMBER:</p>
                <h3 className="w-[578px] h-[50px] bg-greenbg">{client?.phoneNumber}</h3>
            <p className="text base text-green2 text-[16px]">REGISTERED AT:</p>
                <h3 className="w-[578px] h-[50px] bg-greenbg">{client?.registeredAt}</h3>
        </div>
    );
};