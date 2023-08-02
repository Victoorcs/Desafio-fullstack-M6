import { Column, Entity, PrimaryGeneratedColumn ,OneToMany, CreateDateColumn} from "typeorm"
import { Contato } from "./contatos.entitie"

@Entity("users") 
class User {

    @PrimaryGeneratedColumn()
    id:number

    @Column({length:200})
    name:string

    @Column({length: 45,  unique: true })
    email: string

    @Column({length: 120})
    password: string

    @Column({length: 10 })
    telefone: string

    @CreateDateColumn({type:"date"})
    createdAt: string

    @OneToMany(() => Contato, contato => contato.user) 
    contatos: Contato[];

}

export { User }