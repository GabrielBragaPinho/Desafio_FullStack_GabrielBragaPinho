import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { Client } from "../entities";
import { AppError } from "../errors";
import { clientRepository } from "../repositories";
import { SessionCreate, SessionReturn } from "../interfaces";

const create = async ({ email, password }: SessionCreate): Promise<SessionReturn> => {
    const foundClient: Client | null = await clientRepository.findOneBy({ email });
    if (!foundClient) throw new AppError("Invalid credentials", 401);

    const samePwd: boolean = await compare(password, foundClient.password);
    if (!samePwd) throw new AppError("Invalid credentials", 401);

    const token: string = sign({ name: foundClient.name }, process.env.SECRET_KEY!,
    { subject: foundClient.id.toString(), expiresIn: process.env.EXPIRES_IN! }
    );

    return { token };
};

export default { create };