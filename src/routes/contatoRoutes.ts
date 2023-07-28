import { Router } from "express";
import { createContatoController, deleteContatoController, listContatoController, updateContatoController } from "../controllers/contatos.controller";
import ensureBodyIsValidMiddleware from "../middlewares/ensureBodyIsValid.middlewares";
import { contatoSchemaRequest, updateContatoSchema } from "../schemas/contato.shema";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middlewares";



const contatoRoutes:Router = Router()

contatoRoutes.post('',ensureBodyIsValidMiddleware(contatoSchemaRequest),createContatoController)

contatoRoutes.patch('/:id',ensureTokenIsValidMiddleware,ensureBodyIsValidMiddleware(updateContatoSchema),updateContatoController)

contatoRoutes.get('',ensureTokenIsValidMiddleware,listContatoController)

contatoRoutes.delete('/:id',ensureTokenIsValidMiddleware,deleteContatoController)

export default contatoRoutes