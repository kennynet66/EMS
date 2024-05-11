CREATE OR ALTER PROCEDURE updateProfilePic(@userId VARCHAR(255),  @profilePic VARCHAR(255))
AS
BEGIN
    UPDATE Users
    SET profilePic = @profilePic
    WHERE userId = @userId
END