// this is file for understanding how to apply styling as using object or variable to react component.
// you can import this component to App component to check the result of this component.

const StylingPassingAsObject = () => {
  const styles = {
    color: "black",
    backgroundColor: "crimson",
    padding: "2rem",
  };
  return (
    <section>
      <h1 style={styles}>Styling Passing As Object</h1>
    </section>
  );
};

export default StylingPassingAsObject;
