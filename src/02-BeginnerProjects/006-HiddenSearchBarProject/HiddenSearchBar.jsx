import { useState } from "react";
import "./hiddensearch.css"

// importing this icon from react-icons package ,
//  before running this project make sure that you have installed this package or simply do `npm i`.
import { FaSearch } from "react-icons/fa";

const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");

  // onclick function
  const handleClick = (e) => {
    setBgColor("rgba(15, 23, 42, 0.6)");

    if (e.target.className === "hiddenSearchcontainer") {
      setShowInput(false);
      setBgColor("transparent");
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
        <>
          <input
            className="hiddenSearchInput"
            type="text"
            placeholder="Search..."
            autoFocus
          />
          <span className="search-close-hint">Click outside to close</span>
        </>
      ) : (
        <>
          <div className="search-icon-wrapper" onClick={() => setShowInput(true)}>
            <FaSearch />
          </div>
          <span className="search-hint">Click to search</span>
        </>
      )}
    </section>
  );
};

export default HiddenSearchBar;
