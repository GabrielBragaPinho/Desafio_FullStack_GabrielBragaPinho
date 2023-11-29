import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

import { Client } from "./Client";


@Entity("contacts")
export class Contact {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 45 })
    fullName: string;

    @Column({ length: 45 })
    email: string;

    @Column()
    phoneNumber: string;

    @CreateDateColumn({ type: "date" })
    registeredAt: string;

    @ManyToOne(() => Client, (cli) => cli.contacts)
    client: Client;
}