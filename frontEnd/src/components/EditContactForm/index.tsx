import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

import { ContactContext } from "../../providers/ContactContext/ContactContext";
import { TFormContactEdit } from "./editContactFormSchema"; 
import { editContactFormSchema } from "./editContactFormSchema";


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
            <h1 className="h3Y">CONTACT EDITING</h1>
          </div>
          <form className="flex flex-col " onSubmit={handleSubmit(submit)}>
            <label className="h4">NAME:</label>
            <input {...register("fullName")} className="p" type="text"/>
              {errors.fullName ? (
              <p className="text-base font-inter mb-1 text-rmred">
                {errors.fullName.message}
              </p>
            ) : null}
            <label className="h4">E-MAIL:</label>
            <input {...register("email")} className="p" type="url"/>
              {errors.email ? (
              <p className="text-base font-lora mb-1 text-rmred">
                {errors.email.message}
              </p>
            ) : null}
            <label className="h4">PHONE NUMBER:</label>
            <input {...register("fullName")} className="p" type="text"/>
              {errors.phoneNumber ? (
              <p className="text-base font-lora mb-1 text-rmred">
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