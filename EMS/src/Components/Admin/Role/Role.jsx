import { useState } from "react";
import "./Role.css";
import Swal from "sweetalert2";
import { Outlet, Link } from "react-router-dom";

export default function Role() {
  const [roleName, setRoleName] = useState("");

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

  const createRole = async (e) => {
    e.preventDefault();

    const role = { roleName };

    const result = await fetch("http://localhost:3000/role/new-role", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(role),
    });

    const data = await result.json();

    if (data.success) {
      const form = document.querySelector(".role-form");
      form.reset;
      showSuccess(data.success);
    } else if (data.error) {
      showError(data.error);
    }
  };
  return (
    <>
      <div className="wrapper">
        <form className="role-form" onSubmit={createRole}>
          <h3>Add a new role</h3>
          <div className="input-div">
            <input
              type="text"
              placeholder="Enter the role name"
              value={roleName}
              // required
              onChange={(e) => {
                setRoleName(e.target.value);
              }}
            />
          </div>
          <div className="input-div">
            <input type="submit" value="Add role" className="add-role-btn" />
          </div>
        </form>

          <Link to="all-roles" className="open-roles">
            Show all roles
          </Link> <br />
        <div className="view-roles">
          <Outlet />
        </div>
      </div>
    </>
  );
}
