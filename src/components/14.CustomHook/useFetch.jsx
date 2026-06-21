import { useState, useEffect } from "react";

// for the custom hoook function name will always start from `use` and then the hook method or the purpose of the hook.

// and this hook will accept the url as parameter , so that it will reusable across all the application.
const useFetch = (url) => {
  // state to store the fetched data.
  const [data, setData] = useState(null);

  // useEffect to fetch the data from `url` and make the `dependency empty` so it will `run only once`.
  // and it will handle the data conversion and updating to state too.
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // return whole api data
  return [data];
};

// and then export the hook, so that it will used in whole application and code will be reusable.
export default useFetch;