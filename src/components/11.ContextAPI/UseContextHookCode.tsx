import React, { useContext } from "react";
import { Data, Data1 } from "./ParentComponent";
// import { Data, Data1 } from "./ParentComponent";
const useContextHookCode = () => {
  // now here in the hook , we have to tell that from where data is coming.
  // so that to recive the data and then store in the variable
  const userName = useContext(Data);

  // and same we will do it for the age data i.e Data1
  const userAge = useContext(Data1);
  return (
    // now instead of using the callback functions and writing bad code , we can do like this.
    <div>
      <h1>
        My Name is :- {userName} and my Age is :- {userAge}. <br />
        This data is coming from implementation of the useContext Hook.
      </h1>
    </div>
  );
};

export default useContextHookCode;
