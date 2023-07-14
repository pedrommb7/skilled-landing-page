import React from "react";
import "./App.scss";
import NavBar from "./components/molecules/NavBar/NavBar";
import CallToAction from "./components/molecules/CallToAction/CallToAction";
import Courses from "./components/molecules/Courses/Courses";
import Footer from "./components/organisms/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <CallToAction />
      <Courses />
      <Footer />
    </div>
  );
}

export default App;
