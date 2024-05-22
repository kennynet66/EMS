import { Request, Response } from "express";
import { roleValidator } from "../Validators/role.Validator";
import { v4 } from "uuid";
import { execute } from "../dbHelper/db.Helper";
import mssql from 'mssql';
import { sqlConfig } from "../Config/sql.config";

export const createRole = (async (req: Request, res: Response) => {
    try {
        const roleId = v4();
        const { roleName } = req.body;

        const { error } = roleValidator.validate(req.body);

        if (error) {
            return res.status(202).json({
                error: error.details[0].message
            });
        }

        const procedure = "createRole";

        const result = (await execute(procedure, { roleId, roleName }));

        return res.status(200).json({
            success: "Role added successfully!"
        });
    } catch (error) {
        return res.status(500).json({
            error
        });
    }
});

// Get all available roles
export const getRoles = (async (req: Request, res: Response) => {
    try {
        const pool = await mssql.connect(sqlConfig);

        const result = (await pool.request()
        .query('SELECT * FROM Role')
        ).recordset;

        return res.status(200).json({
            success: result
        })
    } catch (error) {
        return res.status(500).json({
            error
        });
    }
});

// Delete role
export const deleteRole = (async (req: Request, res: Response) => {
    try {
        const roleId = req.params.id;
        
        let procedure = "deleteRole";
        const result = await execute(procedure, {roleId});

        return res.status(200).json({
            success: "Role deleted successfully"
        })
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
});