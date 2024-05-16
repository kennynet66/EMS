import { Outlet } from "react-router-dom";
import AdminSide from "../Side/AdminSide";

export default function AdminDash() {
  return (
    <>
      <div className="dashboard">
        <AdminSide />
        <Outlet />
      </div>
    </>
  );
}
