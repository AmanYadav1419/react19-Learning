// to use this component , import the `CopyInput` component to `App.jsx` file.
// this file is for to understand the portals concept.
// in this i am not writings more comments anymore now you are matured enough and now you can understand the useState better.
// just writing some comments where it is necessary.

import { useState } from "react";

// so for starting i am creating the basic component

const CopyInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [copied, setCopied] = useState(false);

  // function that will do the task, excute after onclick event happes on button
  const handleCopy = () => {
    // so for copying the text we use navigator inbuilt javascript method/function
    // and after that we are using .then() method to delay
    navigator.clipboard.writeText(inputValue).then(() => {
      setCopied(true);

      // now after copy we want to show some alert message , to know that the text is copied or not
      alert("text copied succesfully");

      // after that we have to set the value of copied state to false to copy the text again or upadating the ui
      // and we have provided 2 seconds delay , so after 2 seconds it will make the setCopied state false
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  // now get to render ui part.
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={handleCopy}>Copy</button>
    </div>
  );
};

export default CopyInput;
