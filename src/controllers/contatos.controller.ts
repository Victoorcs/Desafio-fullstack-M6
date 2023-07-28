import { Request,Response } from "express";
import createContatoService from "../services/createContato.service";
import { TContato, TContatoRequest, TContatoResponse } from "../interfaces/contato.interface";
import updateContatoService from "../services/updateContato.service";
import listContatoService from "../services/listContatos.service";
import deleteContatoService from "../services/deleteContato.service";


const createContatoController = async (req:Request, res:Response): Promise<Response> =>{

    const contatoData:TContatoRequest = req.body

    const newContato = await createContatoService(contatoData)

    return res.status(201).json(newContato)
}



const updateContatoController = async (req: Request, res: Response): Promise<Response> => {
    
    const contatoData:TContatoRequest = req.body

    const contatoId:number = Number(req.params.id)

    const newContatoData:TContatoResponse = await updateContatoService(contatoData,contatoId)

    return res.json(newContatoData)
}


const listContatoController = async (req:Request,res:Response):Promise<Response> =>{

    const listContato = await listContatoService()

    return res.status(200).json(listContato)
}


const deleteContatoController = async (req: Request, res: Response): Promise<Response> => {

    const contatoId: number = Number(req.params.id)
  
    await deleteContatoService(contatoId)

    return res.status(204).json()
}

export{createContatoController,updateContatoController,listContatoController,deleteContatoController}