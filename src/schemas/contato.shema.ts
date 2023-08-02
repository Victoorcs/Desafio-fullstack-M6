import { z } from 'zod'


const contatoSchema = z.object({
  id: z.number(),
  name: z.string().max(200),
  email: z.string().email().max(45),
  telefone: z.string().max(10),
  createdAt: z.string()
  })

const contatoSchemaRequest = contatoSchema.omit({
    id: true,
    createdAt: true,
})

const contatoSchemaResponse = contatoSchema

const updateContatoSchema = contatoSchemaRequest.partial()


  export {contatoSchema,contatoSchemaRequest,updateContatoSchema,contatoSchemaResponse}