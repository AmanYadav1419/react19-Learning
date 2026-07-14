// this component is for to show how to use icons in react components

// importing icon from respective directory
import { FaBeer } from "react-icons/fa";
import React from "react";

const IconComponent = () => {
  return (
    <div>
      <h1>This component is to show how to use Icons in React.</h1>
      <FaBeer />
      <FaBeer size={30} />
      <FaBeer size={30} color="gold" />
    </div>
  );
};

export default IconComponent;
