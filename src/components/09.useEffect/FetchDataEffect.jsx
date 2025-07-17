// to use this component , import the `FetchDataEffect` component to `App.jsx` file.
// this file is for to understand the Step 3 of useEffect Excercise.
// in this i am not writings more comments anymore now you are matured enough and now you can understand the useState better.
// just writing some comments where it is necessary.

// Step 1 :- Import the useEffect and useState Hook.
import { useEffect, useState } from "react";

const FetchDataEffect = () => {
  // Step 3 :- to fetch our data for that we first have to create states to put our data.
  const [posts, setPosts] = useState([]);

  // Step 2 :- now we are using the useEffect hook with passing callback function and also the empty dependency array.
  // this empty dependency array simply means that useEffect will runs only once.
  useEffect(() => {
    const fetchData = async () => {
      // first fetching the data and storing it in variable.
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      // then converting it into json and storing it in variable.
      const data = await response.json();

      // and then storing this json converted data to the state.
      setPosts(data);
    };

    // now we have to call the function to excute the function
    fetchData();
  }, []);
  return (
    <div>
      <h1>FetchDataEffect Component.</h1>
      <h2>First Post Title :- </h2>
      {
        // we are using ternary operator to first check the length of data is greater than 0.
        // and getting the first post so for that we are using posts[0].title => to get the first post title.
        // if that's not the case then we are showing Loading...
        posts.length > 0 ? <h3>{posts[0].title}</h3> : <h4>Loading...</h4>
      }
    </div>
  );
};

export default FetchDataEffect;
