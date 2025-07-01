// in this i am not writings more comments anymore now you are matured enough and now you can understand the useState better.
// just writing some comments where it is necessary.

// so if we don't want to add this component to dom tree how we can do that
// so by importing react portals and we are getting this from react-dom
import { createPortal } from "react-dom";

// in that we are accepting `copied` prop and destrcuture it , it is coming from `CopyInput.jsx` file
const PopupContent = ({ copied }) => {
  // so to use portal we write createPortal and it has two parameters
  // first one is the content that we want to render and second one is the target where we want to render that content
  // so we are using `document.getElementById("portal-root")` as target
  // so we are sepreateing by using comma so that we can write the content in next line

  return createPortal(
    <section>
      {/* if the copied is true then we just want to display the below ui */}
      {copied && (
        // with that i also want to add some styling to this div
        <div
          style={{
            position: "absolute",
            bottom: "3rem",
            color: "aliceblue",
          }}
        >
          Copied to Clipboard
        </div>
      )}
    </section>,
    // this is the target where we want to render the content
    document.querySelector("#popup-content-root")
  );
};

export default PopupContent;
