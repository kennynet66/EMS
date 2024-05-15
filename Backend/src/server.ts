import express, { json } from 'express';
import dotenv from 'dotenv';
import authRoutes from './Routes/auth.Routes';
import userRoutes from './Routes/user.Routes';
import cors from 'cors'
import roleRoutes from './Routes/role.Routes';
import employeeRoutes from './Routes/employee.Routes';

const app = express();

// Middleware
app.use(json());
app.use(cors());

dotenv.config();

// Routes
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/role', roleRoutes);
app.use('/employee', employeeRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
    
})