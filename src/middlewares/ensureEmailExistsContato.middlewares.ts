
import { NextFunction, Request, Response } from "express"
import { Repository } from "typeorm"
import { Contato } from "../entities/contatos.entitie"
import { AppDataSource } from "../data-source"
import { AppError } from "../errors/error"


const ensureEmailExistContatoMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    
    const contactRepository: Repository<Contato> = AppDataSource.getRepository(Contato)

    const email: string = req.body.email

    if(email  === undefined){
        next()
    }else{
        const findUser = await contactRepository.find({
            where: {
                email: email
            }
        })

        if(findUser.length > 0){
            throw new AppError('Email already exists', 409)
        }

        next()
    }
}

export default ensureEmailExistContatoMiddleware