CREATE OR ALTER PROCEDURE deleteUser(@userId VARCHAR(255))
AS
BEGIN
    DELETE FROM Users
    WHERE userId = @userId;
END;