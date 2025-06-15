import React from "react";

const ConditionalGreeting = ({ timeOfDay }) => {
  // here is how we can use the ternary operator
  return timeOfDay === "morning" ? (
    <h3>Good morning!</h3>
  ) : (
    <h3>Good afternoon!</h3>
  );
};

export default ConditionalGreeting;
