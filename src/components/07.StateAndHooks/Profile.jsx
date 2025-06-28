import React, { useState } from "react";

const Profile = () => {
  const [profileInfo, setProfileInfo] = useState({
    name: "",
    age: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProfileInfo((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };
  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={profileInfo.name}
            onChange={handleChange}
            placeholder="Enter Name"
          />
        </label>
      </div>

      <div>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={profileInfo.age}
            onChange={handleChange}
            placeholder="Enter Age"
          />
        </label>
      </div>

      {/* now to render all the profile information */}
      <h3>Profile Information</h3>
      <p>Name : {profileInfo.name}</p>
      <p>Name : {profileInfo.age}</p>
    </div>
  );
};

export default Profile;
