import React from "react";
import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Project from "../components/Project";

const Project1 = () => {
  return (
    <main>
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={0} />
        <Buttons left={"/"} right={"/projet-2"} />
      </div>
    </main>
  );
};

export default Project1;
