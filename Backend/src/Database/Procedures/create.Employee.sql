CREATE OR ALTER PROCEDURE createEmployee(
    @employeeId VARCHAR(255),
    @firstName VARCHAR(255),
    @lastName VARCHAR(255),
    @email VARCHAR(255),
    @salary MONEY,
    @profilePic VARCHAR(255),
    @role VARCHAR(255),
    @password VARCHAR(255)
)
AS
BEGIN
    INSERT INTO Employees(
        employeeId,
        firstName,
        lastName,
        email,
        salary,
        profilePic,
        role,
        memberSince,
        password
    )
    VALUES(
        @employeeId,
        @firstName,
        @lastName,
        @email,
        @salary,
        @profilePic,
        @role,
        GETDATE(),
        @password
    )
END