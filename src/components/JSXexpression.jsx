import React from "react";

const JSXexpression = () => {
  // variable for storing and later used to render name
  const myName = "Aman Yadav";

  // now we can embed the function too in the expression
  const multiply = (a, b) => a * b;

  //  now we can also embed the special class into our jsx
  const specialClass = "simpleButSpecial";

  return (
    <section>
      {/* the output of the below code is will print it on screen as it is i.e 2 + 2 */}
      <p>Without Using Expression :- 2 + 2 = 2 + 2</p>

      {/* to make it as calcualted to 4 , to perform addition operation give final result */}
      {/* we will write in curly braces */}
      {/* and this below code is giving us output on screen as 4 */}
      <p>With Using Expression :- 2 + 2 = {2 + 2}</p>

      {/* now if suppose i want to render my name dynamically inside h1 */}
      {/* myName is dynamic , if i changed my name variable it will automatically update in expression */}
      <h1>My Name is {myName}, Name coming from JSXexpression file</h1>

      {/* now we can also provide array's if you want to  */}
      {/* here is the practical example of it*/}
      <p>
        Country Names : {["India", "Russia", "England", "South Korea", "Japan"]}
      </p>

      {/* now we can call or embed the javascript function too in the expression */}
      <p>With Using Expression :- 10 * 2 = {multiply(10, 2)}</p>

      {/* now we can also embed the special class into our jsx */}
      {/* here is how we can do this */}
      <p className={specialClass}>This is Special Class</p>
    </section>
  );
};

export default JSXexpression;
