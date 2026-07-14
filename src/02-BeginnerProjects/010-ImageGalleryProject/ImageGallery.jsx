// in this project we will create a carousel image gallery with using useReducer Hook.

import { useReducer } from "react";

const ImageGallery = () => {
  // images array that we will use to display the images in the ui.
  const images = [
    "https://cdn.marvel.com/content/1x/thorloveandthunder_lob_crd_04.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNDnjYAISPt8VPkHmSc4W_WLfh5_wqlFenGiYlCAYuSQ&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAl8oZ2ldVxO76-yWIV1PUjGZBm-wz2W0TxPUiVVYSWA&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC22CcL-i_2Fz2vTcDif088RA_ZF6AT9KqwGd5550xjQ&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsTatcA9m41rPn8o70dP3jTriJYOaCjOxO-z8IK0rP2Q&s=10",
  ];

  // initial value of the useReducerHook
  const InitialState = {
    currentImageIndex: 0,
  };

  // reducer function that will be pass in the hook as first parameter
  // this function will accept two paramters that is state and dispatch.
  const ImageReducer = (state, action) => {
    // now we are using switch case method to update the data , on basisi of action type.
    switch (action.type) {
      // now here is the first case that is previous image.
      case "PREVIOUS_IMAGE":
        return {
          ...state,
          // so if the image index is must be greater than 0 so that it can be previous applied
          currentImageIndex:
            state.currentImageIndex > 0
              ? state.currentImageIndex - 1
              : state.currentImageIndex, // Prevent going out of bounds
        };
      case "NEXT_IMAGE":
        return {
          ...state,
          // so if the image index is should be less than the total images array length so that it can be next applied.
          currentImageIndex:
            state.currentImageIndex < images.length - 1
              ? state.currentImageIndex + 1
              : state.currentImageIndex, // Prevent going out of bounds
        };

      // third case is default case, make sure that always return a default state to prevent any issues.
      default:
        return state;
    }
  };
  // reducer hook
  const [state, dispatch] = useReducer(ImageReducer, InitialState);

  // so now to get the current image , we will store this to a variable so that it is easy to render in the ui.
  let currentImage = images[state.currentImageIndex];

  return (
    <>
      <h1>Image Gallery Project</h1>

      {/* image container */}
      <div>
        <img src={currentImage} alt="thor-loveandthunder" />
      </div>

      {/* previous and next buttons container */}
      <div>
        {/* onclick of the specific button we will fire the callabck dispatch function and the case so that it will work */}
        {/* it will pass in the type key's value  */}
        <button onClick={() => dispatch({ type: "PREVIOUS_IMAGE" })}>
          Prev ⏮️
        </button>
        <button onClick={() => dispatch({ type: "NEXT_IMAGE" })}>
          Next ⏭️
        </button>
      </div>
    </>
  );
};

export default ImageGallery;
