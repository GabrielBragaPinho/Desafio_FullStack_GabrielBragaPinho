import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Register } from "../pages/register";


export const RoutesMain = () => {
    return(
        <Routes>
            <Route>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>
        </Routes>
    );
};