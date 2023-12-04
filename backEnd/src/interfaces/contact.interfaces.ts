import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";

import { Contact } from "../entities";
import { contactCreateSchema, contactReadSchema, contactReturnSchema } from "../schemas";


type ContactCreate = z.infer<typeof contactCreateSchema>;
type ContactRead = z.infer<typeof contactReadSchema>;
type ContactReturn = z.infer<typeof contactReturnSchema>;
type ContactUpdate = DeepPartial<Contact>;

type ContactRepo = Repository<Contact>;

export { ContactCreate, ContactRead, ContactReturn, ContactRepo, ContactUpdate };