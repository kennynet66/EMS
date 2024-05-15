import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Components/Login/login.jsx';
import Signup from './Components/Signup/signup.jsx';
import NotFound from './Components/notFound/notFound.jsx';
import Dashboard from './Components/User/Dashboard/user-dash.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Signup />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
