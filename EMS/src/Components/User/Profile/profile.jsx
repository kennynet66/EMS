import { useState, useEffect } from "react";

export default function Profile() {
  const [profilePic, setProfilePic] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  window.onload = () => {
    getToken();
  };

  window.addEventListener("DOMContentLoaded", () => {
    getToken();
  });

  const getToken = () => {
    let token = localStorage.getItem("_auth_token");
    console.log(token);
    checkUserDetails(token);
    return token;
  };

  const checkUserDetails = async (token) => {
    const results = await fetch("http://localhost:3000/auth/details", {
      method: "GET",
      headers: {
        token,
      },
    });

    const data = await results.json();


  };

  return (
    <>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <img src={profilePic} alt="" />
    </>
  );
}
