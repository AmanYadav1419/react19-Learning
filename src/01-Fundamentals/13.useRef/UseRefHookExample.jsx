import React, { useRef } from "react";

const UseRefHookExample = () => {
  // to use the hook , write useRef pass a value and store it into a variable.
  const inputElement = useRef(null);
  /* this console will show us the `current` property, this will allow us to manipulate our dom 
    or to do anything with the dom.
    */
  // console.log(inputElement);

  // function for the onclick functionality on the button
  const focusInput = () => {
    // and now in that function will make that functionality like,
    // when ever user click on it
    // the focus will shift to the input element

    // the .focus() is the method present in the dom.
    inputElement.current.focus();


    // and now we will prefilled some value in the input element with this below code.
    inputElement.current.value = "use Ref Hook implementation."
  }

  return (
    <div>
      {/* now that useRef hook variable will pass as ref to the input element. */}
      <input type="text" ref={inputElement} />
      <button onClick={() => focusInput()}>Focus to Input</button>
    </div>
  );
};

export default UseRefHookExample;
