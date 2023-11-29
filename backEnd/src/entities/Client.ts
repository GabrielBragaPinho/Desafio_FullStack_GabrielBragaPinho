import { getRounds, hashSync } from "bcryptjs";
import { Entity, Column, OneToMany, BeforeInsert, BeforeUpdate, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

import { Contact } from "./Contact";


@Entity("clients")
export class Client {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 45, unique: true })
    name: string;

    @Column({ length: 45, unique: true })
    email: string;

    @Column({ length: 120 })
    password: string;

    @Column()
    phoneNumber: string;

    @CreateDateColumn({ type: "date" })
    registeredAt: string;

    @OneToMany(() => Contact, (cont) => cont.client)
    contacts: Array<Contact>;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        const hasRounds: number = getRounds(this.password);
        if (!hasRounds) {
            this.password = hashSync(this.password, 10);
        };
    };
}