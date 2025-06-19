// this component for creating and passing styles as object to style attribute.

import React from "react";

const ProfileCard = () => {
  const styles = {
    backgroundColor: "lightgrey",
    padding: "15px",
    borderRadius: "8px",
  };

  // rendering or passing styles object to style attribute present in div
  return (
    <div style={styles}>
      <h1>
        Component Style using Declaring and passing styles as object to style
        object.
      </h1>
      <p>
        this component show case the how to apply Style using Declaring and
        passing styles as object to style attribute. using style attribute and then
        writing all the styles in the div.{" "}
      </p>
    </div>
  );
};

export default ProfileCard;
