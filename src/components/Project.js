import React, { useEffect, useState } from "react";
import { projectsData } from "../data/projectsData";

const Project = ({ projectNumber }) => {
  const [currentProject] = useState(projectsData[projectNumber]);
  const [top, setTop] = useState("");
  const [left, setLeft] = useState("");
  const [size, setSise] = useState("");

  useEffect(() => {
    setTop(Math.floor(Math.random() * 200 + 150) + "px");
    setLeft(Math.floor(Math.random() * 200 + 700) + "px");
    setSise("scale(" + Math.random() + 70 + ")");
  }, []);
  return (
    <div className="project-main">
      <div className="project-content">
        <h1>{currentProject.title}</h1>
        <p>{currentProject.date}</p>
        <ul className="languages">
          {currentProject.languages.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
      <div className="img-content">
        <div className="img-container hover">
          <span>
            <h3>{currentProject.title}</h3>
            <p>{currentProject.infos}</p>
          </span>
          <img
            src={currentProject.img}
            alt={currentProject.infos}
            className="img"
          />
        </div>
        <div className="button-container">
          <a
            href={currentProject.link}
            target="_blank"
            rel="noreferrer noopener"
            className="hover"
          >
            <span className="button">Voir le site</span>
          </a>
        </div>
      </div>
      <span
        className="random-circle"
        style={{ top, left, transform: size }}
      ></span>
    </div>
  );
};

export default Project;
