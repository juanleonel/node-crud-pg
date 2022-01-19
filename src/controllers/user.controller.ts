
import { Request, response, Response } from "express";
import { User } from '../entity/User';
import { UserService } from "../services/user.service";
import { ResponseApp } from "../untils/reponseApp";
import bcrypt from 'bcryptjs';

const userService = new UserService();
export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    const tasks = await userService.getAll();
    let response: ResponseApp = {
        data: tasks,
        message: 'DATA RECIBED',
        status: true
    }; 
    return res.status(200).json(response);
}
export const getUser = async (req: Request, res: Response): Promise<Response> => {
    let task = await userService.getById( parseInt(req.params.id) );
    let response: ResponseApp = {
        data: task,
        message: 'DATA RECIBED',
        status: true
    }; 
    return res.status(200).json(response);
}

export const createUser = async (req: Request, res: Response): Promise<Response> => {
    let { name, email, password } = req.body;
    let user: User = new User();

    const salt = bcrypt.genSaltSync();
    user.name = name;
    user.email = email;
    user.password = bcrypt.hashSync(password, salt);

    userService.save(user);
    let response: ResponseApp = {
        data: user,
        message: 'DATA SAVED',
        status: true
    }; 
    return res.status(200).json(response);
}

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    let { name, email, password } = req.body;
    let response: ResponseApp = {
        data: name,
        message: 'DATA UPDATED',
        status: true
    };
    return res.status(200).json(response);
}

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    let { id } = req.body;
    let response: ResponseApp = {
        data: id,
        message: 'DATA UPDATED',
        status: true
    }; 
    return res.status(200).json(response);
}