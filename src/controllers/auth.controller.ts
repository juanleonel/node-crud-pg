import { Request, Response } from "express";
import { User } from "../entity/User";
import { UserService } from "../services/user.service";
import bcrypt from 'bcryptjs';

const userService = new UserService();
const login = async (req: Request, res: Response): Promise<Response> => {
    const {correo, password } = req.body;
    try {
        const userExist = await userService.getByEmail(correo);
        if (!userExist){
            return res.status(400).json({msg: 'Usuario/Password no son correctos'});
        }

        const validPassw = bcrypt.compareSync(password, userExist.password);
        if (!validPassw) {
            return res.status(400).json({msg: 'Usuario/Password no son correctos'});
        }

        // generar el webtoken
        

        return res.status(200).json({msg: req.body});
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg: 'Error'});
    }
}



export {
    login
};