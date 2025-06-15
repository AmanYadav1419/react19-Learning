import React from "react";

const UserStatus = ({ loggedIn, isAdmin }) => {
  return (
    <div>
      <h1>User Status Task for Conditional Rendering in React:</h1>

      {loggedIn && isAdmin && <h3>Welcome Admin!</h3>}

      {loggedIn && <h3>Welcome User!</h3>}
    </div>
  );
};

export default UserStatus;
