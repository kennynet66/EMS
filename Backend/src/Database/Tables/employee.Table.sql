CREATE TABLE Employees(
    employeeId VARCHAR(255) UNIQUE,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    salary MONEY,
    profilePic: string,
    role string,
    memberSince DATETIME
)