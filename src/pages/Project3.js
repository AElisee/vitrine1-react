import React from "react";
import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Project from "../components/Project";

const Project3 = () => {
  return (
    <main>
      <div className="project">
        <Navigation />
        <Logo />
        <Buttons left={"/projet-2"} right={"/projet-4"} />
        <Project projectNumber={2} />
      </div>
    </main>
  );
};

export default Project3;
