// this file is for the Step 2 in the excercise.

// first import the Usercontext and useContext hook.
import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const UserProfile = () => {
  // get the UserContext with the help of useContext hook and destructure the user data.
  const { user } = useContext(UserContext);

  return (
    <div>
        {/* now render the user name in the ui */}
      <h1>User Profile coming from User Profile component.</h1>
      <p>Name : {user.name}</p>
    </div>
  );
};

export default UserProfile;
