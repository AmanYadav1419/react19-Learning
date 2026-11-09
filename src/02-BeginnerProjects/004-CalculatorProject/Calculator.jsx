// 004 Calculator Project.

import { useState } from "react";
import "./Calculator.css";
// in this project we will built a calculator application.

// Safe math evaluator — replaces eval() to prevent code injection attacks.
// Only permits digits, arithmetic operators (+, -, *, /), decimals, and parentheses.
// Rejects any expression containing letters or other unexpected characters.
const safeMath = (expression) => {
  if (!expression || expression.trim() === "") return "";
  // Whitelist: only allow numbers, basic operators, dots, and parentheses
  if (!/^[0-9+\-*/.()\s]+$/.test(expression)) {
    return "Error";
  }
  try {
    // Use Function constructor with no access to outer scope instead of eval()
    // eslint-disable-next-line no-new-func
    const result = new Function("return " + expression)();
    if (!isFinite(result) || isNaN(result)) return "Error";
    // Avoid floating-point noise (e.g. 0.1+0.2 → 0.30000000000000004)
    return String(parseFloat(result.toPrecision(10)));
  } catch {
    return "Error";
  }
};

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");

  // function to clear the values
  const clear = () => setInputValue("");

  // display function to display the values in the ui with having specific character passing in function.
  const display = (value) => {
    setInputValue((prev) => prev + value);
  };

  // calculate function for the calculation that will trigger on "=" equal operator.
  const calculate = () => {
    setInputValue(safeMath(inputValue));
  };

  return (
    <div className="calculator-wrapper">
      <form className="calculator" name="calc">
        <input className="value" type="text" value={inputValue} readOnly />

        <span className="num clear" onClick={() => clear()}>
          C
        </span>

        {/* spans to show the numbers and operands , and onclick of individual section,
         we are passing that specific element in the display function  */}
        <span className="operator" onClick={() => display("/")}>&#47;</span>
        <span className="operator" onClick={() => display("*")}>&#42;</span>
        <span onClick={() => display("7")}>7</span>
        <span onClick={() => display("8")}>8</span>
        <span onClick={() => display("9")}>9</span>
        <span className="operator" onClick={() => display("-")}>&#8722;</span>
        <span onClick={() => display("4")}>4</span>
        <span onClick={() => display("5")}>5</span>
        <span onClick={() => display("6")}>6</span>
        <span className="operator plus" onClick={() => display("+")}>
          &#43;
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
    </div>
  );
};

export default Calculator;
