import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

import { TFormNewContact } from "./newContactSchema";
import { newContactSchema } from "./newContactSchema";
import { ContactContext } from "../../providers/ContactContext/ContactContext";


export const FormNewContact = () => {
    const {
      handleSubmit,
      register,
      formState: { errors },
    } = useForm<TFormNewContact>({
      resolver: zodResolver(newContactSchema),
    });
    const { addNewContact } = useContext(ContactContext);

    const submit: SubmitHandler<TFormNewContact> = (formData) => {
      addNewContact(formData);
    };

    return (
      <section className="bg-grey h-full flex flex-col items-center">
        <div className="w-[498px] h-[748px]">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-yellow font-inter text-[22px] pl-[200px]">
              ADD CONTACT
            </h1>
          </div>
          <form className="flex flex-col " onSubmit={handleSubmit(submit)}>
            <label className="text-green2 text-base font-inter mb-1 pl-[20px]">NAME:</label>
            <input
              {...register("fullName")}
              className="border-none bg-greenbg h-11 mb-3 p-4 "
              type="text"
            />
            {errors.fullName ? (
              <p className="text-base font-inter mb-1 text-rmred">
                {errors.fullName.message}
              </p>
            ) : null}
            <label className="text-green2 text-base font-inter mb-1 pl-[20px]">E-MAIL:</label>
            <input
              {...register("email")}
              className="border-none bg-greenbg h-11 mb-3 p-4"
              type="text"
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
            <div className="flex justify-start">
              <button type="submit" className="text-addgreen bg-addgreenbg font-inter h-11 w-20 text-base ml-[20px]">SAVE</button>
            </div>
          </form>
        </div>
      </section>
    );
  };