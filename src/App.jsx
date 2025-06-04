import React from "react";
import Greet from "./components/Greet";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import WelcomeMessage from "./components/WelcomeMessage";

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
    </div>
  );
};

export default App;
