import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";


@Entity ({ name: "turnos"}) class Turno {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    date!: Date;
    @Column()
    time!: string;
    @Column({default: "active"})
    status!: string;
    
    @Column()
    description!: string;

    @ManyToOne(() => User, (user) => user.turnos)
    user!: User;
}

export default Turno;

//Appointment   N:1   User
// Relacion declarada en tabla principla: User
