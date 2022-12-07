import { Button } from "@mui/material";
import React, { useContext } from "react";
import "./LinkTreeButton.css";
import { ThemeContext } from "styled-components";

const LinkTreeButton = ({ name, url, icon }) => {
  const themeContext = useContext(ThemeContext);
  return (
    <>
      <a href={url} target="_blank" rel="noreferrer">
        <Button
          fullWidth
          sx={{
            "&.MuiButton-root": {
              margin: "10px 0",
              border: "2px solid",
              borderImageSlice: 1,
              borderWidth: "2px",
              boxShadow: themeContext.boxShad,
              borderImageSource: themeContext.gradient,
              color: themeContext.text,
              textTransform: "lowercase",
            },
          }}
        >
          {name}
        </Button>
      </a>
    </>
  );
};

export default LinkTreeButton;
