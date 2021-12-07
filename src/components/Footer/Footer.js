import React, { useContext } from "react";
import "./footer.scss";
import "../../styles/fonts.scss";
import { Grid } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import Contact from "./Contact/Contact";
import NavLinks from "./NavLinks/NavLinks";
import { ThemeContext } from "styled-components";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const themeContext = useContext(ThemeContext);
  const { t } = useTranslation();
  const location = useLocation();
  if (location.pathname === "/dashboard") return null;
  
  return (
    <div className="footer">
      <Grid container spacing={5}>
        <Grid item md={4} xs={12}>
          <h3>{t("common.contact")}</h3>
          <Contact />
        </Grid>
        <Grid item md={4} xs={12}>
          <h3>{t("common.menu")}</h3>
          <NavLinks />
        </Grid>
        <Grid item md={4} xs={12}>
          <h3>Github repository</h3>
          <br />
          <div className="github-icon">
            <a
              activeclassname="active"
              style={{ color: themeContext.footerText }}
              href="https://github.com/taheeraahmed/taheera.no-vol-2"
            >
              <GitHub
                sx={{ fontSize: 70 }}
                style={{ color: themeContext.footerText }}
              />
              <br />
              {t("common.githubfooter")}
              <br />
              {t("common.githubfooter2")}
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
