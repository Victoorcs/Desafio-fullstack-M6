import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Contato } from "../entities/contatos.entitie" 
import { AppError } from "../errors/error"



const deleteContatoService = async (userId: number): Promise<void> => {
    const contatoRepository: Repository<Contato> = AppDataSource.getRepository(Contato)
  
    const contatoToDelete: Contato | null = await contatoRepository.findOne({
        where: {id:userId}
        
      })
  
    if (!contatoToDelete) {
        throw new AppError('User not found',404)
    }
  
    await contatoRepository.remove(contatoToDelete)
  }
  
  export default deleteContatoService