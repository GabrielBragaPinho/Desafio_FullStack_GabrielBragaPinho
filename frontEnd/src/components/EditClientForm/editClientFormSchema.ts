import { z } from "zod";


export const editClientFormSchema = z.object({
    name: z.string().optional(),
    email: z.string().email("O e-mail fornecido é inválido.").optional(),
    phoneNumber: z.string().optional()
});

export type TFormClientEdit = z.infer<typeof editClientFormSchema>;