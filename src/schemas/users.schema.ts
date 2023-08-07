import {z} from 'zod'
import { contatoSchemaResponse } from './contato.shema'


const userSchema = z.object ({
    id: z.number(),
    name: z.string().max(200),
    email: z.string().email().max(45),
    password: z.string().max(120),
    telefone: z.string().max(10),
    createdAt: z.string()
})

const userSchemaRequest = userSchema.omit({
    id: true,
    createdAt: true
})

const userSchemaResponse = userSchema.omit({
    password: true
})

const updateUserSchema = userSchemaRequest.partial()

const userListSchema = userSchema.omit({
    password: true
}).extend({
    contacts: z.array(contatoSchemaResponse)
})


export { userSchema, userSchemaRequest, userSchemaResponse,updateUserSchema,userListSchema }