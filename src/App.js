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
      const favicon = document.getElementById("favicon");
      const path = location.pathname;

      if (path === "/forecastking") {
        favicon.href = "data:image/svg+xml," + encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32'><text x='50%' y='50%' dy='.35em' text-anchor='middle' font-size='24'>💛</text></svg>`);
      } else {
        if (theme === "pinkOrangeTheme") {
          favicon.href = "favicon_1.svg";
        } else {
          favicon.href = "favicon_2.svg";
        }
      }
    };

    faviconUpdate();
  }, [theme, location]); // Add location to the dependency array

  const toggleTheme = () => {
    if (theme === "pinkOrangeTheme") {
      setTheme("blueGreenTheme");
    } else {
      setTheme("pinkOrangeTheme");
    }
  };
  const showNavbarAndFooter =
    location.pathname !== "/linktree" && location.pathname !== "/forecastking";

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
