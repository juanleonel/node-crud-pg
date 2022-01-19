import { Router } from "express";
import taskRoutes  from '../routes/task.route';
import authPath from './authpath.router';
import userRoutes from "./user.router";

const routes = Router();

routes.use('/api/tasks', taskRoutes);
routes.use('/api/users', userRoutes);
routes.use('/api/auth', authPath);

export default routes;
