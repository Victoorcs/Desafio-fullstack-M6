import { DeepPartial, Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Contato } from "../entities/contatos.entitie";
import { TContato, TContatoRequest, TContatoResponse, TContatoUpdateRequest } from "../interfaces/contato.interface";
import { contatoSchemaResponse } from "../schemas/contato.shema";
import { AppError } from "../errors/error";

const updateContatoService = async (contatoId: number, contatoData: TContatoUpdateRequest, userId: number): Promise<TContato> => {
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

    const contactUpdated = contatoRepository.create({
        ...contato,
        ...contatoData
    })

    await contatoRepository.save(contactUpdated)

    return contatoSchemaResponse.parse(contactUpdated)
}

export default updateContatoService



