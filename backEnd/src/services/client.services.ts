import { Client } from "../entities";
import { clientRepository } from "../repositories";
import { ClientCreate, ClientRead, ClientReturn, ClientUpdate, Pagination, PaginationParams } from "../interfaces";
import { clientReturnSchema } from "../schemas";


const create = async (payload: ClientCreate): Promise<ClientReturn> => {
    const client: Client = clientRepository.create(payload)
    await clientRepository.save(client);
    return clientReturnSchema.parse(client);
};

const read = async ({ nextPage, page, perPage, prevPage, order, sort }: PaginationParams): Promise<Pagination> => {
    const [ clients, count ]: Array<ClientRead | number> = await clientRepository.findAndCount({ order: { [sort]: order }, skip: page, take: perPage });

    return { prevPage: page <= 1 ? null: prevPage, nextPage: count - page <= perPage ? null : nextPage, count, data: clients };
};

const partialUpdate = async (client: Client, payload: ClientUpdate): Promise<Client> => {
    return await clientRepository.save({ ...client, ...payload });
};

const destroy = async (client: Client): Promise<void> => {
    await clientRepository.remove(client);
};

export default  { create, read, destroy, partialUpdate };