import React from "react";

// in this file we are understanding better version i.e props destructring.
// we are recieveing props as it names declared
// so that  we don't need to write props.property
// her is how we recive and destructure the props coming from parent component.👇
const Product = ({ name, price }) => {
  return (
    <div>
      <h2>Product Name :- {name}</h2>
      <p>price :- ${price}</p>
    </div>
  );
};

export default Product;
