import { useState } from "react";
import Navbar from "../Navbar/navbar";
import "./login.css";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const showSuccess = (msg, route) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: msg,
      showConfirmButton: false,
      timer: 1500
    })

    setTimeout(() => {
      navigate(route)
    }, 1500);
  }
  const showError = (msg) => {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "oops...",
      text: msg,
      showConfirmButton: false,
      timer: 1500
    })
  }

  const loginUser = async (e) => {
    e.preventDefault();

    const user = { email, password };

    const result = await fetch('http://localhost:3000/auth/login-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user),
    });

    const data = await result.json()
    console.log(data);
    
    if(data.success) {
      showSuccess(data.success, '/dashboard');
      localStorage.setItem('_auth_token', data.token);
    } else if(data.error) {
      showError(data.error)
    }
  };

  return (
    <>
      <Navbar />
      <div className="content">
        <div className="login">
          <h2>Login</h2>
          <form onSubmit={loginUser}>
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
                onChange={(e) => {setPassword(e.target.value)}}
                required
                placeholder="Enter your password"
              />
              <p className="pass-err" id="error"></p>
            </div>
            <div className="input-div">
              <input type="submit" className="login-btn" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
