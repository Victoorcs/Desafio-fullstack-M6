import { z } from 'zod'


const contatoSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
    telefone: z.number(),
    dataRegistro: z.date().optional(),
    user: z.number().int(), 
  })

const contatoSchemaRequest = contatoSchema.omit({
    id: true
})

const contatoSchemaResponse = z.array(contatoSchema)

const updateContatoSchema = contatoSchemaRequest.partial()


  export {contatoSchema,contatoSchemaRequest,updateContatoSchema,contatoSchemaResponse}