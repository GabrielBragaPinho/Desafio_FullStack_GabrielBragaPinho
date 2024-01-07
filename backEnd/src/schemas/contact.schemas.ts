import { z } from "zod";


const contactSchema = z.object({
    id: z.number().positive(),
    fullName: z.string().max(45),
    email: z.string().max(45).email(),
    phoneNumber: z.string().max(20),
    registeredAt: z.string().or(z.date()),
})

const contactCreateSchema = contactSchema.omit({
    id: true,
    registeredAt: true,
});

const contactReturnSchema = contactSchema;
const contactRetrieveSchema = contactSchema;
const contactReadSchema = contactReturnSchema.array();
const contactUpdateSchema = contactCreateSchema.partial();

export { contactSchema, contactCreateSchema, contactReturnSchema, contactReadSchema, contactUpdateSchema, contactRetrieveSchema };