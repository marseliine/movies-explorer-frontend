import React from "react";
import { NavLink } from "react-router-dom";

const NavLinkWithClass = ({ to, text, isActive, className }) => {
  const classes = [className];
  if (isActive) {
    classes.push("active");
  }
  const finalClassName = classes.join(" ");

  return (
    <NavLink className={finalClassName} to={to}>
      {text}
    </NavLink>
  );
};

export default NavLinkWithClass;
