// step 1 : import the useState hook from react to use it.
import { useState } from "react";

const UpdateObjectWithUseState = () => {
  // step 2 : use the useState hook and initialised with provding object of movies to it.
  // by following all the naming convention for using useState Hook.
  // here we are using object to update the movie details.
  // and for the object we are passing title and rating to it.
  const [movie, setMovie] = useState({
    title: "Inception",
    ratings: 6,
  });

  // step 5 : function that for updating/changing the rating of the movie.
  const changeRatings = () => {
    // now inside this we are updating only the ratings , nothing else.
    // this is more shorter way and easy to understand.
    // then we are using setMovie fn that allows us to update the movie object.
    // and for that we are using spread operator to copy the existing object and then updating the ratings.
    setMovie({ ...movie, ratings: 9 });
  };

  // step 3 : now let me render that to the ui
  return (
    <section>
      <h1>Movie Title : {movie.title}</h1>
      <p>Movie Rating : {movie.ratings}</p>

      {/* step 4 : now the movie and rating looks amazing , but now if we want to channge ratings to it */}
      {/* now let me add the button which will update the rating of the movie. */}
      {/* for that we are creating button to change ratings of the movie to object */}
      {/* for that attaching onClick event handler to the button and passing a function to it, the function will do the task of change ratings of the movie to object */}
      <button onClick={changeRatings}>Change Rating</button>
    </section>
  );
};

export default UpdateObjectWithUseState;
