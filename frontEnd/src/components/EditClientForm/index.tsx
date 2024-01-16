import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

import { TFormClientEdit } from "./editClientFormSchema"; 
import { editClientFormSchema } from "./editClientFormSchema";
import { ClientContext } from "../../providers/ClientContext/ClientContext";


export const FormEditClient = () => {
    const { handleSubmit, register, formState: { errors }, } = useForm<TFormClientEdit>({resolver: zodResolver(editClientFormSchema), });

    const { client, clientUpdate } = useContext(ClientContext);
    const submit: SubmitHandler<TFormClientEdit> = (formData) => {
      clientUpdate(formData);
    };

    return (
      <section className=" h-full flex flex-col">
        <div className="w-[578px] h-[340px]">
          <div className="flex flex-row justify-between items-center">
            <h1 className="h3Y">
              EDIT YOUR INFORMATION
            </h1>
          </div>
          <form className="flex flex-col w-[578px] h-[200px]" onSubmit={handleSubmit(submit)}>
            <label className="h4">NAME:</label>
            <input
              {...register("name")}
              className="p"
              type="text"
              defaultValue={client?.name}
            />
            {errors.name ? (
              <p className=" mb-1 text-rmred">
                {errors.name.message}
              </p>
            ) : null}
            <label className="h4">E-MAIL:</label>
            <input
              {...register("email")}
              className="p"
              type="text"
              defaultValue={client?.email}
            />
            {errors.email ? (
              <p className="  font-lora mb-1 text-rmred">
                {errors.email.message}
              </p>
            ) : null}
            <label className="h4">PHONE NUMBER:</label>
            <input
              {...register("phoneNumber")}
              className="p"
              type="text"
              defaultValue={client?.phoneNumber}
            />
            {errors.phoneNumber ? (
              <p className=" font-lora mb-1 text-rmred">
                {errors.phoneNumber.message}
              </p>
            ) : null}
            <div className="flex justify-start">
              <button type="submit" className="saveBtn">SAVE</button>
            </div>
          </form>
        </div>
      </section>
    );
  };