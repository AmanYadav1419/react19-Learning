// this file is for the example purpose to understand how useReducer hook implementation will be done.

// step 1 : to import the useReducer hook.
import { useReducer } from "react";

// step 3 : now we have to provide the InitialState value to the hook
// for example we are building counter application , so will provided count 0 as initial state.
const InitialState = { count: 0 };

// step 4 : now we have to create a reducer function.
// it will take two things :- state and action
// state :- what thing we are updating
// and action :- and how that thing we are updating. or how we will update that.
const reducer = (state, action) => {
  // so for now we are using swtich case
  switch (action.type) {
    // now if the action type is increment then the case increment will worked.
    case "increment":
      // now we will return increment count by 1

      /* if you are thinking we have do this `...state`,
        that is because we are making copy of the state
        so that if the state have multiple things like suppose, color property, name property etc , 
        so we are first making the copy of the data and then updating the state.
    */
      return { ...state, count: state.count + 1 };

    // now if the action type is decrement then the case decrement will worked.
    case "decrement":
      return { ...state, count: state.count - 1 };

    // now the case for the reset , if the case is reset this will work.
    case "reset":
      return { ...state, count: 0 };

    // and if nothing is there to match the case , when we are returning default case.
    default:
      return state;
  }
};

const ReducerHookExample = () => {
  // step 2 : use the hook
  const [state, dispatch] = useReducer(reducer, InitialState);
  return (
    <div>
      {/* now state is gonna used to render in the ui or get displayed in the ui 
      so we will access the count,like this :- state.count,

      if suppose we have other property like color , so we will acess like :- state.color, etc
      */}
      <h1>
        counter state is coming from ReducerHookExample file :- {state.count}
      </h1>

      {/* now here comes the button's to increment and decrement count or performs action */}

      {/* now step 5 :- create buttons and add dispatch function to it */}
      {/* dispatch function will allows us to change our state 
      this will allows us to provide us some sort of rules that are actually our condition like increment, reset , etc.
      */}
      <div>
        {/* now check how we are implementing dispatch funcctionality. */}
        {/* we are passing onclick on that in the callback function and 
            then passing the type as "increment" for increment btn. */}
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>

        {/* now same thing , but type will be decrement, to perform decrement action */}
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>

        {/* now same thing, but type will be reset to peform reset action */}
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
};

export default ReducerHookExample;
