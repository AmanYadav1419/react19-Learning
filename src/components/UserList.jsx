import React from "react";

const UserList = () => {
  const users = [
    { id: 1, name: "Aman", age: 22 },
    { id: 2, name: "Trion", age: 25 },
    { id: 3, name: "Yash", age: 26 },
  ];
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <div>{user.id}</div>
          <div>{user.name}</div>
          <div>{user.age}</div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
