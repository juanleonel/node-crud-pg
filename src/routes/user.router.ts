import { Router } from "express";
import * as  User from '../controllers/user.controller'
const userRoutes = Router();

userRoutes.get('/', User.getUsers);
userRoutes.get('/:id', User.getUser);
userRoutes.post('/', User.createUser);
userRoutes.put('/:id', User.updateUser);
userRoutes.delete('/:id', User.deleteUser);

export default userRoutes;