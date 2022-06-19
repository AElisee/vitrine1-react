import React from "react";
import Buttons from "../components/Buttons";
import DinamicText from "../components/DinamicText";
// import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import SocialNetWork from "../components/SocialNetWork";

const Home = () => {
  return (
    <div>
      {/* <Mouse /> */}
      <div className="home">
        <Navigation />
        <SocialNetWork />
        <div className="home-main">
          <div className="main-content">
            <h1>ELISHA DS </h1>
            <h2>
              <DinamicText />
            </h2>
          </div>
        </div>
        <Buttons right={"/projet-1"} />
      </div>
    </div>
  );
};

export default Home;
