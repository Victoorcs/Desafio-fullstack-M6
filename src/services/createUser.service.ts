
import { AppDataSource } from "../data-source"; 
import { User } from "../entities/users.entitie"; 
import { TUserRequest,TUserResponse } from "../interfaces/users.interface";

import { userSchemaResponse } from "../schemas/users.schema"; 
import { Repository } from "typeorm";



import bcrypt from 'bcryptjs';

const createUserService = async (userData: TUserRequest): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User)

  
  const hashedPassword = await bcrypt.hash(userData.password, 10)

  const user: User = userRepository.create({
    ...userData,
    password: hashedPassword, 
  })

  await userRepository.save(user)

  const returnUser: TUserResponse = userSchemaResponse.parse(user)

  return returnUser
}

export default createUserService;