import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "styled-components";
import "./navLinks.scss";
import { useTranslation } from "react-i18next";


const NavLinks = () => {
  const themeContext = useContext(ThemeContext);
  const { t } = useTranslation();



  return (
    <div className="navLinksContainer">
      <NavLink
        exact
        to="/"
        activeclassname="active"
        className="navLink"
        style={{ color: themeContext.footerText }}
      >
        <p>{t("common.home")}</p>
      </NavLink>
      <NavLink
        exact
        to="/about"
        activeclassname="active"
        style={{ color: themeContext.footerText }}
        className="navLink"
      >
        <p>{t("common.aboutme")}</p>
      </NavLink>
      <NavLink
        exact
        to="/cv"
        activeclassname="active"
        style={{ color: themeContext.footerText }}
        className="navLink"
      >
        <p>Cv</p>
      </NavLink>
      <NavLink
        exact
        to="/projects"
        style={{ color: themeContext.footerText }}
        activeclassname="active"
        className="navLink"
      >
        <p>{t("common.projects")}</p>
      </NavLink>
    </div>
  );
};

export default NavLinks;
