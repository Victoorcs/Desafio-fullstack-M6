import { Column, Entity, PrimaryGeneratedColumn ,OneToMany} from "typeorm"
import { Contato } from "./contatos.entitie"

@Entity("users") 
class User {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    telefone: number;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    dataRegistro: Date;

    @OneToMany(() => Contato, contato => contato.user) 
    contatos: Contato[];

}

export { User }