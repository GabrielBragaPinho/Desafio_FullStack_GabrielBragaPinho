import { useContext } from "react";

import { ClientContext } from "../../providers/ClientContext/ClientContext";


export const ClientInfo = () => {
    const { client } = useContext(ClientContext);
    return (
        <div className="flex flex-col w-[578px]">
            <h1 className="h3G">YOUR INFO</h1>
            <h4 className="h4">NAME:</h4>
                <p className="p">{client?.name}</p>
            <h4 className="h4">E-MAIL:</h4>
                <p className="p">{client?.email}</p>
            <h4 className="h4">PHONE NUMBER:</h4>
                <p className="p">{client?.phoneNumber}</p>
            <h4 className="h4">REGISTERED AT:</h4>
                <p className="p">{client?.registeredAt}</p>
        </div>
    );
};