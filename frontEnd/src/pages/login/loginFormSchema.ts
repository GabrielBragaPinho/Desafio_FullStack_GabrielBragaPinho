import { z } from "zod";

export const loginFormSchema = z.object({
    email: z
        .string()
        .min(1),
    password: z
        .string()
        .min(1),
})

export type TLoginForm = z.infer<typeof loginFormSchema>;