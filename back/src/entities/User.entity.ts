import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Credentials from "./Credentials.entity";
import Turno from "./Turno.entity";

@Entity({name: "users"}) 
class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    birthdate!: string;

    @Column()
    nDni!: number;

    @OneToOne(() => Credentials, { cascade: true })
    @JoinColumn({ name: "credentialId" })
    credential!: Credentials;
    
    //User          1:N   Appointment
    @OneToMany(() => Turno, (turno) => turno.user)
    turnos!: Turno[];
}

export default User;



