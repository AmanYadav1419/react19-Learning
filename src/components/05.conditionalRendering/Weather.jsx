import React from "react";

const Weather = ({ temperature }) => {
  if (temperature < 15) {
    return <h1>it's cold outside!</h1>;
  } else if (temperature >= 15 && temperature <= 25) {
    return <h1>it's Normal outside!</h1>;
  } else if (temperature > 25) {
    return <h1>it's Hot outside!</h1>;
  }
};

export default Weather;
