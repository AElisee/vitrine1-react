import React from "react";
import { NavLink } from "react-router-dom";

const Buttons = ({ left, right }) => {
  return (
    <div className="scroll-bottom">
      {left && (
        <NavLink to={left} className="hover left">
          <span>&#10092;</span>
        </NavLink>
      )}

      {right && (
        <NavLink to={right} className="hover right">
          <span>&#10093;</span>
        </NavLink>
      )}
    </div>
  );
};

export default Buttons;
