import { Router } from "express";
import { createRole, deleteRole, getRoles } from "../Controllers/role.Controller";

const roleRoutes = Router();

roleRoutes.post('/new-role', createRole);
roleRoutes.get('/all-roles', getRoles);
roleRoutes.delete('/delete/:id', deleteRole);

export default roleRoutes;