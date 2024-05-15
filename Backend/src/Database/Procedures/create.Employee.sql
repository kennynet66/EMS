CREATE OR ALTER PROCEDURE createEmployee(
    @employeeId VARCHAR(255),
    @firstName VARCHAR(255),
    @lastName VARCHAR(255),
    @email VARCHAR(255),
    @salary MONEY,
    @profilePic: string,
    @role string,
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
        memberSince
    )
    VALUES(
        @employeeId,
        @firstName,
        @lastName,
        @email,
        @salary,
        @profilePic,
        @role
        GETDATE()
    )