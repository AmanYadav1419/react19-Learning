import { Data } from "./ParentComponent";

const ComponentA = () => {
  return (
    <Data.Consumer>
      {(name) => {
        return <h1>My name is :- {name}</h1>;
      }}
    </Data.Consumer>
  );
};

export default ComponentA;
