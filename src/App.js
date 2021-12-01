import React, { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./Routes";
import { ThemeProvider } from "styled-components";
import { pinkOrangeTheme, blueGreenTheme } from "./styles/themes";
import { GlobalStyles } from "./styles/global";
import Toggle from "./components/ThemeButton/ThemeButton";
import './App.css'

function App() {
  const [theme, setTheme] = useState("pinkOrangeTheme");

    useEffect(() => {
      const faviconUpdate = async () => {
        //grab favicon element by ID
        const favicon = document.getElementById("favicon");
        //check count value, if below 0 we change href property to our red circle image path
        if (theme === "pinkOrangeTheme") {
          favicon.href = "favicon_1.svg";
          console.log(favicon);
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
  return (
    <ThemeProvider
      theme={theme === "pinkOrangeTheme" ? pinkOrangeTheme : blueGreenTheme}
    >
      <>
        <GlobalStyles />
        <Navbar />
        <Routes />
        <Footer />
        <div className="extra">
          <h3>Bare fordi jeg kan</h3>
          <br />
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
