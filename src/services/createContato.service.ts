import { AppDataSource } from "../data-source"; 
import { Contato } from "../entities/contatos.entitie";
import { DeepPartial, Repository } from "typeorm";
import { TContato, TContatoRequest, TContatoResponse } from "../interfaces/contato.interface";
import { contatoSchema, contatoSchemaResponse } from "../schemas/contato.shema";
import { User } from "../entities/users.entitie";
import { AppError } from "../errors/error";





const createContatoService = async (userId: number, contatoData: TContatoRequest): Promise<TContatoResponse> => {
  const contatoRepository: Repository<Contato> = AppDataSource.getRepository(Contato)
  const userRepository: Repository<User> = AppDataSource.getRepository(User)

  const user: User | null = await userRepository.findOneBy({
    id: userId,
  })

  if (!user) {
    throw new AppError('user not found', 404);
  }

  const contatoWithId  = {
    ...contatoData,
    user: user,

  }

  const contato: Contato= contatoRepository.create(contatoWithId)

  await contatoRepository.save(contato);

  const contatoCreate = contatoSchemaResponse.parse(contato)

  return contatoCreate
}

export default createContatoService


