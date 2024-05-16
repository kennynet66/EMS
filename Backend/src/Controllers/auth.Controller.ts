import { Request, Response } from "express";;
import { execute } from "../dbHelper/db.Helper";
import { User } from "../Interfaces/user.Interface";
import bcrypt from 'bcrypt';
import mssql, { MAX } from 'mssql';
import { v4 } from "uuid";
import { sqlConfig } from "../Config/sql.config";
import { loginSchema, registerSchema } from "../Validators/auth.Validator";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { ExtendedUserRequest } from "../Middleware/verifyToken";

const MAXAGE = 3 * 24 * 24 * 60

const createToken = (userDetails: any) => {
    const token = jwt.sign(userDetails, process.env.SECRET as string, {
        expiresIn: MAXAGE
    });

    return token
}

export const registerUser = (async (req: Request, res: Response) => {
    try {

        const user: User = req.body;

        // Validate the user request body
        const { error } = registerSchema.validate(req.body);

        if(error) {
            return res.status(202).json({
                error: error.details[0].message
            })
        }

        const userId = v4();

        const hashPwd = await bcrypt.hash(user.password, 5);

        const procedure = 'createUser';

        const pool = await mssql.connect(sqlConfig)

        const result = (await pool.request()
        .input("firstName", mssql.VarChar, user.firstName)
        .input("lastName", mssql.VarChar, user.lastName)
        .input("email", mssql.VarChar, user.email)
        .input("password", mssql.VarChar, hashPwd)
        .input("userId", mssql.VarChar, userId)
        .execute('createUser')
        ).rowsAffected

        // const result = (await execute(procedure, { userId, firstName: user.firstName.toLocaleLowerCase(), lastName: user.lastName.toLocaleLowerCase(), email: user.email.toLocaleLowerCase(), password: hashPwd })).rowsAffected;

        console.log(result);
        
        // Check if the user has been registered
        if(result[0] >= 1){
            return res.status(200).json({
            success: "User created successfully"
        });
        } else if(result[0] <= 0) {
            return res.status(202).json({
                error: "User already exists try a different email"
            })
        }

        

    } catch (error: any) {
        if(error.originalError.info.number === 2627){
          return res.json({
            error: "User already exists please try a different email"
        })  
        } else {
            return res.status(500).json({
                error
            })
        }
        
    }
});

export const loginUser = (async (req: Request, res: Response) => {
    try {

        const user: User = req.body;

        const { error } = loginSchema.validate(req.body);

        if(error) {
            return res.status(202).json({
                error: error.details[0].message
            })
        }

        const procedure = 'loginUser';

        const result = (await execute(procedure, { email: user.email })).recordset;

        if (result.length >= 1) {
            const correctPwd = await bcrypt.compare(user.password, result[0].password);
            if (correctPwd) {
                const userDetails = {
                    firstName: result[0].firstName,
                    lastName: result[0].lastName,
                    email: result[0].email,
                    userId: result[0].userId,
                    isAdmin: result[0].isAdmin,
                    profilePic: result[0].profilePic
                }
                const token = createToken(userDetails);
        
                return res.status(200).json({
                    success: "Login success",
                    token
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

export const checkUserDetails = (async (req: ExtendedUserRequest, res: Response) => {
    if (req.info) {
        return res.json({
            info: req.info
        })
    }
})