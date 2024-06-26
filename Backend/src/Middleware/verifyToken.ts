import { NextFunction, Request, Response } from "express";
import dotenv from 'dotenv';
import { User } from "../Interfaces/user.Interface";
import jwt from 'jsonwebtoken';
dotenv.config();

export interface ExtendedUserRequest extends Request{
    info?: User
}

export const verifyToken = (async (req: ExtendedUserRequest, res: Response, next: NextFunction) => {
    try {
        const token: string = req.headers['token'] as string;

        if(!token){
            return res.json({
                error: "You do not have access"
            });
        }

        const data = jwt.verify(token, process.env.SECRET as string) as User;

        req.info = data;

    } catch (error) {
        return res.status(500).json({
            error
        })
    }
    next();
});