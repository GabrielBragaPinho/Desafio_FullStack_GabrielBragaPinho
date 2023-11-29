import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";

import { Client } from "../entities";
import { clientCreateSchema, clientReadSchema, clientReturnSchema } from "../schemas";


type ClientCreate = z.infer<typeof clientCreateSchema>;
type ClientRead = z.infer<typeof clientReadSchema>;
type ClientReturn = z.infer<typeof clientReturnSchema>;
type ClientUpdate = DeepPartial<Client>;

type ClientRepo = Repository<Client>;

export { ClientCreate, ClientRead, ClientReturn, ClientUpdate, ClientRepo };