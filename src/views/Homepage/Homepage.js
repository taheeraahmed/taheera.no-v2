import React, { useEffect } from "react";
import "./homepage.scss";
import ImageWithBorder from "../../components/ImageWithBorder/ImageWithBorder";
import {
  GitHub,
  Email,
  LinkedIn,
} from "@mui/icons-material";
import { FaTiktok } from "react-icons/fa";
import { Grid, IconButton, Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { useTranslation } from "react-i18next";

const picture = {
  pinkOrangeTheme: require("../../assets/images/meg_1.jpg").default,
  blueGreenTheme: require("../../assets/images/meg_2.jpg").default,
};

const Homepage = () => {
  const themeContext = useContext(ThemeContext);
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const links = [
    {
      url: "https://www.linkedin.com/in/taheera-ahmed-997750158/",
      component: (
        <LinkedIn fontSize="large" style={{ color: themeContext.white }} />
      ),
    },
    {
      url: "https://github.com/taheeraahmed",
      component: (
        <GitHub fontSize="large" style={{ color: themeContext.white }} />
      ),
    },
    {
      url: "mailto:taheera@hotmail.com",
      component: (
        <Email fontSize="large" style={{ color: themeContext.white }} />
      ),
    },
    {
      url: "https://www.tiktok.com/@taheera.py",
      component: <FaTiktok size={28} style={{ color: themeContext.white }} />,
    },
  ];

  return (
    <div className="homepage">
      <Grid container className="homepage" spacing={10}>
        <Grid item className="image" xs={12} md={6}>
          <ImageWithBorder
            src={picture[themeContext.name]}
            alt="Taheera Ahmed"
            width="60%"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="text">
            <h1>Taheera Ahmed</h1>
            <span>
              <Typography variant="body2">{t("homepage.study")}</Typography>
              <Typography variant="body2" style={{ paddingTop: 10 }}>
                {t("homepage.bio")}
              </Typography>
              <Typography variant="body2" style={{ paddingTop: 10 }}>
                {t("homepage.girlstech")}
              </Typography>
            </span>
          </div>
          <div className="icons">
            {links.map((link, index) => (
              <a key={index} href={link.url} rel="noreferrer" target="_blank">
                <IconButton>{link.component}</IconButton>
              </a>
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Homepage;
