import { Router } from "express";
import * as  Task from '../controllers/task.controller'
const taskRoutes = Router();

taskRoutes.get('/', Task.getTasks);
taskRoutes.get('/:id', Task.getTask);
taskRoutes.post('/', Task.createTask);
taskRoutes.put('/:id', Task.updateTask);
taskRoutes.delete('/:id', Task.deleteTask);

export default taskRoutes;