import { clientSchema } from "./client.schemas";


const sessionSchema = clientSchema.pick({ email: true, password: true });

export { sessionSchema };