import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

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
                        <h1 className="text-addgreen text-[40px] font-bold font-inter pt-[40px] px-[30px]">REGISTER</h1>
                        <p className="text-[17px] text-green2 font-inter py-[20px] px-[60px] pb-[20px]">CAPSULE CORPORATION is happy to have your data, please provide the following information to register in our database.</p>
                        <p className="absolute top-[-25px] left-0 text-[11px] text-green5">// BI-64-72-11</p>
                    </div>
                <div className="relative w-[580px] h-[260px] border border-green3 text-[13px] p-[10px] hover:bg-greenbg"><p className="absolute top-[-25px] right-0 text-[11px] text-green5">// HL.PR.RF_03</p></div>
                </div>
                    <div className="relative w-[950px] h-[750px] border border-green3 text-[13px] p-[10px] hover:bg-greenbg">
                        <p className="absolute top-[-25px] left-0 text-[11px] text-green5">SSA//REG-DATA-U75-889-422</p>
                        <form onSubmit={ handleSubmit( submit ) }>
                            <Input type="text" placeholder="Name" {...register("name")} className="text-black text-[17px] font-inter rounded bg-green3 border border-green2 border-opacity-20 w-[370px] h-[56px] pl-4"/>
                            <Input type="text" placeholder="E-mail" {...register("email")} className="text-black text-[17px] font-inter rounded bg-green3 border border-green2 border-opacity-20 w-[370px] h-[56px] pl-4"/>
                            <Input type="text" placeholder="Password" {...register("password")} className="text-black text-[17px] font-inter rounded bg-green3 border border-green2 border-opacity-20 w-[370px] h-[56px] pl-4"/>
                            <Input type="text" placeholder="Confirm Password" {...register("confirmPassword")} className="text-black text-[17px] font-inter rounded bg-green3 border border-green2 border-opacity-20 w-[370px] h-[56px] pl-4"/>
                            <Input type="text" placeholder="Phone Number" {...register("phoneNumber")} className="text-black text-[17px] font-inter rounded bg-green3 border border-green2 border-opacity-20 w-[370px] h-[56px] pl-4"/>
                            <button type="submit" className="bg-green5 text-green3 rounded w-[166px] h-[54px] self-end">Register</button>
                        </form>
                    </div>
                    <div>          <p className="text-rmred fixed left-[330px] bottom-[467px]">
            {errors.name?.message}
          </p>
          <p className="text-rmred fixed left-[330px] bottom-[400px]">
            {errors.password?.message}
          </p>
          <p className="text-rmred fixed left-[330px] bottom-[400px]">
            {errors.confirmPassword?.message}
          </p>
        </div>
        <div>
          <p className="text-rmred fixed right-[442px] bottom-[467px]">
            {errors.email?.message}
          </p>
          <p className="text-rmred fixed right-[290px] bottom-[400px]">
            {errors.phoneNumber?.message}
          </p></div>
                </div>
            <Footer />
        </div>
    );
};