CREATE OR ALTER PROCEDURE createUser(
@firstName VARCHAR(255),
@lastName VARCHAR(255),
@email VARCHAR(255),
@password VARCHAR(255)
)
AS
BEGIN
INSERT INTO Users(
    firstName,
    lastName,
    email,
    password
)
VALUES(
    @firstName, @lastName, @email, @password
)

END