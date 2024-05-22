import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function AllRoles() {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    getRoles();
  }, []);

  const showSuccess = (msg) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: msg,
      showConfirmButton: true,
    });
  };

  // Get all roles
  const getRoles = async () => {
    const result = await fetch("http://localhost:3000/role/all-roles", {
      method: "GET",
    });

    const data = await result.json();
    const roleNames = data.success.map((role) => ({
      roleName: role.roleName,
      roleId: role.roleId,
    }));
    setRoles(roleNames);
  };

  // Delete a role
  const deleteRole = async (roleId) => {
    const result = await fetch(`http://localhost:3000/role/delete/${roleId}`, {
      method: "DELETE",
    });

    const data = await result.json();

    if (data.success) {
      showSuccess(data.success);
      // Optionally, refresh the roles list after deletion
      getRoles();
    }
  };

  return (
    <>
      <h4>All roles</h4>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        {/* <thead> */}
          <tr
            style={{
              backgroundColor: "dodgerblue",
              color: "white",
              padding: "8px",
            }}
          >
            <th>No.</th>
            <th style={{ padding: "8px" }}>Role Name</th>
            <th>Actions</th>
          </tr>
        {/* </thead> */}
        <tbody>
          {roles.map((role, index) => (
            <tr
              key={role.roleId}
              style={{
                backgroundColor: index % 2 === 0 ? "white" : "dodgerblue",
                color: index % 2 === 0 ? "#000000" : "#ffffff",
              }}
            >
              <td>{index + 1}.</td>
              <td style={{ padding: "8px" }}>{role.roleName}</td>
              <td>
                <button
                  className="delete-role"
                  onClick={() => deleteRole(role.roleId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="../" className="close-roles">
        Hide
      </Link>
    </>
  );
}
