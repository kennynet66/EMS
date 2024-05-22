CREATE
OR ALTER PROCEDURE allEmployees AS BEGIN
SELECT e.employeeId,
    e.firstName,
    e.lastName,
    e.email,
    e.profilePic,
    r.roleName,
    e.salary
FROM Employees e
    INNER JOIN Role r ON e.role = r.roleId
WHERE isAdmin = 0
END