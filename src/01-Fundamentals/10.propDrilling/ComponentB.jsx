import ComponentC from "./ComponentC";

// now inside ComponentB , accepting the name prop with destructring getting it from ComponentA.
const ComponentB = ({ name }) => {
  return (
    // and then we are just passing the name prop to the ComponentC
    <div>
      <ComponentC name={name} />
    </div>
  );
};

export default ComponentB;
