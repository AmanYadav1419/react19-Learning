// to use this component , import the `PassArrowFunctionToUseState` component to `App.jsx` file.
// in this i am not writings more comments anymore now you are matured enough and now you can understand the useState better.
// just writing some comments where it is necessary.

import { useState } from "react";

const PassArrowFunctionToUseState = () => {
  // in that usestate we are passing the callback function.
  // below is the code 👇

  // this callback function only runs when our component first renders.
  // so all the logic i write inside the callback function , it only runs for the first renders.
  // and then returning the initialCount
  const [count, setCount] = useState(() => {
    const initialCount = 10;
    return initialCount;
  });

  // now we are creating function that will increment the count.
  const handleIncrementOfInitialCount = () => {
    // and now inside that we are using our setCount function to update the state
    // by passing and updating the , here is how we can do it 👇
    setCount((prevCount) => prevCount + 1);
  };

  // now we have to render it.
  return (
    <div>
      <h1>Initial Count :- {count}</h1>

      {/* now we have to create a button , which will allows us to increment the count */}
      {/* for that we are using onClick on button and passing a function to it, the function will do the task. */}
      <button onClick={handleIncrementOfInitialCount}>
        Increment of InitialCount
      </button>
    </div>
  );
};

export default PassArrowFunctionToUseState;
