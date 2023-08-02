import { Request,Response } from "express";
import createContatoService from "../services/createContato.service";
import { TContato, TContatoRequest, TContatoResponse, TContatoUpdateRequest } from "../interfaces/contato.interface";
import updateContatoService from "../services/updateContato.service";
import listContatoService from "../services/listContatos.service";
import deleteContatoService from "../services/deleteContato.service";


const createContatoController = async (req:Request, res:Response): Promise<Response> =>{

    const userId: number = parseInt(res.locals.user.id)
    
    const contatoData: TContatoRequest = req.body

    const contato: TContatoResponse = await createContatoService(userId, contatoData)

    return res.status(201).json(contato)
}



const updateContatoController = async (req: Request, res: Response): Promise<Response> => {

    const userId: number = parseInt(res.locals.user.id)

    const contatoId: number = parseInt(req.params.id)

    const contatoData: TContatoUpdateRequest = req.body

    const contact: TContatoResponse = await updateContatoService(contatoId, contatoData, userId)

    return res.status(200).json(contact)
}


const listContatoController = async (req: Request, res: Response): Promise<Response> => {

    const contatoId: number = parseInt(req.params.id)

    const userId: number = parseInt(res.locals.user.id)

    const contato: TContatoResponse = await listContatoService(contatoId, userId)

    return res.status(200).json(contato)
}


const deleteContatoController = async (req: Request, res: Response): Promise<Response> => {

    const userId: number = parseInt(res.locals.user.id)

    const contatoId: number = parseInt(req.params.id)

    await deleteContatoService(contatoId, userId)

    return res.status(204).send()
}

export{createContatoController,updateContatoController,listContatoController,deleteContatoController}