import { Router } from "express";
import { allUsers, deleteUser, oneUser, updateProfilePic } from "../Controllers/user.Controller";

const userRoutes = Router();

userRoutes.get('/all-users', allUsers);
userRoutes.get('/one-user/:id', oneUser);
userRoutes.delete('/delete-user/:id', deleteUser);
userRoutes.post('/profile-pic/:id', updateProfilePic)

export default userRoutes;