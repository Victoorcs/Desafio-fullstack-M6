import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { User } from "../entities/users.entitie"
import { AppError } from "../errors/error"


const deleteUserService = async (userId: number): Promise<void> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
  
    const userToDelete: User | null = await userRepository.findOne({
        where: {id:userId}
        
      })
  
    if (!userToDelete) {
        throw new AppError('User not found',404)
    }
  
    await userRepository.remove(userToDelete)
  }
  
  export default deleteUserService