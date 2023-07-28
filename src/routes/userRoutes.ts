import { Router } from "express";
import { createUsersController, deleteUserController, listUsersController, updateUserController } from "../controllers/users.controller";
import ensureBodyIsValidMiddleware from "../middlewares/ensureBodyIsValid.middlewares";
import { updateUserSchema, userSchemaRequest } from "../schemas/users.schema";
import ensureTokenIsValidMiddleware from "../middlewares/ensureTokenIsValid.middlewares";


const userRoutes = Router()


userRoutes.post('',ensureBodyIsValidMiddleware(userSchemaRequest),createUsersController )

userRoutes.get('',ensureTokenIsValidMiddleware,listUsersController)

userRoutes.patch('/:id',ensureTokenIsValidMiddleware,ensureBodyIsValidMiddleware(updateUserSchema),updateUserController)

userRoutes.delete('/:id',ensureTokenIsValidMiddleware,deleteUserController)

export { userRoutes }
