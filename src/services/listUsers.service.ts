import { Repository } from "typeorm"
import { TUserResponse } from "../interfaces/users.interface"
import { User } from "../entities/users.entitie"
import { AppDataSource } from "../data-source"
import { userListSchema, userSchemaResponse } from "../schemas/users.schema"
import { AppError } from "../errors/error"


const listUserService = async (): Promise<TUserResponse[]> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);
  
    const users: User[] = await userRepository.find();
  
    const returnUsers: TUserResponse[] = users.map((user) => userSchemaResponse.parse(user));
  
    return returnUsers;
  };
  

export default listUserService