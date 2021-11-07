import React from "react";
import { NavLink } from "react-router-dom";
import "./navLinks.scss";

const NavLinks = () => {
  return (
    <div className="navLinksContainer">
      <NavLink exact 
        to="/" 
        activeClassName="active" 
        className="navLink">
        Hjem
      </NavLink>
      <NavLink exact 
        to="/about" 
        activeClassName="active" 
        className="navLink">
        Om meg
      </NavLink>
      <NavLink exact 
        to="/cv" 
        activeClassName="active" 
        className="navLink">
        Cv
      </NavLink>
      <NavLink
        exact
        to="/projects"
        activeClassName="active"
        className="navLink"
      >
        Prosjekter
      </NavLink>
    </div>
  );
};

export default NavLinks;
