import { useNavigate } from "react-router-dom";
import { createContext, useState } from "react";

import { api } from "../../service/api";
import { TLoginForm } from "../../pages/login/loginFormSchema";
import { TRegisterForm } from "../../pages/register/registerFormSchema";
import { TFormClientEdit } from "../../components/EditClientForm/editClientFormSchema";
import { IClient, IClientProviderProps, IClientContext } from "./@types";


export const ClientContext = createContext({} as IClientContext);

export const ClientProvider = ({ children }: IClientProviderProps) => {
  const navigate = useNavigate();
  const [client, setClient] = useState<IClient | null>(null);
  const [loading, setLoading] = useState<true | false>(false);
  const [isClientLoggedIn, setIsClientLoggedIn] = useState(false);

  const clientLogin = async (formData: TLoginForm) => {
    try {
      setLoading(true);
      const response = await api.post("/login", formData);
      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@CLIENTID", JSON.stringify(response.data.foundClient.id));
      setClient(response.data.foundClient);
      setIsClientLoggedIn(true);
      navigate("/hub");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    };
  };

  const clientRegister = async (formData: TRegisterForm) => {
    try {
      setLoading(true);
      await api.post("/clients", formData);
      navigate("/login");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const clientLogout = () => {
    setClient(null);
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@CLIENTID");
    setIsClientLoggedIn(false);
    navigate("/");
  };

  const clientUpdate = async (formData: TFormClientEdit) => {
    const token = localStorage.getItem("@TOKEN");
    const id = localStorage.getItem("@CLIENTID");
    try {
      console.log(formData)
      setLoading(true);
      const response = await api.patch(
        `/clients/${id}`,
        { ...formData},
        { headers: { Authorization: `Bearer ${token}` }, }
      );
        setClient(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
    };
  };

  return (
    <ClientContext.Provider
      value={{
        client,
        clientRegister,
        clientLogin,
        clientLogout,
        clientUpdate,
        loading,
        setLoading,
        isClientLoggedIn,
        setIsClientLoggedIn,
      }} > {children}
    </ClientContext.Provider>
  );
};
