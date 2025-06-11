import React from "react";
// here we recieve props as parameter
// then accessing the props by using dot(.) operator

// in Product.jsx file we are getting props and destructuring the props , the better way , clean code.

const Person = (props) => {
  return (
    <div>
      <h2>Person Name :- {props.name}</h2>
      <p>Age :- {props.age}</p>
    </div>
  );
};

export default Person;
