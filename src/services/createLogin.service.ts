import { Repository } from "typeorm";
import { TLoginRequest } from "../interfaces/login.interface";
import { User } from "../entities/users.entitie";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/error"; 
import { compare } from "bcryptjs";
import  jwt  from "jsonwebtoken";
import 'dotenv/config'


const createLoginService = async(loginData:TLoginRequest):Promise<string> =>{

    const userRepository:Repository<User> = AppDataSource.getRepository(User)

    const user:User | null = await userRepository.findOne({
        where:{
            email:loginData.email
        }
    })
    if(!user){
        throw new AppError("User not found", 401)
    }

    const passwordMatch = await compare(loginData.password,user.password)

    if(!passwordMatch){
        throw new AppError("Invalid password",401)
    }
    
    const token = jwt.sign(
        {

        },
        String(process.env.SECRET_KEY),
        {
            expiresIn:'24h',
            subject:String(user.id)
        }
    )

    return token
}

export default createLoginService