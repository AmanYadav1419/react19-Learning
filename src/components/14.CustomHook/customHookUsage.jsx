// Importing our custom hook 👇.
import { useFetch } from "./useFetch";

// now this component is for the example to understand how to use custom hook.
const customHookUsage = () => {
  // call the custom hook and pass the urln in the custom hook.
  // and destructure the data
  // using our custom hook 👇.
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  // then rendering the api data that is store in the `[data]` variable.
  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};
// exporting this component too , so that we can use it in our application.
export default customHookUsage;
