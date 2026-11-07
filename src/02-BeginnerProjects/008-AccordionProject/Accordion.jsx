import { useState } from "react";
import { accordionData } from "./accordionData";
import "./accordion.css";

const Accordion = () => {
  // state to check the accordion open or close.
  const [IsActive, setIsActive] = useState(null);

  // handle the toggle of the accordion specific accordion should open or close not all.
  // this function will accpet the id parameter to toggle the specific accordion.
  const handleAccordionToggle = (id) => {
    setIsActive((prev) => prev === id ? null : id)
  };

  return (
    <div className="accordion-wrapper">
      {/* desturcture the accordiondata and map through it */}
      {accordionData.map(({ title, content, id }) => (
        <section
          className={`accordion-card${IsActive === id ? " is-open" : ""}`}
          key={id}
        >
          <div
            className="accordion-header"
            // passing the id to the function to toggle specific accordion.
            onClick={() => handleAccordionToggle(id)}
          >
            <div>{title}</div>

            {/* conditional render the plus or minus sign for the accordion */}
            <p className={`accordion-icon${IsActive === id ? " open" : ""}`}>+</p>
          </div>

          {/* now this div is for the content */}
          {/* it will only show when the isactive is id means accordion is open */}
          {/* and again click the same accordion it will close it */}
          <div className={`accordion-content${IsActive === id ? " open" : ""}`}>
            <p className="accordion-card-info">{content}</p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Accordion;
