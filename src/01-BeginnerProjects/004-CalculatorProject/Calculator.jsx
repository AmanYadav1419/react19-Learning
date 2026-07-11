// 004 Calculator Project.

import { useState } from "react";
import "./calculator.css"
// in this project we will built a calculator application.

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");

  // function to clear the values
  const clear = () => setInputValue("");

  // display function to display the values in the ui with having specific character passing in function.
  const display = (value) => {
    setInputValue(inputValue + value);
  };

  // calculate function for the calculation that will trigger on "=" equal operator.

  // eval function is doing all the stuff of calculating stuff

  // but remeber that eval() method, malicious code can run inside your application without permission.
  // Executing javascript from a string is an BIG Security risk.
  // with eval(), third party code can see the scope of application, which can lead to possible attacks.

  // as this is just a beginner friendly project and that's why for better and easy to use we are using eval() method.

  const calculate = () => {
    setInputValue(eval(inputValue));
  };

  return (
    <form className="calculator" name="calc">
      <input className="value" type="text" value={inputValue} />

      <span className="num clear" onClick={() => clear()}>
        c
      </span>

      {/* spans to show the numbers and operands , and onclick of individual section,
       we are passing that specific element in the display function  */}
      <span onClick={() => display("/")}>/</span>
      <span onClick={() => display("*")}>*</span>
      <span onClick={() => display("7")}>7</span>
      <span onClick={() => display("8")}>8</span>
      <span onClick={() => display("9")}>9</span>
      <span onClick={() => display("-")}>-</span>
      <span onClick={() => display("4")}>4</span>
      <span onClick={() => display("5")}>5</span>
      <span onClick={() => display("6")}>6</span>
      <span className="plus" onClick={() => display("+")}>
        +
      </span>

      {/* remaining elements for the calculator with that onclick display function with passing that character*/}
      <span onClick={() => display("1")}>1</span>
      <span onClick={() => display("2")}>2</span>
      <span onClick={() => display("3")}>3</span>
      <span onClick={() => display("0")}>0</span>
      <span onClick={() => display("00")}>00</span>
      <span onClick={() => display(".")}>.</span>
      <span className="num equal" onClick={() => calculate()}>
        =
      </span>
    </form>
  );
};

export default Calculator;
