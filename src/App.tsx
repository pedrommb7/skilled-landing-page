import React from "react";
import "./App.scss";
import NavBar from "./components/molecules/NavBar/NavBar";
import CallToAction from "./components/molecules/CallToAction/CallToAction";
import Courses from "./components/molecules/Courses/Courses";

function App() {
  return (
    <div className="px--16 pt--16">
      <NavBar />
      <CallToAction />
      <Courses />
    </div>
  );
}

export default App;
