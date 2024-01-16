import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import img from "../../assets/green.png";

import { TLoginForm } from "./loginFormSchema";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { loginFormSchema } from "./loginFormSchema";
import { ClientContext } from "../../providers/ClientContext/ClientContext";


export const Login = () => {
    const {
        register,
        handleSubmit,
    } = useForm<TLoginForm>({
            resolver: zodResolver(loginFormSchema),
        });

    const { clientLogin } = useContext(ClientContext);

    const submit: SubmitHandler<TLoginForm> = (formData) => {
    clientLogin(formData);
    };

    return (
        <div className="min-h-[100vh] flex flex-col justify-between px-[20px]">
            <Header />
                <div className="flex justify-between gap-[80px] px-[40px] ">
                <div className="flex flex-col items-start justify-between gap-[40px] w-[580px] h-[750px]">
                    <div className="relative flex flex-col items-center gap-[40px] w-[580px] h-[350px] border border-green3 bg-greenbg">
                        <h1 className="h1G">LOGIN</h1>
                        <p className="pCenter">PLEASE PROVIDE LOGIN INFORMATION.</p>
                        <p className="flareLeft">// BI-64-72-11</p>
                    </div>
                    <div className="relative w-[580px] h-[260px] border border-green3 bg-greenbg text-[13px] p-[10px]">
                        <p className="flareRight">// HL.PR.RF_03</p>
                        <img src={ img } alt="" className="h-[130px] w-[130px] ml-[210px] mt-[50px]"/>
                    </div>
                </div>
                <div className="relative w-[580px] h-[250px] border border-green3 text-[13px] p-[10px]">
                    <p className="flareLeft">SSA//REG-DATA-U75-889-422</p>
                    <form onSubmit={ handleSubmit( submit ) }>
                        <Input type="text" placeholder="E-mail" {...register("email")} className="input"/>
                        <Input type="text" placeholder="Password" {...register("password")} className="input"/>
                        <button type="submit" className="saveBtn">Login</button>
                    </form>
                </div>
                </div>
            <Footer />
        </div>
    );
};