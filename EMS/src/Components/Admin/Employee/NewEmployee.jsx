import "./NewEmployee.css";
import { useState } from "react";

export default function NewEmployee() {
  // State hooks
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [salary, setSalary] = useState("");

  const createEmployee = (e) => {
    e.preventDefault();

    const employee = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      role: role,
      salary: salary
    }

    console.log(employee);
  }

  return (
    <>
      <div className="new-employee">
        <div className="form">
          <h2>Add a new employee</h2>
          <form onSubmit={createEmployee}>
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
                type="file"
                className="profilePic"
                // value={password}
                // onChange={(e) => {
                //   setPassword(e.target.value);
                // }}
                required
              />
              <label htmlFor=""><small> <i>Choose employee profile photo*</i></small></label>
              <p className="pass-err" id="error"></p>
            </div>
            <div className="input-div">
              <input
                type="number"
                required
                value={salary}
                onChange={(e) => {
                  setSalary(e.target.value);
                }}
                min={5000}
                placeholder="Enter salary"
              />
            </div>
            <div className="input-div">
              <select
                name="role"
                id=""
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              >
                <option >Select Employee Role</option>
                <option value="Qa Engineer">QA Engineer</option>
              </select>
            </div>
            <div className="input-div">
              <input type="submit" className="login-btn" value="Add Employee" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
