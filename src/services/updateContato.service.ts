import { DeepPartial, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Contato } from "../entities/contatos.entitie";
import { TContatoRequest, TContatoResponse } from "../interfaces/contato.interface";
import { contatoSchemaResponse } from "../schemas/contato.shema";

const updateContatoService = async (contatoData:TContatoRequest, contatoId:number):Promise<TContatoResponse> =>{
    
    const userRepository:Repository<Contato> = AppDataSource.getRepository(Contato)

    const oldContatoData:Contato | null =  await userRepository.findOneBy({
        id:contatoId,
    })

    const newContatoData:Contato = userRepository.create({
        ...oldContatoData,
        ...contatoData as DeepPartial<Contato>
    })
    await userRepository.save(newContatoData)

    const returnContato:TContatoResponse = contatoSchemaResponse.parse(newContatoData)

    return returnContato
}

export default updateContatoService



