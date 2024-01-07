import { z } from "zod";


export const editClientFormSchema = z.object({
    name: z.string().optional(),
    email: z.string().email("O e-mail fornecido é inválido.").optional(),
    password: z.string()
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Invalid password."
      ).refine(value => value.toString(), {
        message: "Password must be a string."}).optional(),
    confirmPassword: z.string().optional(),
    phoneNumber: z.string().optional()
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords do not match.",
      });
    }
});

export type TFormClientEdit = z.infer<typeof editClientFormSchema>;