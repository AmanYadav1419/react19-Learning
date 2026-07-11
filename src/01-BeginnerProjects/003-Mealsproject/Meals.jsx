// 003 Meals Project.

// in this project we will fetch the data from meals db api with the help of useEffect.
// with using axios package for data fetching , make sure to npm i axios before run.
import axios from "axios";
import { useState, useEffect } from "react";
import "./meals.css";
const Meals = () => {
  const [items, seItems] = useState([]);

  // we are using axios package and .get method for the api calls and for the error catching we are using .catch method
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        seItems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // itemsList function to render all the items in the ui.
  const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section className="meals-card" key={idMeal}>
        <img className="meals-img" src={strMealThumb} alt={strMeal} />
        <section className="meals-content">
          <p className="meals-p">Name :- {strMeal}</p>
          <p className="meals-p">ID :- #{idMeal}</p>
        </section>
      </section>
    );
  });

  // we are rendering a function that will render the all the meals data in the ui.
  return <div className="meals-items-container">{itemsList}</div>;
};

export default Meals;
