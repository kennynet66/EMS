import "./NewEmployee.css";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function NewEmployee() {
  // State hooks
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [salary, setSalary] = useState("");
  const [password, setPassword] = useState("");
  const [avRoles, setAvRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [profileLink, setProfileLink] = useState("");

  useEffect(() => {
    getRoles()
  }, []);

  const uploadImage = async (e) => {
    setLoading(true);
    const target = e.target;
    const files = target.files;

    if (files) {
      const formData = new FormData();

      formData.append("file", files[0]);
      formData.append("upload_preset", "specialtyImageUploads");
      formData.append("cloud_name", "dtvrzfi1b");
      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dtvrzfi1b/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json(); 
        setProfileLink(data.url);
      } catch (error) {
        console.error("Error uploading image:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const getRoles = async () => {
    const result = await fetch("http://localhost:3000/role/all-roles");

    const data = await result.json();

    const roleNames = data.success.map((role) => ({
      roleName: role.roleName,
      roleId: role.roleId
    }));

    setAvRoles(roleNames);

  };

  const showSuccess = (msg) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: msg,
      showConfirmButton: true,
    });
  };
  const showError = (msg) => {
    Swal.fire({
      position: "center",
      icon: "error",
      title: msg,
      showConfirmButton: true,
    });
  };

  const createEmployee = async (e) => {
    e.preventDefault();

    const employee = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      role: role,
      salary: salary,
      profilePic: profileLink
    };

    const result = await fetch('http://localhost:3000/employee/new-employee', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employee)
    });

    const data = await result.json();

    if(data.success) {
      showSuccess(data.success)
    } else if(data.error) {
      showError(data.error)
    }
  };

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
                type="password"
                name=""
                required
                placeholder="Enter new account password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="input-div">
              <input
                type="file"
                className="profilePic"
                onChange={uploadImage}
                // value={password}
                // onChange={(e) => {
                //   setPassword(e.target.value);
                // }}
                required
              />
              {loading && <div>Processing image...</div>}
              <label htmlFor="">
                <small>
                  {" "}
                  <i>Choose employee profile photo*</i>
                </small>
              </label>
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
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              >
                <option>Select Employee Role</option>
                {avRoles.map((role, index) => {
                  return(
                    <option value={role.roleId} key={index}>{role.roleName}</option>
                  )
                })}
                {/* <option value="Qa Engineer">QA Engineer</option> */}
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
