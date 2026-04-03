// step 2 :- creating a CounterUI file , and importing useReducer Hook
import React, { useReducer, useState } from "react";

// and now we are importing the initialState and counterReducer to use them in the componnet.
import { InitialState, counterReducer } from "./counterReducer";
const CounterUI = () => {
  // now after importing we have to use the useReducer hook to start implement the logic.
  // and destructure the state and dispatch function to upadte the state

  // in the useReducer we are passing the counterReducer and initialState that we are imported.
  const [state, dispatch] = useReducer(counterReducer, InitialState);

  // now here is the state for the form, that being used in the to
  const [inputValue, setinputValue] = useState(0);

  // now those below two functions are responsible for the increment and decrement.
  const handleIncrement = () => dispatch({ type: "increment" });

  // now for the handle decrement function
  const handleDecrement = () => dispatch({ type: "decrement" });

  // now here is the function for the incrementByAmount functionality
  // now here we are using +inputValue, to convert the the string to number and pass the user input to the payload.
  const handleIncrementByAmount = () =>
    dispatch({ type: "incrementByAmount", payload: +inputValue });
  // now we are gonna clear the input after dispatch
  setinputValue(0);

  // now here is the function for the decrementByAmount functionality
  // now here is one more way to convert the string to number and pass the user input to the payload.
  const handleDecrementByAmount = () =>
    dispatch({ type: "decrementByAmount", payload: Number(inputValue) });
  // now we are gonna clear the input after dispatch
  setinputValue(0);
  return (
    <div>
      <h2>useReducer Excercise Counter : {state.count}</h2>

      {/* first increment and decrement button to perform the operations with passing onClick functionality.*/}
      <button onClick={handleIncrement}>Incremenent</button>
      <button onClick={handleDecrement}>Decrement</button>

      {/* now to perform the incrementByAmount and incrementByAmount part */}
      {/* we will give the input part so that user can type the amout by which user 
        want to incrementbyAmount and decrementByAmount update  */}

      <div>
        <input
          type="number"
          value={inputValue}
          placeholder="Enter By amount you want to update the count"
          onChange={(e) => setinputValue(e.target.value)}
        />

        {/* buttons to submit the functionailty of the incrementByAmount and decrementByAmount */}
        {/* with passing onClick functionality to call the respective function */}
        <button onClick={handleIncrementByAmount}>IncrementByAmount</button>
        <button onClick={handleDecrementByAmount}>DecrementByAmount</button>
      </div>
    </div>
  );
};

export default CounterUI;
