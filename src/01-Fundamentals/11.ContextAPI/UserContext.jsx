// this file is for the Step 1 in the excercise.
import { createContext, useState } from "react";

// creating a UserContext.
const UserContext = createContext();

// creating a UserProvider
const UserProvider = ({ children }) => {
  // creating a state variable to store the data.
  const [user, setUser] = useState({ name: "Jhon Doe" });

  // function to update the user, it will accept the user name in the params.
  const updateUser = (updateName) => {
    // and then update the state to with the provided name.
    setUser({ name: updateName });
    console.log("update new name :-", updateName);
  };

  // now returning usercontext with the data passing as in the value.
  // we will pass the user and the function to update the user , in the value.
  // and it will render the children element
  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

// export the context and provider so that can use in other files.
export { UserContext, UserProvider };
