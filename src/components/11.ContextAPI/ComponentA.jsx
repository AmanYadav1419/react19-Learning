import { Data, Data1 } from "./ParentComponent";
const ComponentA = () => {
  return (
    // so to recive that data from ParentComponent we have to do like this.
    <Data.Consumer>
      {(name) => {
        // return <h1>My name is :- {name}</h1>;
        return (
          <Data1.Consumer>
            {/* now insie that we have to pass the callback function again */}
            {(age) => {
              return (
                <h1>
                  My name is: {name} and I'm {age} years old.
                </h1>
              );
            }}
          </Data1.Consumer>
        );
      }}
    </Data.Consumer>
  );
};

export default ComponentA;
