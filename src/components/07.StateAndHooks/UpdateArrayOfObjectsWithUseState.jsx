// step 1 : import the useState hook from react to use it.
import { useState } from "react";

const UpdateArrayOfObjectsWithUseState = () => {
  // step 2 : we are gonna use useState hook and initialised with array of object to it.
  // and inside that we are gonna pass the array of objects like that below code.
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Spiderman",
      ratings: 5,
    },
    {
      id: 2,
      title: "Superman",
      ratings: 7,
    },
  ]);

  // step 5 : function for updating movie name
  const updateMovieName = () => {
    // now to mutate the array we are gonna use setMovies function.
    // so for that to update movie name we are iterating over through the movies array of objects with the help of using map.
    // so if m.id is strictyly equal to 1 , then we want to change or update it.
    // but before that we make an copy of movie , then specify the change here in this case to change title/Name
    // and if not that the case then return all the movies. i.e in this is 'm'
    setMovies(
      movies.map((m) => (m.id === 1 ? { ...movies, title: "John Wick 5" } : m))
    );
  };

  // step 3 : now we have to iterate to array of objects and we have to render that
  return (
    <section>
      {movies.map((movie) => (
        <li key={movie.id}>Movie Name : {movie.title}</li>
      ))}

      {/* step 4 : now the list looks amazing , but now if we want to update movie names to it */}
      {/* for that we are creating button to update name to array of objects */}
      {/* for that attaching onClick event handler to the button and passing a function to it, the function will do the task of updating movie name */}
      <button onClick={updateMovieName}>Change Name</button>
    </section>
  );
};

export default UpdateArrayOfObjectsWithUseState;
