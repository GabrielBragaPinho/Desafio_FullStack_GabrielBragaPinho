import { Contact } from "../entities";
import { AppDataSource } from "../data-source";

export default AppDataSource.getRepository(Contact);