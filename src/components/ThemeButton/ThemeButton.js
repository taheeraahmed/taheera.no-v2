// Toggle.js
import React from "react";
import { func, string } from "prop-types";
import { Switch } from "@mui/material";
// Import a couple of SVG files we'll use in the design: https://www.flaticon.com


const Toggle = ({ theme, toggleTheme }) => {
  return (
      <>
    <Switch onClick={toggleTheme}/>
    <p>Prøv meg :)))</p>
    </>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
