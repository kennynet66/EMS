import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login/login.jsx";
import Signup from "./Components/Signup/signup.jsx";
import NotFound from "./Components/notFound/notFound.jsx";
import Dashboard from "./Components/User/Dashboard/user-dash.jsx";
import Profile from "./Components/User/Profile/profile.jsx";
import AdminDash from "./Components/Admin/Dash/AdminDash.jsx";
import Role from "./Components/Admin/Role/Role.jsx";
import AllRoles from "./Components/Admin/Role/allRoles.jsx";
import NewEmployee from "./Components/Admin/Employee/NewEmployee.jsx";
import Update from "./Components/User/Profile/update.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Signup />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "profile",
        element: <Profile />,
        children: [
          {
            path: 'update-profile',
            element: <Update />
          }
        ]
      },
    ],
  },
  {
    path: "admin",
    element: <AdminDash />,
    children: [
      {
        path: "new-role",
        element: <Role />,
        children: [
          {
            path: "all-roles",
            element: <AllRoles />,
          },
        ],
      },
      {
        path: "new-employee",
        element: <NewEmployee />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
