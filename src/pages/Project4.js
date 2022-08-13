import React from "react";
import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Project from "../components/Project";

const Project4 = () => {
  return (
    <main>
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={3} />
        <Buttons left={"/projet-3"} right={"/contact"} />
      </div>
    </main>
  );
};

export default Project4;
