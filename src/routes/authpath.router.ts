import { Router } from "express";
import { login } from '../controllers/auth.controller';
const authPath = Router();
authPath.post('/login', login);
export default authPath;