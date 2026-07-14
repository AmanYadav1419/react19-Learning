// to use this component , import the `Switcher` component to `App.jsx` file.

// this file is for to know how to make our component unique by providing unique value to it.

import { useState } from "react";

const Switcher = () => {
  // sw basically stands for switcher, providing initial value false to useState.
  const [sw, setSw] = useState(false);

  // i am gonna render my dark and light mode
  return (
    <div>
      {/* for render the dark mode we are using ternary operator */}
      {sw ? <span>Dark</span> : <span>Light</span>}

      <br />

      {/* then creating input */}
      {/* to make the value unique we have to provide a key to input feild */}
      {/* and in that key we pass our state i.e sw and if it is true then we are providing 'dark' 
      and if not's the case then we are providing light  */}
      {/* so we are assigning this unique value to our input  */}

      <input type="text" key={sw ? "dark" : "light"} />

      {/* and then creating a button, and then adding onClick event  */}
      <buttton onClick={() => setSw((prev) => !prev)}>Switch</buttton>
    </div>
  );
};

export default Switcher;
