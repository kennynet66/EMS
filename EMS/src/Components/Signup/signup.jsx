import './signup.css'

function Signup(){
    return (
        <div className="content">
        <div className="login">
      <h2>Create your free account</h2>
      <div className="names">
        <input type="text" required className='fisrtName' placeholder='First name' />
        <input type="text" required className='lastName' placeholder='Last name' />
      </div>
      <div className="input-div">
        <input type="email" className="email" required placeholder="Enter your email" />
        <p className="email-err" id="error"></p>
      </div>
      <div className="input-div">
        <input type="password" className="password" required placeholder="Enter your password" />
        <p className="pass-err" id="error"></p>
      </div>
      <div className="input-div">
        <input type="submit" className="login-btn" value="Create Account" />
      </div>
    </div>
    </div>
    )
}

export default Signup