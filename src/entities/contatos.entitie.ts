import { Column, Entity, PrimaryGeneratedColumn ,ManyToOne, CreateDateColumn} from "typeorm"
import {User } from "./users.entitie"


@Entity("contatos")
class Contato {

    @PrimaryGeneratedColumn()
    id:number

    @Column({length:200})
    name:string

    @Column({length: 45,  unique: true })
    email: string

    @Column({length: 10 })
    telefone: string

    @CreateDateColumn({type:"date"})
    createdAt: string

    @ManyToOne(() => User, user => user.contatos,{onDelete: 'CASCADE'}) 
    user: User;

}

export { Contato }