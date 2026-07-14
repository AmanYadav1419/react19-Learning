// step 1 : to create a reducer file
// 2. Inside this file, define a reducer function that will manage a simple counter's state.

// now define initial state for the componet, here it is 0 as for the counter.
const InitialState = { count: 0 };

// now will define the reducer function to update the state
const counterReducer = (state, action) => {
  switch (action.type) {
    // case to increment the count we will do like this
    /**
     * first we will copy the state data and then update the count
     */
    case "increment":
      return { ...state, count: state.count + 1 };

    /**
     * first we will copy the state data and then update the count
     */
    case "decrement":
      return { ...state, count: state.count - 1 };

    /**
     * now here is the next case increment the count by some user input
     */
    case "incrementByAmount":
      return { ...state, count: state.count + action.payload };
    /**
     * now here is the next case decrement the count by some user input
     */
    case "decrementByAmount":
      return { ...state, count: state.count - action.payload };

    // and for the default case we are returning the state.
    default:
      return state;
  }
};

// now we are exporting the InitialState and counterReducer to use the functionality.
export { InitialState, counterReducer };
