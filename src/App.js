import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./Routes";
import { ThemeProvider } from "styled-components";
import { pinkOrangeTheme, blueGreenTheme } from "./styles/themes";
import { GlobalStyles } from "./styles/global";
import Toggle from "./components/ThemeButton/ThemeButton";

function App() {
  const [theme, setTheme] = useState("pinkOrangeTheme");
  const toggleTheme = () => {
    if (theme === "pinkOrangeTheme") {
      setTheme("blueGreenTheme");
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
        <Footer />
        <h3>Bare fordi jeg kan</h3>
        <br/>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </>
    </ThemeProvider>
  );
}

export default App;
