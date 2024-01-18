import React, { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./Routes";
import { ThemeProvider } from "styled-components";
import { pinkOrangeTheme, blueGreenTheme } from "./styles/themes";
import { GlobalStyles } from "./styles/global";
import Toggle from "./components/ThemeButton/ThemeButton";
import "./App.scss";
import { useTranslation } from "react-i18next";
import LanguageButton from "./components/LanguageButton/LanguageButton";
import { Grid } from "@mui/material";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";

function App() {
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useState(
    darkThemeMq.matches ? "blueGreenTheme" : "pinkOrangeTheme"
  );
  const { t } = useTranslation();

  useEffect(() => {
    const gaTrackingId = "G-YL2X2XBVYQ"; // enter your Tracking ID
    ReactGA.initialize(gaTrackingId);
    ReactGA.send("pageview");
  });

  const location = useLocation();

  useEffect(() => {
    const faviconUpdate = async () => {
      //grab favicon element by ID
      const favicon = document.getElementById("favicon");
      //check count value, if below 0 we change href property to our red circle image path
      if (theme === "pinkOrangeTheme") {
        favicon.href = "favicon_1.svg";
      }
      //if above 0, we set back to green
      else {
        favicon.href = "favicon_2.svg";
      }
    };
    //run our function here
    faviconUpdate();

    //2nd paramenter passed to useEffect is dependency array so that this effect only runs on changes to count
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "pinkOrangeTheme") {
      setTheme("blueGreenTheme");
    } else {
      setTheme("pinkOrangeTheme");
    }
  };
  const showNavbarAndFooter = location.pathname !== "/linktree" && location.pathname !== "/forecastking";

  return (
    <ThemeProvider
      theme={theme === "pinkOrangeTheme" ? pinkOrangeTheme : blueGreenTheme}
    >
      <>
        <GlobalStyles />
        {showNavbarAndFooter && <Navbar />}
        <Routes />
        {showNavbarAndFooter && <Footer />}
        {location.pathname === "/linktree" || "forecastking" ? null : (
          <>
            <Grid container spacing={5} className="extra">
              <Grid item className="box" md={6} xs={12}>
                <h3 style={{ fontSize: "1em" }}>{t("common.becauseIcan")}</h3>
                <br />
                <Toggle theme={theme} toggleTheme={toggleTheme} />
              </Grid>
              <Grid item className="box" md={6} xs={12}>
                <h3 style={{ fontSize: "1em" }}>{t("common.changeLang")}</h3>
                <br />
                <LanguageButton />
              </Grid>
            </Grid>
          </>
        )}
      </>
    </ThemeProvider>
  );
}

export default App;
