import React from "react";
import { func, string } from "prop-types";
import { Switch } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 32,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(0px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(30px)",
      "& + .MuiSwitch-track": {
        backgroundColor: 'transparent',
      },
    },
  },
  "& .MuiSwitch-thumb": {
    width: 29,
    height: 29,
    boxShadow: 0,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: 'transparent',
    borderRadius: 20 / 2,
  },
}));


const Toggle = ({ theme, toggleTheme }) => {
  const themeContext = useContext(ThemeContext);

  const styles = {
    background: {
      boxShadow: themeContext.boxShad,
      background: themeContext.gradient,
      borderRadius: '80px'
    },
  };

  console.log(theme)

  return (
    <>
      <MaterialUISwitch onClick={toggleTheme} sx={styles.background} />
    </>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
