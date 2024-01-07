import { useContext } from "react";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ClientInfo } from "../../components/ClientInfo";
import { ContactInfo } from "../../components/ContactInfo";
import { ContactIcon } from "../../components/ContactIcon";
import { FormNewContact } from "../../components/AddContactForm";
import { FormEditClient } from "../../components/EditClientForm";
import { FormEditContact } from "../../components/EditContactForm";
import { ContactContext } from "../../providers/ContactContext/ContactContext";


export const Hub = () => {
    const { contactList } = useContext(ContactContext);

    return (
        <div className="min-h-[100vh] flex flex-col justify-between px-[20px]">
            <Header/>
            <div className="flex justify-between gap-[80px] px-[40px] ">
                <div className="flex flex-col items-start justify-between gap-[40px] w-[580px] h-[750px]">
                    <div className="relative flex flex-col items-center gap-[40px] w-[580px] h-[350px] border border-green3">
                        <p className="absolute top-[-25px] left-0 text-[11px] text-green5">// BI-64-72-11</p>
                        <ClientInfo/>
                    </div>
                    <div className="relative w-[580px] h-[340px] border border-green3 hover:bg-rmredbg">
                        <p className="absolute top-[-25px] right-0 text-[11px] text-green5">// HL.PR.RF_03</p>
                        <FormEditClient/>
                    </div>
                </div>
                <div className="w-[500px] h-[750px] flex flex-col items-center justify-between">
                    <div className="relative w-[500px] h-[425px] border border-green3 hover:bg-rmredbg">
                        <p className="absolute top-[-25px] left-[159px] text-[11px] text-green5">HSV//LOG-DATA-Q32-788-124</p>
                        <ul className="flex flex-col w-[498px] h-[423px] gap-[10px]">
                            {contactList?.map((cnt) => {
                                return (
                                    <ContactIcon
                                        key={cnt.id}
                                        id={cnt.id}
                                        fullName={cnt.fullName}
                                        email={cnt.email}
                                        phoneNumber={cnt.phoneNumber}
                                    />
                                );
                            })}
                        </ul>
                    </div>
                    <div className="relative w-[500px] h-[280px] border border-green3 hover:bg-rmredbg">
                        <p className="absolute top-[-25px] left-0 text-[11px] text-green5">// ST-78</p>
                        <FormNewContact/>
                    </div>
                </div>
                <div className="w-[580px] h-[750px] flex flex-col items-center justify-between">
                    <div className="relative w-[580px] h-[350px] border border-green3 hover:bg-rmredbg">
                        <p className="absolute top-[-25px] left-0 text-[11px] text-green5">// ST-78</p>
                        <ContactInfo/>
                    </div>
                    <div className="relative w-[580px] h-[350px] border border-green3 pt-[7px] hover:bg-rmredbg">
                        <p className="absolute top-[-25px] left-0 text-[11px] text-green5">// PP-45-72-84</p>
                        <FormEditContact/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};