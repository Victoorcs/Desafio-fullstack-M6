import { Column, Entity, PrimaryGeneratedColumn ,ManyToOne} from "typeorm"
import {User } from "./users.entitie"


@Entity("contatos")
class Contato {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    telefone: number;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    dataRegistro: Date;

    @ManyToOne(() => User, user => user.contatos) 
    user: User;

}

export { Contato }