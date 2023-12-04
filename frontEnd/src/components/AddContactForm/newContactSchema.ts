import { z } from "zod";


export const newContactSchema = z.object({
    fullName: z
        .string()
        .min(1, "Required2."),
    email: z
        .string(),
        // .min(1, "Required."),
    phoneNumber: z
        .string()
        .min(1, "Required1.")
});

export type TFormNewContact = z.infer<typeof newContactSchema>;