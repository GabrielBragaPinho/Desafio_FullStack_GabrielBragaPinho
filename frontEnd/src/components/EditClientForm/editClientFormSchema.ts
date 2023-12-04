import { z } from "zod";


export const editClientFormSchema = z.object({
    name: z
        .string()
        .min(1, "Required."),
    email: z
        .string()
        .min(1, "Required."),
    password: z
        .string().url()
        .min(1, "Required."),
    phoneNumber: z
        .string().url()
        .min(1, "Required."),
});

export type TFormClientEdit = z.infer<typeof editClientFormSchema>;