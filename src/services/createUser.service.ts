import { hash } from "bcryptjs";
import { AppDataSource } from "../data-source"; 
import { User } from "../entities/users.entitie"; 
import { TUserRequest,TUserResponse } from "../interfaces/users.interface";

import { userSchemaResponse } from "../schemas/users.schema"; 
import { Repository } from "typeorm";



const createUserService = async (userData:TUserRequest):Promise <TUserResponse> =>{

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user:User = userRepository.create(userData)

    await userRepository.save(user)

    const returnUser:TUserResponse = userSchemaResponse.parse(user)

    return returnUser
}

export default createUserService