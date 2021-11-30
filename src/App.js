import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./Routes";
import { ThemeProvider } from "styled-components";
import { pinkOrangeTheme, blueGreenTheme } from "./styles/themes";
import { GlobalStyles } from "./styles/global";
import { Button } from "@mui/material";

function App() {
  const [theme, setTheme] = useState("pinkOrangeTheme");
  // The function that toggles between themes
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === "pinkOrangeTheme") {
      setTheme("blueGreenTheme");
      // otherwise, it should be light
    } else {
      setTheme("pinkOrangeTheme");
    }
  };
  return (
    <ThemeProvider
      theme={theme === "pinkOrangeTheme" ? pinkOrangeTheme : blueGreenTheme}
    >
      <>
        <GlobalStyles />
        <Navbar />
        <Routes />
        <Button onClick={toggleTheme}>Toggle theme</Button>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
