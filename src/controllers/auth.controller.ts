import { Request, Response } from "express";

const login = async (req: Request, res: Response): Promise<Response> => {
    req.body

    return res.status(200).json({msg: req.body});
}



export {
    login
};