import { Repository } from "typeorm"
import { TUserResponse } from "../interfaces/users.interface"
import { User } from "../entities/users.entitie"
import { AppDataSource } from "../data-source"
import { userSchemaResponse } from "../schemas/users.schema"


const listUsersService = async ():Promise<TUserResponse> =>{
    
    const userRepository:Repository<User> = AppDataSource.getRepository(User)

    const users: User[] = await userRepository.find()
    
    const returnUsers:TUserResponse = userSchemaResponse.parse(users)

    return returnUsers
}

export default listUsersService