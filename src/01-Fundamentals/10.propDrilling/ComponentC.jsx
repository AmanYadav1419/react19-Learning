// now inside ComponentC , accepting the name prop with destructring getting it from ComponentB.
const ComponentC = ({ name }) => {
  return (
    // and then finally we are rendering name prop to the ComponentC
    <div>
      <h1>Getting My {name} by Prop Drilling.</h1>
    </div>
  );
};

export default ComponentC;


// so just passing a name to the componentC , where it acutally used we have to pass the prop on other components as well
// so just imagine if we have thousands of components , so how much it is heavy to just drill the prop to every single component
// and still it doesn't need to pass to un-neccessary component.

// so to solve this problem we are gonna learning `ContextAPI` in react. 