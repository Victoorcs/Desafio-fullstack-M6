import "reflect-metadata"
import "express-async-errors"
import express from "express"
import { userRoutes } from "./routes/userRoutes"
import { handleErros } from "./errors/error" 
import loginRoutes from "./routes/loginRoutes"
import contatoRoutes from "./routes/contatoRoutes"

const app = express()

app.use(express.json())
app.use("/users", userRoutes)
app.use('/login',loginRoutes)
app.use('/contacts',contatoRoutes)

app.use(handleErros)

export default app