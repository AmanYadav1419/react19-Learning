// this file is for the Step 3 in the excercise.
// importing essential things like useContext , useState hook and the UserContext

import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const UpdateUserComponent = () => {
  // get the userContext data with the help of the usecontext hook, i.e updateUser
  const { updateUser } = useContext(UserContext);

  // now to update the user , first create a state
  const [newName, setNewName] = useState("");
  
  // on form submit calling the function
  const handleFormSubmit = (e) => {
    // first we have to prevent the default behaviour of form.
    // so that form and ui will not reloads.
    e.preventDefault();

    // and now we will update the user
    if (newName.trim()) {
      // if name exits then passing the name to the function, to update the user.
      updateUser(newName);

      // and then make state empty
      setNewName("");
    }
  };

  // function to handle on change event on the input
  const handleInputChange = (event) => {
    // now here we have to set the value in the state, that will user will type
    setNewName(event.target.value);
  };
  return (
    <div>
      <h2>Update User Name</h2>

      {/* form  with onsubmit , calling a function*/}
      <form onSubmit={handleFormSubmit}>
        {/* creating input , passing value as state variable and onchange functionailty passing a function */}
        <input
          type="text"
          value={newName}
          onChange={handleInputChange}
          placeholder="Enter Update Name"
        />

        {/* Button to submit the form */}
        <button type="submit">Submit New Name</button>
      </form>
    </div>
  );
};

export default UpdateUserComponent;
