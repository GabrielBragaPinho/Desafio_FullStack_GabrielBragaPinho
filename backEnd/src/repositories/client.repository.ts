import { Client } from "../entities";
import { AppDataSource } from "../data-source";

export default AppDataSource.getRepository(Client);