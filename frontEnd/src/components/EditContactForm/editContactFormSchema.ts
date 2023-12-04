import { z } from "zod";


export const editContactFormSchema = z.object({
    fullName: z
        .string()
        .min(1, "Required."),
    email: z
        .string()
        .min(1, "Required."),
    phoneNumber:z
        .string().url()
        .min(1, "Required."),
});

export type TFormContactEdit = z.infer<typeof editContactFormSchema>;