import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../service/api";

export const ClientContext = createContext({} as IClientContext);

export const ClientProvider = ({ children }: IClientProviderProps) => {
    const [client, setClient] = useState<IClient | null>(null);
    const [loading, setLoading] = useState<true | false>(false);
    const [isClientLoggedIn, setIsClientLoggedIn] = useState(false);

    const navigate = useNavigate();
    const currentPath = window.location.pathname;

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN");
        const id = localStorage.getItem("@CLIENTID");

        const loadClient = async () => {
          try {
            setLoading(true);
            const { data } = await api.get(`/users/${id}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            setClient(data);
            navigate(currentPath);
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        };
        if (token) {
          loadClient();
        }
      }, []);

      const clientLogin = async (formData: TLoginForm) => {
        try {
          setLoading(true);
          const { data } = await api.post<IClientLoginResponse>("/login", formData);
          localStorage.setItem("@TOKEN", data.accessToken);
          localStorage.setItem("@CLIENTID", JSON.stringify(data.client.id));
          setClient(data.user);
          navigate("/dashboard");
          setIsClientLoggedIn(true)
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

      const clientRegister = async (formData: TRegisterForm) => {
        try {
          setLoading(true);
          await api.post("/users", formData);
          navigate("/Login");
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
        navigate("/home");
      };

      return (
        <ClientContext.Provider
          value={{
            client,
            clientRegister,
            clientLogin,
            clientLogout,
            loading,
            setLoading,
            isClientLoggedIn,
            setIsClientLoggedIn,
          }} > {children}
        </ClientContext.Provider>
      );
};
