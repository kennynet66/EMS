import { Request, Response } from "express";
import { execute } from "../dbHelper/db.Helper";

// Get all users
export const allUsers = (async (req: Request, res: Response) => {
    try {
        const procedure = "allUsers";

        const results = (await execute(procedure)).recordset;

        return res.status(200).json({
            users: results
        })

    } catch (error) {
        return res.status(500).json({
            error
        });
    }
});

// Get one user
export const oneUser = (async (req: Request, res: Response) => {
    try {
        const userId: string = req.params.id as string;

        const procedure = "oneUser";

        const result = (await execute(procedure, { userId })).recordset;

        return res.status(200).json({
            user: result
        })
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
});

// Delete a user using their userId
export const deleteUser = (async(req: Request, res: Response) => {
    try {
        const userId = req.params.id;

        const procedure = "deleteUser";

        const result = (await execute(procedure, { userId }));

        return res.status(200).json({
            success: "Deleted successfully"
        })
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
})

// Update the profile pic
export const updateProfilePic = (async (req: Request, res: Response) => {
    try {
        const userId: string = req.params.id as string;

        const { profilePic } = req.body;

        const procedure = 'updateProfilePic';

        const result = (await execute(procedure, { userId, profilePic }));

        return res.status(200).json({
            success: "Profile pic updated successfully"
        })
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
})