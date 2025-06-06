import React from "react";
import Greet from "./components/Greet";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import WelcomeMessage from "./components/WelcomeMessage";
import JSXRules from "./components/JSXRules";
import JSXexpression from "./components/JSXexpression";
import Greeting from "./components/Greeting";
import ProductInfo from "./components/ProductInfo";

const App = () => {
  return (
    <div>
      {/* importing Greet component for the Component Excercise task */}
      <Greet />

      {/* importing all the components for the Excercise task, in an correct order */}
      <Header />
      <MainContent />
      <Footer />

      {/* importing WelcomeMessage component for the JSX Excercise task */}
      <WelcomeMessage />

      {/* importing JSXRules component for the JSX Rules Excercise task */}
      <JSXRules />

      {/* importing JSXexpression component for the JSX Expression theory */}
      <JSXexpression />

      {/* importing JSXRules component for the JSX Rules Excercise task */}
      <Greeting />

      {/* importing JSXRules component for the JSX Rules Excercise task */}
      <ProductInfo />
    </div>
  );
};

export default App;
