import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";

import { Contact } from "../entities";
import { contactCreateSchema, contactReadSchema, contactRetrieveSchema, contactReturnSchema } from "../schemas";


type ContactCreate = z.infer<typeof contactCreateSchema>;
type ContactRead = z.infer<typeof contactReadSchema>;
type ContactRetrieve = z.infer<typeof contactRetrieveSchema>;
type ContactReturn = z.infer<typeof contactReturnSchema>;
type ContactUpdate = DeepPartial<Contact>;

type ContactRepo = Repository<Contact>;

export { ContactCreate, ContactRead, ContactReturn, ContactRepo, ContactUpdate, ContactRetrieve };