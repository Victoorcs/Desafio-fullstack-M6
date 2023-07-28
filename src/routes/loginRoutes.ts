import { Router } from "express";
import { createLoginController } from "../controllers/createLogin.controller";
import ensureBodyIsValidMiddleware from "../middlewares/ensureBodyIsValid.middlewares";
import { loginSchema } from "../schemas/login.schema";


const loginRoutes:Router = Router()

loginRoutes.post('',ensureBodyIsValidMiddleware(loginSchema),createLoginController)


export default loginRoutes