import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

export default function AdminSide() {
  const openDashDrop = () => {
    const btn = document.querySelector(".side-links");
    // const btn2 = document.querySelector()
    btn.classList.remove("perfomance-active");
    btn.classList.toggle("main-active");
  };

  const openPdrop = () => {
    const btn = document.querySelector(".side-links");
    btn.classList.remove("main-active");
    btn.classList.toggle("perfomance-active");
  };

  return (
    <>
      <div className="side">
        <div className="logo">
          <img src={logo} className="logo-img" alt="" />
        </div>
        <div className="side-links">
          <div className="main-link" onClick={openDashDrop}>
            <p>Dashboard</p>
            <div className="bars">
              <div className="bar">V</div>
            </div>
          </div>
          <ul className="fast-links">
            <Link to="new-role" className="side-link">
              Add a new role
            </Link>
            <Link to="" className="side-link">
              Employees
            </Link>
            <Link to="new-employee" className="side-link">
              New Employee
            </Link>
            <Link to="" className="side-link">
              Payroll
            </Link>
          </ul>
          <div className="perfomance-links" onClick={openPdrop}>
            <p>Perfomance</p>
            <div className="bars">
              <div className="perfomance-bar">V</div>
            </div>
          </div>
          <ul className="Pfast-links">
            <Link className="side-link">Profits & Loss</Link>
            <Link className="side-link">Earnings</Link>
            <Link className="side-link">Ratings</Link>
          </ul>
        </div>

        <button className="logout-btn">Logout</button>
      </div>
    </>
  );
}
