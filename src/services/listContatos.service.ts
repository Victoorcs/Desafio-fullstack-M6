import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Contato } from "../entities/contatos.entitie"
import { TContatoResponse } from "../interfaces/contato.interface"
import { contatoSchemaResponse } from "../schemas/contato.shema"


const listContatoService = async ():Promise<TContatoResponse> =>{
    
    const contatoRepository:Repository<Contato> = AppDataSource.getRepository(Contato)

    const contato: Contato[] = await contatoRepository.find()
    
    const returnContato:TContatoResponse = contatoSchemaResponse.parse(contato)

    return returnContato
}

export default listContatoService