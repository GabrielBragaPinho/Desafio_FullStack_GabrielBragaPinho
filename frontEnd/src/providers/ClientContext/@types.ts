import { TLoginForm } from "../../pages/login/loginFormSchema";
import { TRegisterForm } from "../../pages/register/registerFormSchema";
import { TFormClientEdit } from "../../components/EditClientForm/editClientFormSchema";


export interface IClientProviderProps {
    children: React.ReactNode;
};

export interface IClient {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    registeredAt: string;
};

export interface IClientLoginResponse {
    accessToken: string;
};

export interface IClientContext {
    loading: true | false;
    clientLogout: () => void;
    isClientLoggedIn: boolean;
    client: IClient | null | undefined;
    clientLogin: (formData: TLoginForm) => Promise<void>;
    clientRegister: (formData: TRegisterForm) => Promise<void>;
    setLoading: React.Dispatch<React.SetStateAction<true | false>>;
    setIsClientLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    clientUpdate: (formData: TFormClientEdit) => Promise<void>;
};