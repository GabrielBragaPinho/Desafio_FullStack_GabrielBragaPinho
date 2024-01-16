import z from "zod";

import { sessionSchema } from "../schemas";
import { Client } from "../entities";


type SessionCreate = z.infer<typeof sessionSchema>;
type SessionReturn = { token: string, foundClient: Client };

export { SessionCreate, SessionReturn };