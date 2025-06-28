import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrementCounter = () => {
    setCounter(counter + 1);
  };

  const handleDecrementCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>Counter Value from useState Excercise : {counter}</h1>

      <button onClick={handleIncrementCounter}>increment</button>

      {/* additonal property added */}
      <button onClick={handleDecrementCounter}>Decrement</button>
    </div>
  );
};

export default Counter;
