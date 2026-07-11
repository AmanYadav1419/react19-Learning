import { useState } from "react";
import "./hiddenSearch.css"

// importing this icon from react-icons package ,
//  before running this project make sure that you have installed this package or simply do `npm i`.
import { FaSearch } from "react-icons/fa";

const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  // onclick function
  const handleClick = (e) => {
    setBgColor("#1a1a1a");

    if (e.target.className === "hidden-container") {
      setShowInput(false);
      setBgColor("#fff");
    }
  };
  return (
    <section
      className="hiddenSearchcontainer"
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
    >
      {/* now we will show ui or data conditionally */}
      {showInput ? (
        <input className="hiddenSearchInput" type="text" placeholder="Search..." />
      ) : (
        <FaSearch onClick={() => setShowInput(true)} />
      )}
    </section>
  );
};

export default HiddenSearchBar;
