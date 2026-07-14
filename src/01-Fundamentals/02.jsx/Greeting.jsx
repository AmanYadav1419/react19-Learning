import React from "react";

const Greeting = () => {
  // this is for the greet message
  const greet = "Great day";
  const name = "John";

  // this is for the date
  const date = new Date();
  return (
    <div>
      {/* first task to render/display greeting message dynamically */}
      {/* this time we are rendering/displaying two dynamic content. */}
      <h1>
        Hello {name}, Have a {greet}!
      </h1>

      {/* second task to render/display current date */}
      <p>Today date is :- {date.getDate()}</p>
    </div>
  );
};

export default Greeting;
