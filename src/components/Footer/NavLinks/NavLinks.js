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
        {t("common.home")}
      </NavLink>
      <NavLink
        exact
        to="/about"
        activeclassname="active"
        style={{ color: themeContext.footerText }}
        className="navLink"
      >
        {t("common.aboutme")}
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
        {t("common.projects")}
      </NavLink>
    </div>
  );
};

export default NavLinks;
