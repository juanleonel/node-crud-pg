import { getRepository } from 'typeorm';
import { Task } from '../entity/Task';
import { ICrud } from './crud.interface';
 
export class TaskService implements ICrud<Task> {

    public constructor() {
    }

    public async getAll(): Promise<Array<Task>> {
        try { 
            const taskRepository = getRepository(Task);
            return await taskRepository.find(); 
        } catch (error) {
            throw new Error("Can not saved the data" + error);
        }
    }
    public async save(task: Task): Promise<Task> {
        try { 
            const taskRepository = getRepository(Task);
            task = await taskRepository.save(task);
            return task;
        } catch (error) {
            throw new Error("Can not saved the data" + error);
        }
    }

    public async delete(id: number | string): Promise<boolean> {
        try {
            if (!id) { return false;}

            const taskRepository = getRepository(Task);
            let task = await taskRepository.findOne(id);
            if(!task){ return false; }

            let result = await taskRepository.delete(task);
            return result.affected! > 0;
        } catch (error) {
            throw new Error("Can not saved the data" + error);
        }
    }

    public async getById(id: number | string): Promise<Task> {
        try {
            const taskRepository = getRepository(Task);
            let task = await taskRepository.findOne(id);
            return task!;
        } catch (error) {
            throw new Error("Can not saved the data" + error);
        }
    }
}