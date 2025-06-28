import React, { useState } from "react";

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleShoppingFormSubmit = (event) => {
    event.preventDefault();

    // so first check that name nd quantity is present or not
    if (!name || !quantity) return;

    // and if that's not the case then we are gona creating newItem object.
    // and in that we are converting quantity to the number
    const newItem = {
      name,
      quantity: parseInt(quantity),
    };

    // and then we have to add that to the items state, keeping all the previous data.
    setItems((prevItems) => [...prevItems, newItem]);

    // and after that clearing the input feilds
    setName("");
    setQuantity("");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={handleShoppingFormSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter Item Name"
        />

        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          placeholder="Enter Item Quantity"
        />

        <button type="submit">Add Item To List</button>
      </form>

      {/* to render and show to ui the list of items */}

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            Name :- {item.name} - Quantity : {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
