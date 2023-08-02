import { Router } from "express";
import { createContatoController, deleteContatoController, listContatoController, updateContatoController } from "../controllers/contatos.controller";
import ensureBodyIsValidMiddleware from "../middlewares/ensureBodyIsValid.middlewares";
import { contatoSchemaRequest, updateContatoSchema } from "../schemas/contato.shema";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middlewares";
import ensureEmailExistContatoMiddleware from "../middlewares/ensureEmailExistsContato.middlewares";



const contatoRoutes:Router = Router()

contatoRoutes.post('',ensureBodyIsValidMiddleware(contatoSchemaRequest),ensureEmailExistContatoMiddleware,createContatoController)

contatoRoutes.patch('/:id',ensureBodyIsValidMiddleware(updateContatoSchema),ensureEmailExistContatoMiddleware,updateContatoController)

contatoRoutes.get('',listContatoController)

contatoRoutes.delete('/:id',deleteContatoController)

export default contatoRoutes