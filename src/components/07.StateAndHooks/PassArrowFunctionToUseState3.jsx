// here is the another example of callback function passed in useState
// to use this component , import the `PassArrowFunctionToUseState3` component to `App.jsx` file.
// in this i am not writings more comments anymore now you are matured enough and now you can understand the useState better.
// just writing some comments where it is necessary.

import { useEffect, useState } from "react";

const PassArrowFunctionToUseState3 = () => {
  const [name, setName] = useState(() => {
    // in that we are getting the name from local storage
    const savedName = localStorage.getItem("name");

    // and if the name is present then we will parsed it
    // and if that's not the case we just want to set initial value to empty strings.
    return savedName ? JSON.parse(savedName) : "";
  });

  // function that will call onChange event happes on input tag, to do all the task.
  const handleNameChange = (event) => {
    // so this function accepts the event parameter
    // and then based on that we are getting the what the name is typed
    // and then we are storing to state via setName function to update the ui too.
    setName(event.target.value);
  };

  // now we are creating a function that will clear the name.
  const handleClear = () => {
    // we are not doing anything special , just making it string like this
    setName("");
  };

  // and now we are also gonna use useEffect hook
  // so whenever our component first renders so in that situation we just want to set name to localstorage
  // and then passing the name value to dependency array so that whenever it changes it automatically re-renders or update it.
  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  // and then come to render part.
  return (
    <div>
      {/* display the name */}
      <h1>Your Name : {name}</h1>

      {/* to change the name we are giving the input feild and passing some data to it. */}
      {/* like passing type ,value and onChange event , placeholder */}
      {/* we are passing a function to onChange event that will do the remaining task  */}
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter Your Name..."
      />

      {/* and one more thing we are creating a button to clear the name */}
      {/* for that we are using onClick on button and passing a function to it, the function will do the task. */}
      <button onClick={handleClear}>Clear Name</button>
    </div>
  );
};

export default PassArrowFunctionToUseState3;
