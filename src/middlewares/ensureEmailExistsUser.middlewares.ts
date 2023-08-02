import { NextFunction, Request, Response } from "express"
import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { AppError } from "../errors/error"
import { User } from "../entities/users.entitie"


const ensureEmailExistUserMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    
    const ClientsRepository: Repository<User> = AppDataSource.getRepository(User)

    const email: string = req.body.email

    if(email  === undefined){
        next()
    }else{
        const findClient = await ClientsRepository.find({
            where: {
                email: email
            }
        })

        if(findClient.length > 0){
            throw new AppError('Email already exists', 409)
        }

        next()
    }
}

export default ensureEmailExistUserMiddleware