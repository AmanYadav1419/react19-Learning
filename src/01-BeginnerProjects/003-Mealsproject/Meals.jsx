// 003 Meals Project.

// in this project we will fetch the data from meals db api with the help of useEffect.

import { useState, useEffect } from "react";
const Meals = () => {
  const [items, seItems] = useState([]);

  // we are using fetch and .then method for the api calls and for the error catching we are using .catch method
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => res.json())
      .then((res) => seItems(res.data.meals))
      .catch((err) => console.error(err));
  }, []);

  // itemsList function to render all the items in the ui.
  const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section key={idMeal}>
        <img src={strMealThumb} alt={strMeal} />
        <section>
          <p>NAme :- {strMeal}</p>
          <p>ID :- {idMeal}</p>
        </section>
      </section>
    );
  });

  // we are rendering a function that will render the all the meals data in the ui.
  return <div>{itemsList}</div>;
};

export default Meals;
