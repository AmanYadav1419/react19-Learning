import React, { useRef } from "react";

// step 1 : creating FocusInput functional component
const FocusInput = () => {
  // using useRef hook, storing into a variable.
  const InputFocus = useRef(null);

  // onclick function to shift the focus
  const handleInputFocus = () => {
    // when ever user click on it
    // so first we will check if we have the input.current value is there
    if (InputFocus.current) {
      // the focus will shift to the input element
      // the .focus() is the method present in the dom.
      InputFocus.current.focus();
    }
  };
  return (
    <div>
      <h1>FocusInput</h1>
      {/* creating a input and passing ref as InputFocus */}
      <input type="text" ref={InputFocus} />

      {/* button to click and passing a onclick function */}
      <button onClick={handleInputFocus()}>Shift To Input</button>
    </div>
  );
};

export default FocusInput;
