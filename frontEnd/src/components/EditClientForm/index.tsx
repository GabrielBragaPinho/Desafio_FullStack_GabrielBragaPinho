import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

import { TFormClientEdit } from "./editClientFormSchema"; 
import { editClientFormSchema } from "./editClientFormSchema";
import { ClientContext } from "../../providers/ClientContext/ClientContext";


export const FormEditClient = () => {
    const { handleSubmit, register, formState: { errors }, } = useForm<TFormClientEdit>({resolver: zodResolver(editClientFormSchema), });

    const { clientUpdate } = useContext(ClientContext);
    const submit: SubmitHandler<TFormClientEdit> = (formData) => {
      clientUpdate(formData);
    };

    return (
      <section className="bg-grey h-full flex flex-col items-center">
        <div className="w-[498px] h-[748px]">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-yellow font-inter text-[22px] pl-[200px]">
              EDIT YOUR INFORMATION
            </h1>
          </div>
          <form className="flex flex-col " onSubmit={handleSubmit(submit)}>
            <label className="text-green2 text-base font-inter mb-1 pl-[20px]">NAME:</label>
            <input
              {...register("name")}
              className="border-none bg-greenbg h-11 mb-3 p-4 "
              type="text"
            />
            {errors.name ? (
              <p className="text-base font-inter mb-1 text-rmred">
                {errors.name.message}
              </p>
            ) : null}
            <label className="text-green2 text-base font-inter mb-1 pl-[20px]">E-MAIL:</label>
            <input
              {...register("email")}
              className="border-none bg-greenbg h-11 mb-3 p-4"
              type="url"
            />
            {errors.email ? (
              <p className="text-base font-lora mb-1 text-rmred">
                {errors.email.message}
              </p>
            ) : null}
            <label className="text-green2 text-base font-inter mb-1 pl-[20px]">PHONE NUMBER:</label>
            <input
              {...register("phoneNumber")}
              className="border-none bg-greenbg h-11 mb-3 p-4 "
              type="text"
            />
            {errors.phoneNumber ? (
              <p className="text-base font-lora mb-1 text-rmred">
                {errors.phoneNumber.message}
              </p>
            ) : null}
                       <label className="text-green2 text-base font-inter mb-1 pl-[20px]">PASSWORD:</label>
            <input
              {...register("password")}
              className="border-none bg-greenbg h-11 mb-3 p-4 "
              type="text"
            />
            {errors.password ? (
              <p className="text-base font-lora mb-1 text-rmred">
                {errors.password.message}
              </p>
            ) : null}
            <div className="flex justify-start">
              <button type="submit" className="text-addgreen bg-addgreenbg font-inter h-11 w-20 text-base ml-[20px]">SAVE</button>
            </div>
          </form>
        </div>
      </section>
    );
  };