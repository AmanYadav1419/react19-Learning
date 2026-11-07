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

  const isDark = backgroundColor !== "white";

  // wrapper styles — always fills the section with padding
  const wrapperStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "60vh",
    padding: "2rem",
  };

  // card styles that react to the toggle
  const cardStyle = {
    backgroundColor,
    color: textColor,
    padding: "3rem 3.5rem",
    borderRadius: "16px",
    textAlign: "center",
    border: isDark
      ? "1px solid rgba(255,163,26,0.3)"
      : "1px solid rgba(27,27,27,0.15)",
    boxShadow: isDark
      ? "0 8px 32px rgba(0,0,0,0.5)"
      : "0 8px 32px rgba(0,0,0,0.12)",
    transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
    minWidth: "280px",
  };

  const labelStyle = {
    fontFamily: "sans-serif",
    fontSize: "1.1rem",
    marginBottom: "1.5rem",
    color: textColor,
    transition: "color 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
  };

  const btnStyle = {
    padding: "0.7rem 2rem",
    backgroundColor: isDark ? "#ffa31a" : "#1b1b1b",
    color: isDark ? "#1b1b1b" : "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    fontFamily: "sans-serif",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
  };

  // in the div we are applying the styles so that it will work.
  return (
    <div style={wrapperStyle}>
      <div style={cardStyle}>
        <p style={labelStyle}>
          Current Theme: <strong>{isDark ? "Dark" : "Light"}</strong>
        </p>
        {/* and then a button onclick of the button we call a function,
        which will allows us to toggle the style or background color. */}
        <button
          onClick={handleColorToggle}
          style={btnStyle}
        >
          {/* and for the label we will render it conditionally */}
          {isDark ? "Switch to Light" : "Switch to Dark"}
        </button>
      </div>
    </div>
  );
};

export default ToggleBackgroundColor;
