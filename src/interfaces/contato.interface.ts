import {z} from 'zod'
import { contatoSchema, contatoSchemaRequest, contatoSchemaResponse } from '../schemas/contato.shema'
import { DeepPartial } from 'typeorm'

type TContato = z.infer<typeof contatoSchema>

type TContatoRequest = z.infer<typeof contatoSchemaRequest>

type TContatoUpdateRequest = DeepPartial<TContato>

type TContatoResponse = z.infer<typeof contatoSchemaResponse>

export {TContato,TContatoRequest,TContatoUpdateRequest,TContatoResponse}