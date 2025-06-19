// this component is for inline styles

import React from "react";

const StyledCard = () => {
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        padding: "20px",
        borderRadius: "10px",
        color: "darkblue",
      }}
    >
      <h1>Inline Styles Component.</h1>
      <p>
        this component show case the how to apply inline styles to the
        component. using style attribute and then writing all the styles in the
        div.{" "}
      </p>
    </div>
  );
};

export default StyledCard;
