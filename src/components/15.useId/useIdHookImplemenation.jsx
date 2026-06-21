// now to use the uniqueid component in this component.
import UniqueId from "./uniqueId";
const useIdHookImplemenation = () => {
  return (
    <div>
      {/* importing the uniqueid component to use in the application*/}
      <UniqueId />

      {/* now we will use the paragraph tag and some random text */}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga provident
        placeat quos maiores sit cumque necessitatibus unde similique, magnam
        quia numquam laboriosam accusamus earum itaque?
      </p>

      {/* and then again we will import our uniqueid component to use in the application. */}
      <UniqueId />
    </div>
  );
};

// and then export the component to use in the application.
export default useIdHookImplemenation;
