import { AppDataSource } from "../data-source"; 
import { Contato } from "../entities/contatos.entitie";
import { DeepPartial, Repository } from "typeorm";
import { TContato, TContatoRequest } from "../interfaces/contato.interface";
import { contatoSchema } from "../schemas/contato.shema";



const createContatoService = async (contatoData: TContatoRequest): Promise<TContato> => {
    const userRepository: Repository<Contato> = AppDataSource.getRepository(Contato);
  
    
    const contato: Contato = userRepository.create(contatoData as DeepPartial<Contato>);
  
    await userRepository.save(contato);
  
    
    const returnContato: TContato = contatoSchema.parse(contato);
  
    return returnContato
  }
  
  export default createContatoService