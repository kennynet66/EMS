import { Request, Response } from "express";;
import { execute } from "../dbHelper/db.Helper";
import { User } from "../Interfaces/user.Interface";
import bcrypt from 'bcrypt';

export const registerUser = (async (req: Request, res: Response) => {
    try {

        const user: User = req.body;
        const userId = "trym1kiefm-e2sbjdiueg-s3xyegugrp";

        const hashPwd = await bcrypt.hash(user.password, 5);

        const procedure = 'createUser';

        await execute(procedure, { userId, firstName: user.firstName, lastName: user.lastName, email: user.email, password: hashPwd });

        return res.status(200).json({
            success: "User created successfully"
        })

    } catch (error) {
        return res.status(500).json({
            error
        })
    }
});

export const loginUser = (async (req: Request, res: Response) => {
    try {

        const user: User = req.body;

        const procedure = 'loginUser';

        const result = (await execute(procedure, { email: user.email })).recordset;

        if (result.length >= 1) {
           const correctPwd = await bcrypt.compare(user.password, result[0].password);
           if(correctPwd) {
            return res.status(200).json({
                success: "Login success"
            });
           } else {
            return res.json({
                error: "Incorrect password"
            })
           }
        } else {
            return res.json({
                error: "User not found"
            })
        }
    } catch (error) {
        return res.status(500).json({
            error: "internal server error"
        }
        )
    }
});