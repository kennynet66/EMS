CREATE OR ALTER PROCEDURE createRole(
    @roleId VARCHAR(255),
    @roleName VARCHAR(255),
)
AS
BEGIN
    INSERT INTO Role(roleId, roleName)
    VALUES(@roleId, @roleName)
END