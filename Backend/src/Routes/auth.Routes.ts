import { Router } from "express";
import { checkUserDetails, loginUser, registerUser } from "../Controllers/auth.Controller";
import { verifyToken } from "../Middleware/verifyToken";

const authRoutes = Router();

authRoutes.post('/create-user', registerUser);
authRoutes.post('/login-user', loginUser);
authRoutes.get('/details', verifyToken, checkUserDetails);

export default authRoutes