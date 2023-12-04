import { z } from "zod";

const clientSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(45),
    email: z.string().max(45).email(),
    password: z.string().max(120),
    phoneNumber: z.string().max(15),
    registeredAt: z.string().or(z.date()),
})

const clientCreateSchema = clientSchema.omit({ 
    id: true, 
    registeredAt: true,
});

const clientReturnSchema = clientSchema.omit({ password: true });
const clientReadSchema = clientReturnSchema.array();

const clientUpdateSchema = clientCreateSchema.partial();

export { clientSchema, clientCreateSchema, clientReturnSchema, clientReadSchema, clientUpdateSchema };