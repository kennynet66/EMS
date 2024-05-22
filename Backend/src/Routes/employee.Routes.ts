import { Router } from "express";
import { createEmployee, getAllEmployees } from "../Controllers/employee.controller";

const employeeRoutes = Router();

employeeRoutes.post('/new-employee', createEmployee);
employeeRoutes.get('/all-employees', getAllEmployees);

export default employeeRoutes;;