import "./user-side.css";
import logo from '../../../assets/logo.png'
export default function User_side() {
  return (
    <>
      <div className="side">
        <div className="logo">
            <img src={logo} className="logo-img" alt="" />
        </div>
      </div>
    </>
  );
}
