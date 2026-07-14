import React from "react";

const ProductList = () => {
  const products = [
    { id: 1, name: "SmartPhone", price: "$699" },
    { id: 2, name: "Laptop", price: "$1200" },
    { id: 3, name: "Headphones", price: "$100" },
  ];
  return (
    <div>
      {
        // in this file or approach we are destructing the data
        // so that we don't need to write product. always
        // here is the approach,
        // this way we can see that it is more clear version and more visible code structure.
        products.map(({ id, name, price }) => (
          <div key={id}>
            <div>{id}</div>
            <div>{name}</div>
            <div>{price}</div>
          </div>
        ))
      }
    </div>
  );
};

export default ProductList;
