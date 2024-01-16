import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import img from "../../assets/green.png";

import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { TRegisterForm } from "./registerFormSchema";
import { registerFormSchema } from "./registerFormSchema";
import { ClientContext } from "../../providers/ClientContext/ClientContext";


export const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm <TRegisterForm> ({
        resolver: zodResolver(registerFormSchema),
    });

    const { clientRegister } = useContext(ClientContext);

    const submit: SubmitHandler<TRegisterForm> = (formData) => {
        clientRegister(formData);
    };

    return (
        <div className="min-h-[100vh] flex flex-col justify-between px-[20px]">
            <Header />
            <div className="flex justify-between gap-[80px] px-[40px] ">
                <div className="flex flex-col items-start justify-between gap-[40px] w-[580px] h-[750px]">
                    <div className="relative flex flex-col items-center gap-[40px] w-[580px] h-[350px] border border-green3 bg-greenbg">
                        <h1 className="h1G">REGISTER</h1>
                        <p className="pCenter">CAPSULE CORPORATION IS HAPPY TO HAVE YOUR DATA, PLEASE PROVIDE THE FOLLOWING INFORMATION TO REGISTER IN OUR DATABASE.</p>
                        <p className="flareLeft">// BI-64-72-11</p>
                    </div>
                    <div className="relative w-[580px] h-[260px] border border-green3 bg-greenbg text-[13px] p-[10px]">
                        <p className="flareRight">// HL.PR.RF_03</p>
                        <img src={ img } alt="" className="h-[130px] w-[130px] ml-[210px] mt-[50px]"/>
                    </div>
                </div>
                <div className="relative w-[580px] h-[530px] border border-green3 text-[13px] p-[10px]">
                    <p className="flareLeft">SSA//REG-DATA-U75-889-422</p>
                    <form onSubmit={ handleSubmit( submit ) }>
                        <Input type="text" placeholder="Name" {...register("name")} className="input"/>
                            <p className="text-rmred">{errors.name?.message}</p>
                        <Input type="text" placeholder="E-mail" {...register("email")} className="input"/>
                            <p className="text-rmred">{errors.password?.message}</p>
                        <Input type="text" placeholder="Password" {...register("password")} className="input"/>
                            <p className="text-rmred">{errors.confirmPassword?.message}</p>
                        <Input type="text" placeholder="Confirm Password" {...register("confirmPassword")} className="input"/>
                            <p className="text-rmred">{errors.email?.message}</p>
                        <Input type="text" placeholder="Phone Number" {...register("phoneNumber")} className="input"/>
                            <p className="text-rmred">{errors.phoneNumber?.message}</p>
                        <button type="submit" className="saveBtn">Register</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};