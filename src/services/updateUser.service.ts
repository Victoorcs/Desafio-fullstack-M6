import { Repository } from "typeorm";
import {  TUserResponse, TUserUpdateRequest } from "../interfaces/users.interface";
import { AppDataSource } from "../data-source";
import { User } from "../entities/users.entitie";
import { userSchemaResponse } from "../schemas/users.schema";

const updateUserService = async (userData:TUserUpdateRequest, userId:number):Promise<TUserResponse> =>{
    
    const userRepository:Repository<User> = AppDataSource.getRepository(User)

    const oldUserData:User | null =  await userRepository.findOneBy({
        id:userId,
    })

    const newUserData:User = userRepository.create({
        ...oldUserData,
        ...userData
    })
    await userRepository.save(newUserData)

    const returnUser:TUserResponse = userSchemaResponse.parse(newUserData)

    return returnUser
}

export default updateUserService