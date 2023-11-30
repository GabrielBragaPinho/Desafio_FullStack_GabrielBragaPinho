import { z } from "zod";

export const registerFormSchema = z
  .object({
    name: z.string().min(2, "O nome é obrigatório."),
    email: z
      .string()
      .min(1)
      .email("O e-mail fornecido é inválido."),
    password: z
      .string()
      .min(1)
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Senha inválida."
      ),
    confirmPassword: z.string().min(8),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "As senhas não são iguais.",
      });
    }
  });

export type TRegisterForm = z.infer<typeof registerFormSchema >;