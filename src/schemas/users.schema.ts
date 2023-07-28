import {z} from 'zod'


const userSchema = z.object ({
    id:z.number(),
    name:z.string(),
    email:z.string().email(),
    password:z.string(),
    telefone: z.number(),
    dataRegistro: z.date().default(() => new Date()),
})

const userSchemaRequest = userSchema.omit({
    id: true
})

const userSchemaResponse = userSchema.omit({
    password: true
})

const updateUserSchema = userSchemaRequest.partial()


export { userSchema, userSchemaRequest, userSchemaResponse,updateUserSchema }