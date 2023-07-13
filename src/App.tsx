import React from "react";
import "./App.scss";
import NavBar from "./components/molecules/NavBar/NavBar";
import CallToAction from "./components/molecules/CallToAction/CallToAction";
import Courses from "./components/molecules/Courses/Courses";
import Footer from "./components/organisms/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <CallToAction />
      <Courses />
      <Footer />
    </>
  );
}

export default App;
