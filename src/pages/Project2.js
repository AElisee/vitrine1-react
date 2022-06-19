import React from "react";
import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Project from "../components/Project";

const Project2 = () => {
  return (
    <main>
      <div className="project">
        <Navigation />
        <Logo />
        <Buttons left={"/projet-1"} right={"/projet-3"} />
        <Project projectNumber={1} />
      </div>
    </main>
  );
};

export default Project2;
