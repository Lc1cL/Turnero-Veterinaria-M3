import { Collection, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "credentials"}) class Credentials {
    @PrimaryGeneratedColumn()
    id!:number;
    @Column()
    username!: string;
    @Column()
    pass!: string;
}

export default Credentials;

// Credential  1:1   User
// Relacion declarada en tabla principla: User