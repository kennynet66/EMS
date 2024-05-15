import "./user-side.css";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

export default function User_side() {
  const openDashDrop = () => {
    const btn = document.querySelector(".side-links");
    btn.classList.toggle("main-active");
  };

  const openPdrop = () => {
    const btn = document.querySelector(".side-links");
    btn.classList.toggle("perfomance-active");
  };

  return (
    <>
      <div className="side">
        <div className="logo">
          <img src={logo} className="logo-img" alt="" />
        </div>
        <div className="side-links">
          {/* <div> */}

          <div className="main-link" onClick={openDashDrop}>
            <p>Dashboard</p>
            <div className="bars">
              <div className="bar">V</div>
            </div>
          </div>
          <ul className="fast-links">
            <li>
              <Link className="side-link">Assigned to me</Link>
            </li>
            <li>
              <Link className="side-link">Completed</Link>
            </li>
            <li>
              <Link className="side-link">Request leave</Link>
            </li>
          </ul>
          {/* </div> */}
          <div className="perfomance-links" onClick={openPdrop}>
            <p>Perfomance</p>
            <div className="bars">
              <div className="perfomance-bar">V</div>
            </div>
          </div>
          <ul className="Pfast-links">
            <li>
              <Link className="side-link">Attendance</Link>
            </li>
            <li>
              <Link className="side-link">Earnings</Link>
            </li>
            <li>
              <Link className="side-link">Ratings</Link>
            </li>
          </ul>
        </div>

        <button className="logout-btn">Logout</button>
      </div>
    </>
  );
}
