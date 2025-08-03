import { createContext } from "react";
import ComponentA from "./ComponentA";

// this is for the name data context
export const Data = createContext();

/** what if we had more than one context and data to send,
 * here we are creating one more context to understand the concept. **/
export const Data1 = createContext();

const ParentComponent = () => {
  const name = "Aman Yadav From ContextAPI";
  const age = 22;

  return (
      <Data.Provider value={name}>
        {/* here we have another Context nested to the Context */}
      <Data1.Provider value={age}>
        <ComponentA />
      </Data1.Provider>
    </Data.Provider>
  );
};

export default ParentComponent;
