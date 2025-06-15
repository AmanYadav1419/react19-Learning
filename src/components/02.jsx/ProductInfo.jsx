import React from "react";

const ProductInfo = () => {
  // declaring product object
  const Product = {
    name: "Laptop",
    price: "1200",
    availability: "In Stock",
  };
  return (
    <div>
      <h1>Product Detils</h1>

      {/* rendering all the prodcut details */}
      <h3>Name : {Product.name}</h3>
      <h3>Price : ${Product.price}</h3>
      <h3>Availability : {Product.availability}</h3>
    </div>
  );
};

export default ProductInfo;
