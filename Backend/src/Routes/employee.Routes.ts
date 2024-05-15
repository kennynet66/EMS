import { Router } from "express";
import { createEmployee } from "../Controllers/employee.controller";

const employeeRoutes = Router();

employeeRoutes.post('/new-employee', createEmployee);

export default employeeRoutes;;