import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { Hub } from "../pages/hub/hub";

export const RoutesMain = () => {
    return(
        <Routes>
            <Route>
                <Route path="/" element={<Home />} />
                <Route path="/hub" element={<Hub />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>
        </Routes>
    );
};