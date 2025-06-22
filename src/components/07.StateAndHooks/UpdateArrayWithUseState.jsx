// to use this component , import the `UpdateArrayWithUseState` component to `App.jsx` file.

// step 1 : import the useState hook from react to use it.

import { useState } from "react";

const UpdateArrayWithUseState = () => {
  // step 2 : use the useState hook and initialised with provding array of my friends name to it.
  // by following all the naming convention for using useState Hook.
  const [friends, setFriends] = useState(["Alex", "John", "Trion"]);

  // step 5 : function that for adding new friend to array.
  const addOneFriend = () => {
    // now to mutate the array we are gonna use setFriends function.
    // and inside that we don't wana change the exisiting data we just wana to clone the data so use spread operator here inside the setFriends function.
    // and then to add new data just by seperating with comma and then adding the data of friend.
    return setFriends([...friends, "Aman Yadav"]);
  };

  // step 7 : function that for removing friend from array.
  const removeOneFriend = () => {
    // now to mutate the array we are gonna use setFriends function.
    // so now we used filter method to remove the 'John' from the friends array.
    setFriends(friends.filter((f) => f !== "John"));
  };

  // step 9 : function that for updating friend to array.
  const updateOneFriend = () => {
    // now to mutate the array we are gonna use setFriends function.
    // so for that to update friend name we are iterating over through the friends array.
    // and finding the specific friend name 'Alex' and then chaning the name to 'Smith', by using ternary operator.
    // and if name not found then we just want to stays as it is.
    setFriends(friends.map((f) => (f === "Alex" ? "Smith" : f)));
  };

  // step 3 : now render the names by iterating through the array.
  return (
    <section>
      {friends.map((friend) => {
        return <li key={Math.random()}>{friend}</li>;
      })}

      {/* step 4 : now the list looks amazing , but now if we want to add more names to it */}
      {/* for that we are creating button to add new friends names to array */}
      {/* for that attaching onClick event handler to the button and passing a function to it, the function will do the task of adding new friend */}
      <button onClick={addOneFriend}>Add New Friend</button>

      {/* step 6 : now the list looks amazing , but now if we want to remove friend name to it */}
      {/* for that we are creating button to removing friend name to array */}
      {/* for that attaching onClick event handler to the button and passing a function to it, the function will do the task of removing friend */}
      <button onClick={removeOneFriend}>Remove One Friend</button>

      {/* step 8 : now the list looks amazing , but now if we want to update friend name to it */}
      {/* for that we are creating button to update friend name to array */}
      {/* for that attaching onClick event handler to the button and passing a function to it, the function will do the task of updating friend name */}
      <button onClick={updateOneFriend}>Update One Friend</button>
    </section>
  );
};

export default UpdateArrayWithUseState;