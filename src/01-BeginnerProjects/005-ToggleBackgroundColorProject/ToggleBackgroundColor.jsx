// 005 Toggle Background Color Project.

import { useState } from "react";

const ToggleBackgroundColor = () => {
  // defining the states
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttonStyle, setButtonStyle] = useState("white");

  // function that will responsible for the color toggle part.
  const handleColorToggle = () => {
    // now if the color is white then we apply the #1b1b1b color and else not then apply the white.
    setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");

    // same conditional logic for the textColor logic part.
    setTextColor(textColor === '#1b1b1b' ? "#ffa31a" : "#1b1b1b")

    // now same thing for the button styling too , handling the conditional logic part.
    // button styles depend on the background color 
    setButtonStyle(backgroundColor === "white" ? "#1b1b1b" : "white")
  };

  // in the div we are applying the styles so that it will work.
  return (
    <div style={{ backgroundColor, color: textColor }}>
      {/* and then a button onclick of the button we call a function, 
    which will allows us to toggle the style or background color. */}
      <button
        onClick={handleColorToggle}
        style={{ buttonStyle, color: textColor, border: `2px ${textColor}` }}
      >
        {/* and for the label we will render it conditionally */}
        {backgroundColor === "1b1b1b" ? "Black Theme" : "White Theme"}
      </button>
    </div>
  );
};

export default ToggleBackgroundColor;
