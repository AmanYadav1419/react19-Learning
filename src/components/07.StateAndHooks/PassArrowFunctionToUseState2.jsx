// here is the another example of callback function passed in useState
// to use this component , import the `PassArrowFunctionToUseState` component to `App.jsx` file.
// in this i am not writings more comments anymore now you are matured enough and now you can understand the useState better.
// just writing some comments where it is necessary.

import { useState } from "react";

const PassArrowFunctionToUseState2 = () => {
  // in that callback function we use Math.random() method to generate random number that ranges from 0 to 1.
  // and then we are multiply the number to 100, so that the number ranges will start from 0 to 100
  // but this will give number in points like this 89.90 so to remove point values we use Math.floor() method to get the number part only.
  const [randomNumber, setRandomNumber] = useState(() => {
    Math.floor(Math.random() * 100);
  });

  // now we are creating a function that will generate random number.
  const generateRandomNumber = () => {
    // and inside this function we are using setRandomNumber function
    // to update the state and shows it to ui.
    // for that we are creating and storing random number to variable.
    const newNumber = Math.floor(Math.random() * 100);
    // after that we are passing that variable to setRandomNumber to update the state.
    setRandomNumber(newNumber);
  };

  // and then we are just rendering the random number.
  return (
    <div>
      <h1>Random Number : {randomNumber}</h1>
      <p>
        Press the CTRl + R OR reload the page ,to change the number randomly
        without any button.
      </p>

      {/* now we have to create a button , which will allows us to generate the random Number */}
      {/* for that we are using onClick on button and passing a function to it, the function will do the task. */}
      <button onClick={generateRandomNumber}>Generate Random Number</button>
    </div>
  );
};

export default PassArrowFunctionToUseState2;
