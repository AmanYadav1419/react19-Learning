//  step 1 : import the useState hook from react to use it.
import { useState } from "react";

const StateAndHooks = () => {
  // step 2 : use the useState hook in component/project.
  // for that we use array destrcutring as useState hook,
  // in that first is value and second is function to update the value
  // and inside the useState hook we pass the initial value , so that the initial value is assign to the value.

  // some naming convention you can follow for best practices :-
  // the value and function name should be same
  // but for that before writing function name must use `set` word after that the first letter of the word is captial.
  // for live example, we write `count` as value and for function we write like this `setCount`
  // it follows the cleaner code naming conventions

  const [count, setCount] = useState(0);

  // step 4 : started writing and completeing the onClick function handler
  const increamentHandler = () => {
    // this function only take the setCount function
    // and remember the setCount is a fn which where allows us to change the value or update the value of initialValue.

    // so here is that how we can do this
    // to update the count for increment purpose we will simply write `count + 1` inside our setCount function.
    setCount(count + 1);
  };

  // step 6 : started writing and completeing the onClick function handler
  const decreamentHandler = () => {
    // this function only take the setCount function
    // and remember the setCount is a fn which where allows us to change the value or update the value of initialValue.
    // so here is that how we can do this
    // to update the count for decrement purpose we will simply write `count - 1` inside our setCount function.

    setCount(count - 1);
  };

  // note :- anytime we change the value of our state by using the setCount method or any set method, 
  // it's gonna re-render our application.

  return (
    <div>
      {/* so now i want to render what i currently have i.e count */}
      {/* so i just open curly brackets to work with jsx part with that to update the values dyanmically */}
      <h1>{count}</h1>

      {/* step 3 : creating button to update the value of count */}

      {/* so now to update the value of count we will doing like this */}
      {/* so in that we are attaching and accessing onClick event handler to the button  */}
      {/* and based on that so somebody clicks on the button so we are gonna excuting this function  */}
      {/* inside the onClick we are passing a function name so that this will excute when clicked */}
      <button onClick={increamentHandler}>+</button>

      {/* step 5 : creating decrement button with attching onClick event to it. */}
      {/* similar with that we can create decrement button as well */}
      {/* all the structure is same just we have logic change */}
      {/* instead of increment logic we have to define decrement logic */}
      <button onClick={decreamentHandler}>-</button>
    </div>
  );
};

export default StateAndHooks;
