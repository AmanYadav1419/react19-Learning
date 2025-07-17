// This component is for to understand the practical use-case of useEffect hook :- 01 :- Data Fetching
// to use this component , import the `DataFetching` component to `App.jsx` file.
// in this i am not writings more comments anymore now you are matured enough and now you can understand the useState better.
// just writing some comments where it is necessary.

import { useState, useEffect } from "react";

const DataFetching = () => {
  // to fetch our data for that we first have to create states to put our data.
  const [data, setData] = useState([]);

  // now we are using the useEffect hook with passing callback function and also the empty dependency array.
  // this empty dependency array simply means that useEffect will runs only once.
  useEffect(() => {
    async function getData() {
      // first fetching the data and storing it in variable.
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      // then converting it into json and storing it in variable.
      const jsonResponse = await response.json();

      // and then first checking that data is present or not,
      // and then storing this json converted data to the state.
      if (jsonResponse && jsonResponse.data > 0) {
        setData(jsonResponse);
      }
    }

    // now we have to call the function to excute the function
    getData();
  }, []);

  // now we have to render the data to ui.
  return (
    <div>
      <ul>
        {data.map((post) => (
          <section key={post.id}>
            <li>Title :---- {post.title}</li>
            <li>Body :------ {post.body}</li>
          </section>
        ))}
      </ul>
    </div>
  );
};

export default DataFetching;
