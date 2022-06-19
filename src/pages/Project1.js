import React from "react";
import Buttons from "../components/Buttons";
// import Mouse from "../components/Mouse";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import Project from "../components/Project";

const Project1 = () => {
  return (
    <main>
      <div className="project">
        {/* <Mouse /> */}
        <Navigation />
        <Logo />
        <Buttons left={"/"} right={"/projet-2"} />
        <Project projectNumber={0} />
      </div>
    </main>
  );
};

export default Project1;
