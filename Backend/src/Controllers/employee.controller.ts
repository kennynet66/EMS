import { Request, Response } from "express";
import { v4 } from "uuid";
import { Employee } from "../Interfaces/employee.interface";
import { employeeSchema } from "../Validators/employee.Validator";
import { execute } from "../dbHelper/db.Helper";
import mssql from 'mssql';
import { sqlConfig } from "../Config/sql.config";
import bcrypt from 'bcrypt';

export const createEmployee = (async (req: Request, res: Response) => {
    try {
        const userId = v4();

        const employee: Employee = req.body;

        const { error } = employeeSchema.validate(req.body);

        if (error) {
            return res.status(200).json({
                error: error.details[0].message
            })
        }

        const password = await bcrypt.hash(employee.password, 5);

        const procedure = "createEmployee";

        const result = (await execute(procedure, {
            employeeId: userId,
            firstName: employee.firstName.toLocaleLowerCase(),
            lastName: employee.lastName.toLocaleLowerCase(),
            email: employee.email.toLocaleLowerCase(),
            salary: employee.salary,
            profilePic: employee.profilePic,
            role: employee.role,
            password: password
        })).rowsAffected;

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
        if (error.number === 2627) {
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

export const getAllEmployees = (async (req: Request, res: Response) => {
    try {
        const pool = await mssql.connect(sqlConfig);

        const result = (await pool.request()
        .execute("allEmployees")
        ).recordset

        return res.json({
            success: result
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
});