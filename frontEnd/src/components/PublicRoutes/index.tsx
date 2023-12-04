import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom";
import { ClientContext } from "../../providers/ClientContext/ClientContext";

export const PublicRoutes = () => {
    const { client } = useContext(ClientContext);

    return !client ? <Outlet />: <Navigate to="/home" />;
}