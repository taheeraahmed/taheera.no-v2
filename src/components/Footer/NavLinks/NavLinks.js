import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "styled-components";
import "./navLinks.scss";

const NavLinks = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <div className="navLinksContainer">
      <NavLink
        exact
        to="/"
        activeclassname="active"
        className="navLink"
        style={{ color: themeContext.footerText }}
      >
        Hjem
      </NavLink>
      <NavLink
        exact
        to="/about"
        activeclassname="active"
        style={{ color: themeContext.footerText }}
        className="navLink"
      >
        Om meg
      </NavLink>
      <NavLink
        exact
        to="/cv"
        activeclassname="active"
        style={{ color: themeContext.footerText }}
        className="navLink"
      >
        Cv
      </NavLink>
      <NavLink
        exact
        to="/projects"
        style={{ color: themeContext.footerText }}
        activeclassname="active"
        className="navLink"
      >
        Prosjekter
      </NavLink>
    </div>
  );
};

export default NavLinks;
