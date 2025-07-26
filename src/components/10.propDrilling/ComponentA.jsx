import ComponentB from "./ComponentB";

// now inside ComponentA , accepting the name prop with destructring getting it from App Component.
const ComponentA = ({ name }) => {
  return (
    // and then we are just passing the name prop to the ComponentB
    <div>
      <ComponentB name={name} />
    </div>
  );
};

export default ComponentA;
