import User_side from "../Sidebar/user-side";
import "./user-dash.css";
import { Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <>
      <div className="dashboard">
        <User_side />
        <Outlet></Outlet>
      </div>
    </>
  );
}
