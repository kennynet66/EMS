import { Router } from "express";
import { loginUser, registerUser } from "../Controllers/auth.Controller";

const authRoutes = Router();

authRoutes.post('/create-user', registerUser);
authRoutes.post('/login-user', loginUser);

export default authRoutes