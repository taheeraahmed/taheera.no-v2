import React, {useEffect} from "react";
import "./homepage.scss";
import ImageWithBorder from "../../components/ImageWithBorder/ImageWithBorder";
import { Facebook, GitHub, Instagram, Email, LinkedIn } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { useTranslation } from "react-i18next";
import LanguageButton from "../../components/LanguageButton/LanguageButton";


const picture = {
  pinkOrangeTheme: require("../../assets/meg_1.jpg").default,
  blueGreenTheme: require("../../assets/meg_2.jpg").default,
};

const Homepage = () => {
  const themeContext = useContext(ThemeContext);
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0)

  }, [])
  return (
    <div className="homepage">
      <Grid container className="homepage" spacing={10}>
        <Grid item className="image" xs={12} md={6}>
          <ImageWithBorder
            src={picture[themeContext.name]}
            alt="Taheera Ahmed"
            width="40%"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="text">
            <h1>Taheera Ahmed</h1>
            <div className="chips">
              <p>{t("homepage.age")}</p>
              <div
                className="circle"
                style={{ boxShadow: themeContext.boxShad }}
              />
              <p>{t("homepage.compsci")}</p>{" "}
              <div
                className="circle"
                style={{ boxShadow: themeContext.boxShad }}
              />{" "}
              <p>Trondheim</p>
            </div>
            <LanguageButton />

            <span>
              <p>{t("homepage.bio")} </p>
              <p>
                {t("homepage.dataengineer")}
                <a href="https://www.youtube.com/watch?v=CmkaDiaAB9E&ab_channel=TaheeraAhmed">
                  {t("homepage.checkout")}
                </a>
                .
              </p>
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
              href="https://www.instagram.com/taheera_/"
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
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Homepage;
