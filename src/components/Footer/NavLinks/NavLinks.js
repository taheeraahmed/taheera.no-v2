import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "styled-components";
import "./navLinks.scss";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";


const NavLinks = () => {
  const themeContext = useContext(ThemeContext);
  const { t } = useTranslation();

  const navlinks = [
    {
      to: "/",
      text: t("common.home"),
    },
    {
      to: "/about",
      text: t("common.aboutme"),
    },
    {
      to: "/cv",
      text: "CV"
    },
    {
      to: "/projects",
      text: t("common.projects"),
    },
  ];

  return (
    <div className="navLinksContainer">
      {navlinks.map((link, index) => (
        <NavLink
          key={index}
          exact
          to={link.to}
          activeclassname="active"
          style={{ color: themeContext.footerText }}
          className="navLink"
        >
          <Typography variant="body2">{link.text}</Typography>
        </NavLink>
      ))}
    </div>
  );
};

export default NavLinks;
