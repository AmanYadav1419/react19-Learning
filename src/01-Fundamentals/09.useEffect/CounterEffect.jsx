// to use this component , import the `CounterEffect` component to `App.jsx` file.
// this file is for to understand the Step 2 of useEffect Excercise.
// in this i am not writings more comments anymore now you are matured enough and now you can understand the useState better.
// just writing some comments where it is necessary.

// step 1 :- Import the useEffect and useState Hook.
import { useEffect, useState } from "react";

const CounterEffect = () => {
  // step 3:- using useState and setting the initial value as `0`.
  const [count, setCount] = useState(0);

  // step 2 :- using the useEffect hook and we are passing `count` in dependency array
  // updating the document title whenever a counter value changes.
  // so when count changes it will re-render the component.
  useEffect(() => {
    document.title = `Increment by Count :- ${count}`;
  }, [count]);
  return (
    <div>
      <h1>CounterEffect Component</h1>
      {/* step 3 :- render the count */}
      <h2>Count :- {count}</h2>

      {/* step 4 :- render a button , and passing onclick handler to increment the counter */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default CounterEffect;
