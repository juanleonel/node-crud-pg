import { Router } from "express";
import taskRoutes  from '../routes/task.route';

const routes = Router();

routes.use('/tasks', taskRoutes);

export default routes;