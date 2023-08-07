import { Request,Response } from "express";
import createUserService from "../services/createUser.service";
import { TUserRequest, TUserResponse, TUserUpdateRequest } from "../interfaces/users.interface";
import listUsersService from "../services/listUsers.service";
import updateUserService from "../services/updateUser.service";
import deleteUserService from "../services/deleteUser.service";
import listUserService from "../services/listUsers.service";

const createUsersController = async (req:Request, res:Response): Promise<Response> =>{

    const userData:TUserRequest = req.body

    const newUser = await createUserService(userData)

    return res.status(201).json(newUser)
}

const listUsersController = async (req: Request, res: Response): Promise<void> => {
    const users = await listUserService();
  
    res.status(200).json(users);
  };
  

const updateUserController = async (req: Request, res: Response): Promise<Response> => {
    
    const userData:TUserUpdateRequest = req.body

    const userId:number = Number(req.params.id)

    const newUserData:TUserResponse = await updateUserService(userData,userId)

    return res.json(newUserData)
}

const deleteUserController = async (req: Request, res: Response): Promise<Response> => {

    const userId: number = Number(req.params.id)
  
    await deleteUserService(userId)

    return res.status(204).json()
}

export {createUsersController,listUsersController,updateUserController,deleteUserController}