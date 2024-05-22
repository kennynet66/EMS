import { useEffect, useState } from "react";

export default function AllEmployees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = async () => {
    const result = await fetch("http://localhost:3000/employee/all-employees");
    const data = await result.json();

    const employees = data.success.map((employee) => ({
      firstName: employee.firstName,
      lastName: employee.lastName,
      profilePic: employee.profilePic,
      salary: employee.salary,
      employeeId: employee.employeeId,
      roleName: employee.roleName
    }));
    setEmployees(employees);
    console.log(data);
  };

  return (
    <>
      <div className="wrapper">
        <h3>All employees</h3>
        <table style={{ width: "90%", margin: "2%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "dodgerblue", color: "white", padding: "8px" }}>
              <th>Profile Picture</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Salary</th>
              <th>Role</th>
              <th className="actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => {
              return (
                <tr
                  key={employee.employeeId}
                  style={{
                    backgroundColor: index % 2 === 0 ? "white" : "dodgerblue",
                    color: index % 2 === 0 ? "#000000" : "#ffffff",
                  }}
                >
                  <td><img className="profile-pic" src={employee.profilePic} alt="Profile" /></td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.salary}</td>
                  <td>{employee.roleName}</td>
                  <td>
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
