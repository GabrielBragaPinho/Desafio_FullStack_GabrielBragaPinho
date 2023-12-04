import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

import { TFormContactEdit } from "./editContactFormSchema"; 
import { editContactFormSchema } from "./editContactFormSchema";
import { ContactContext } from "../../providers/ContactContext/ContactContext";


export const FormEditContact = () => {
    const {
      handleSubmit,
      register,
      formState: { errors },
    } = useForm<TFormContactEdit>({
      resolver: zodResolver(editContactFormSchema),
    });
    const { handleEditContact, currentContact } = useContext(ContactContext);

    const currentId = currentContact?.id;

    const submit: SubmitHandler<TFormContactEdit> = (formData) => {
      handleEditContact(formData, currentId);
    };

    return (
      <section className="bg-grey h-full flex flex-col items-center">
        <div className="w-[578px] h-[748px]">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-yellow font-inter text-[22px] pl-[200px]">
              Contact Editing
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
              type="url"
            />
            {errors.email ? (
              <p className="text-base font-lora mb-1 text-rmred">
                {errors.email.message}
              </p>
            ) : null}
            <label className="text-green2 text-base font-inter mb-1 pl-[20px]">PHONE NUMBER:</label>
            <input
              {...register("fullName")}
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