// to use this component , import the `BasicEffect` component to `App.jsx` file.
// this file is for to understand the Step 1 of useEffect Excercise.
// in this i am not writings more comments anymore now you are matured enough and now you can understand the useState better.
// just writing some comments where it is necessary.

// step 1 :- Import the useEffect hook
import { useEffect } from "react";

const BasicEffect = () => {
  // step 2 :- using the `useEffect` hook and passing the empty dependency so it's renderd the first time
  useEffect(() => {
    console.log("BasicEffect Components runs for the first time");
  }, []);
  return (
    <div>
      <h1>BasicEffect Component.</h1>
    </div>
  );
};

export default BasicEffect;
