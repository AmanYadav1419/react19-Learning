import { createContext } from "react";
import ComponentA from "./ComponentA";

export const Data = createContext();

const ParentComponent = () => {
  const name = "Aman Yadav From ContextAPI";

  return (
    <Data.Provider value={name}>
      <ComponentA />
    </Data.Provider>
  );
};

export default ParentComponent;
