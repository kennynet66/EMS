import { Router } from "express";
import { createRole, getRoles } from "../Controllers/role.Controller";

const roleRoutes = Router();

roleRoutes.post('/new-role', createRole);
roleRoutes.get('/all-roles', getRoles);

export default roleRoutes;