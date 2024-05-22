import { useState, useEffect } from "react";
import "./profile.css";
import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  const [loading, setLoading] = useState(true);
  const [profilePic, setProfilePic] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // getToken()
    const token = getToken();

    checkUserDetails(token);
  }, []);

  const getToken = () => {
    return localStorage.getItem("_auth_token");
  };

  const checkUserDetails = async (token) => {
    const results = await fetch("http://localhost:3000/auth/details", {
      method: "GET",
      headers: {
        token,
      },
    });

    const data = await results.json();
    console.log(data);
    setFirstName(data.info.firstName);
    setLastName(data.info.lastName);
    setProfilePic(data.info.profilePic);
    setEmail(data.info.email);
    setLoading(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="profile">
        <div className="profile-div">
          <img src={profilePic} alt="" className="profile-pic" />
        </div>
        <h4>
          {firstName} {lastName}
        </h4>
        <p>{email}</p>
        <div className="update-pic">
          <Link to="update-profile" className="pic-link">Update profile</Link>
        </div>
        <Outlet />
      </div>
    </>
  );
}
