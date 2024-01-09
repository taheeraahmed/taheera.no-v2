import React, { useEffect } from "react";
import "./homepage.scss";
import ImageWithBorder from "../../components/ImageWithBorder/ImageWithBorder";
import {
  Facebook,
  GitHub,
  Instagram,
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
            <a
              href="https://www.facebook.com/taheera.ahmed"
              rel="noreferrer"
              target="_blank"
            >
              <IconButton>
                <Facebook
                  fontSize="large"
                  style={{ color: themeContext.white }}
                />
              </IconButton>
            </a>
            <a
              href="https://www.linkedin.com/in/taheera-ahmed-997750158/"
              rel="noreferrer"
              target="_blank"
            >
              <IconButton>
                <LinkedIn
                  fontSize="large"
                  style={{ color: themeContext.white }}
                />
              </IconButton>
            </a>
            <a
              href="https://github.com/taheeraahmed"
              rel="noreferrer"
              target="_blank"
            >
              <IconButton>
                <GitHub
                  fontSize="large"
                  style={{ color: themeContext.white }}
                />
              </IconButton>
            </a>
            <a
              href="https://www.instagram.com/taheera.py/"
              rel="noreferrer"
              target="_blank"
            >
              <IconButton>
                <Instagram
                  fontSize="large"
                  style={{ color: themeContext.white }}
                />
              </IconButton>
            </a>
            <a href="mailto:taheera@hotmail.com">
              <IconButton>
                <Email fontSize="large" style={{ color: themeContext.white }} />
              </IconButton>
            </a>
            <a
              href="https://www.tiktok.com/@taheera.py"
              rel="noreferrer"
              target="_blank"
            >
              <IconButton>
                <FaTiktok size={28} style={{ color: themeContext.white }} />
              </IconButton>
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Homepage;
