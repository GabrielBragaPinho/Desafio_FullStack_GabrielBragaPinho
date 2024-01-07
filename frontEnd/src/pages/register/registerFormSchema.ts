import { z } from "zod";

export const registerFormSchema = z
  .object({
    name: z.string().min(2, "Required."),
    email: z.string().min(1).email("O e-mail fornecido é inválido."),
    password: z.string().min(1)
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Invalid password."
      ).refine(value => value.toString(), {
        message: "Password must be a string."}),
    confirmPassword: z.string().min(8),
    phoneNumber: z.string().min(2, "Required.")
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords do not match.",
      });
    }
  });
export type TRegisterForm = z.infer<typeof registerFormSchema >;