import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Contato } from "../entities/contatos.entitie" 
import { AppError } from "../errors/error"





const deleteContatoService = async (contatoId: number, userId: number): Promise<void> =>{
  const contatoRepository: Repository<Contato> = AppDataSource.getRepository(Contato)

  const contato: Contato | null = await contatoRepository.findOne({
      where: {
          id: contatoId
      },
      relations: ['user']
  })

  if(!contato){
      throw new AppError('Contact not found', 404)
  }

  if(contato.user.id !== userId){
      throw new AppError('Insufficient permission', 401)
  }

  await contatoRepository.remove(contato)
}

export default deleteContatoService

