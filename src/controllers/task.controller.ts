
import { Request, response, Response } from "express";
import { Task } from "../entity/Task";
import { TaskService } from "../services/task.service";
import { ResponseApp } from "../untils/reponseApp";


const taskService = new TaskService();
export const getTasks = async (req: Request, res: Response): Promise<Response> => {
    const tasks = await taskService.getAll();
    let response: ResponseApp = {
        data: tasks,
        message: 'DATA RECIBED',
        status: true
    }; 
    return res.status(200).json(response);
}
export const getTask = async (req: Request, res: Response): Promise<Response> => {
    let task = await taskService.getById( parseInt(req.params.id) );
    let response: ResponseApp = {
        data: task,
        message: 'DATA RECIBED',
        status: true
    }; 
    return res.status(200).json(response);
}

export const createTask = async (req: Request, res: Response): Promise<Response> => {
    let task = req.body as Task;
    taskService.save(task);
    let response: ResponseApp = {
        data: task,
        message: 'DATA SAVED',
        status: true
    }; 
    return res.status(200).json(response);
}

export const updateTask = async (req: Request, res: Response): Promise<Response> => {
    let task = req.body as Task;
    let response: ResponseApp = {
        data: task,
        message: 'DATA UPDATED',
        status: true
    };
    return res.status(200).json(response);
}

export const deleteTask = async (req: Request, res: Response): Promise<Response> => {
    let task = req.body as Task;
    let response: ResponseApp = {
        data: task,
        message: 'DATA UPDATED',
        status: true
    }; 
    return res.status(200).json(response);
}