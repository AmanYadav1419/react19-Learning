// // first let we create a basic application with the useState and useEffect
// // fetching the api and managing the code flow
// import { useState, useEffect } from "react";

// interface Todo {
//   title: string;
// }
// const fetchTodods = () => {
//   // defining states for the application.
//   const [todo, setTodo] = useState<Todo | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   // useEffect to fetch the data
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await fetch(
//           "https://jsonplaceholder.typicode.com/todos/1",
//         );

//         if (!result.ok) {
//           throw new Error("Network response is not good, please try again!");
//         }

//         // converting data to the json format
//         const finaldata: Todo = await result.json();
//         // and then setting to the state to render in the ui.
//         setTodo(finaldata);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     // calling the function
//     fetchData();
//   }, []);

//   // if loading is true then show this loader
//   if (loading) return <div>Loading....</div>;

//   return (
//     <div>
//       <h1>UseEffect Todos code </h1>
//       <h2>{todo?.title}</h2>
//     </div>
//   );
// };

// export default fetchTodods;

// now if we use the use() hook , we no longer to manage all the states and if else statements.

// so now to use the use() hook, first import it.
// import { Suspense, use } from "react";

// const FetchTododsByUse = () => {
//   // now here we will define the function that will passed in the use Hook.
//   // this function will be the async function
//   const fetchData = async () => {
//     // need to fetch from the api and store to the res variable.
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

//     // and then return the data in the json format directly
//     return res.json();
//   };

//   // now to use that use Hook here is the code
//   // now inside this use , we have to specificy our promise.
//   // we can directly create our function in it , or call the function just i do like this.
//   const data = use(fetchData());

//   return (
//     <div>
//       {/* now to render in the ui (data) */}
//       <h1>use Hook Todos code </h1>
//       <h2>{data.title}</h2>
//     </div>
//   );
// };
// export default FetchTododsByUse

// - now we have used the `use` Hook but it will still not shows the data in the ui.

// import {Suspense} from 'react'

// const App = () => {
//   return (
//     // to work the fetch todos by use , we have to wrap the component in Suspense Boundary.
//     // and the it accept a prop as fallback , that is just kind of loading state in api fetching to render in the ui.
//     <Suspense fallback={<div>Loading...</div>}>
//         {/* in that we have renderd our use hook component. */}
//       <FetchTododsByUse />
//     </Suspense>
//   );
// };

// export default App;

// example of the use hook with context

// importing theme from the components/Theme folder into the App component.
// it may be varry the import statement, maybe u can write it in a single component itself.

// App.tsx file 👇
import Theme from "./components/Theme";

const App = () => {
  return (
    <div className="flex justify-center items-center w-full mt-[10rem]">
      <Theme />
    </div>
  );
};

export default App;

// Theme.tsx file 👇

// essential imports from react and components being imported.
import React, { createContext, useState, ReactNode, useContext } from "react";
import Card from "./Card";

// union type declared for Theme , that has only two types light and dark
type Theme = "light" | "dark";

// creating an interface for the themecontexttype to be get used when creating theme context.
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// created the theme context with the help of createContext hook, passing type declaration as ThemeContextType or undefined.
// for the initial value for themeContext is undefined.
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

// Creating theme provider
//
const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // creating a state and the type declartion is Theme that has light or dark theme
  // by default value is light
  const [theme, setTheme] = useState<Theme>("light");

  // toggle theme function to toggle the theme from light to dark or dark to light.
  const toggleTheme = () => {
    setTheme((prevtheme) => (prevtheme === "light" ? "dark" : "light"));
  };

  // returning values in the themecontext , rendering children in it.
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// now to use the provider to the Theme component that being used in the App component.
// rendering Card Component inside the Theme.
const Theme = () => {
  return (
    <ThemeProvider>
      <Card />
    </ThemeProvider>
  );
};

// now to use that theme context , need to use useContext hook
// for that purpose for all the hook logic that will be in seperate Hook 👇

export const useTheme = (): ThemeContextType => {
  // first get the context by useContext value , passing context name in it.
  const context = useContext(ThemeContext);

  // if context not found then throw error.
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  // if found then return the context.
  return context;
};

export default Theme;

// now that it for the Theme component , having the createContext , useContext , ThemeProvider etc.
// now let's dive in the Card component that is being used in the Theme componet to render in the ui.

// Card.tsx file 👇

// importing essentials imports from the react and the files created.
import { useContext } from "react";
import { ThemeContext } from "./Theme";

const Card = () => {
  // get the context first
  const context = useContext(ThemeContext);

  // if not found then throw the error
  if (!context) {
    throw new Error("Card must be used within a ThemeProvider");
  }

  // desctructure the data from the context
  const { theme, toggleTheme } = context;

  return (
    // applying conditional css based on the theme to parent div.
    // near about everywhere in this component will apply conditional css based on the theme to work out.
    <div
      className={`w-[20rem] p-[2rem] ${theme === "light" ? "bg-white" : "bg-teal-900"}`}
    >
      <h1
        className={`text-teal-300 ${theme === "light" ? "text-black" : "text-white"}`}
      >
        Theme Card
      </h1>

      <p className={`${theme === "light" ? "text-black" : "text-white"}`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
        dignissimos ipsam fuga iusto, eveniet at fugit ad aperiam itaque nulla.
      </p>

      {/* now there will be a button to toggle theme by passing toggleTheme function from context on onClick event listener  */}
      <button
        className="bg-teal-300 p-2 rounded-full text-white mt-[2rem]"
        onClick={toggleTheme}
      >
        {/* rendering the button text dyanmically too based on the theme for better ui/ux */}
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    </div>
  );
};
