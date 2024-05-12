import "./login.css";

function Login() {
  return (
    <div className="content">
        <div className="login">
      <h2>Login</h2>
      <div className="input-div">
        <input type="email" className="email" required placeholder="Enter your email" />
        <p className="email-err" id="error"></p>
      </div>
      <div className="input-div">
        <input type="password" className="password" required placeholder="Enter your password" />
        <p className="pass-err" id="error"></p>
      </div>
      <div className="input-div">
        <input type="submit" className="login-btn" value="Login" />
      </div>
    </div>
    </div>
    
  );
}

export default Login;
