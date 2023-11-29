import { z } from "zod";
import { clientSchema } from "./client.schemas";


const contactSchema = z.object({
    id: z.number().positive(),
    fullName: z.string().max(45),
    email: z.string().max(45).email(),
    phoneNumber: z.string().min(10),
    registeredAt: z.string().or(z.date()),
    client: clientSchema
})

const contactCreateSchema = contactSchema.omit({
    id: true,
    registeredAt: true,
    client: true
});

const contactReturnSchema = contactSchema;
const contactReadSchema = contactReturnSchema.array();

export { contactSchema, contactCreateSchema, contactReturnSchema, contactReadSchema };