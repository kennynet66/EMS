import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Update() {
  const [profileLink, setProfileLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("");

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

    setUserId(data.info.userId);
  }

  const showSuccess = (msg) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: msg,
      showConfirmButton: true,
    });
  };


  const updatePic = async (e) => {
    e.preventDefault();

    const profilePic = { profileLink };

    const result = await fetch(
      `http://localhost:3000/user/profile-pic/${userId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profilePic),
      }
    );

    const response = await result.json();

    if(response.success){
      showSuccess(response.success);
    }
  };

  const uploadImage = async (e) => {
    setLoading(true);
    const target = e.target;
    const files = target.files;

    if (files) {
      const formData = new FormData();

      formData.append("file", files[0]);
      formData.append("upload_preset", "specialtyImageUploads");
      formData.append("cloud_name", "dtvrzfi1b");
      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dtvrzfi1b/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        // console.log("this is the URL", data.url);
        setProfileLink(data.url);
      } catch (error) {
        console.error("Error uploading image:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <form onSubmit={updatePic}>
      <h3>Update your profile photo</h3>
      <div className="input-div">
        <input type="file" name="" id="" onChange={uploadImage} />
      </div>
      <div className="input-div picU">
        <input type="submit" className="update-btn" value="Update" />
        <Link to="../" className="close-link">
          Close
        </Link>
      </div>
      {loading && <div>Proceccing image...</div>}
    </form>
  );
}
