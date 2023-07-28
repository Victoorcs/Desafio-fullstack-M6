import { TLoginRequest } from "../interfaces/login.interface"
import createLoginService from "../services/createLogin.service"
import { Request, Response } from "express"



const createLoginController = async (req:Request,res:Response):Promise<Response> =>{

    const loginData:TLoginRequest = req.body
    
    const token = await createLoginService(loginData)

    return res.json({token})
}

export {createLoginController}