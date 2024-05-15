import { Request, Response } from "express";
import { v4 } from "uuid";
import { Employee } from "../Interfaces/employee.interface";
import { employeeSchema } from "../Validators/employee.Validator";
import { execute } from "../dbHelper/db.Helper";

export const createEmployee = (async (req: Request, res: Response) => {
    try {
        const userId = v4();

        const employee: Employee = req.body;

        const { error } = employeeSchema.validate(req.body);

        if(error) {
            return res.status(200).json({
                error: error.details[0].message
            })
        }

        const procedure = "createEmployee";

        const result = execute(procedure, {
            employeeId: userId,
            firstName: employee.firstName.toLocaleLowerCase(),
            lastName: employee.lastName.toLocaleLowerCase(),
            email: employee.email.toLocaleLowerCase(),
            salary: employee.salary,
            profilePic: employee.profilePic,
            role: employee.role
        });

        return res.status(200).json({
            success: "Employee created successfully!"
        })
    } catch (error) {
        res.status(500).json({
            error
        })
    }
})