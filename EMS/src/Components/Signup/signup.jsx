import { useState } from "react";
import Navbar from "../Navbar/navbar";
import "./signup.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Show success messages using sweet alert
  const showSuccess = (msg, route) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: msg,
      showConfirmButton: false,
      timer: 1500,
    });

    setTimeout(() => {
      navigate(route)
    }, 1500);
  };
  const showError = (msg) => {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "oops...",
      text: msg,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  // Register user
  const registerUser = async (e) => {
    e.preventDefault();
    const user = { firstName, lastName, email, password };

    const result = await fetch("http://localhost:3000/auth/create-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await result.json();

    if(data.success) {
      showSuccess(data.success, '/login')
    } else if(data.error) {
      showError(data.error)
    }
  };

  return (
    <>
      <Navbar />
      <div className="content">
        <div className="login">
          <h2>Create your free account</h2>
          <form onSubmit={registerUser}>
            <div className="names">
              <input
                type="text"
                required
                className="fisrtName"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                placeholder="First name"
              />
              <input
                type="text"
                required
                className="lastName"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                placeholder="Last name"
              />
            </div>
            <div className="input-div">
              <input
                type="email"
                className="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                placeholder="Enter your email"
              />
              <p className="email-err" id="error"></p>
            </div>
            <div className="input-div">
              <input
                type="password"
                className="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
                placeholder="Enter your password"
              />
              <p className="pass-err" id="error"></p>
            </div>
            <div className="input-div">
              <input
                type="submit"
                className="login-btn"
                value="Create Account"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
