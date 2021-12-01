import React from "react";
import { Chip } from "@mui/material";
import { Mail, PhoneIphone } from "@mui/icons-material";
import "./contact.scss";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

const Contact = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <div className="contact">
      <Chip
        sx={{
          backgroundColor: "transparent",
          fontSize: "12pt",
        }}
        style={{ color: themeContext.footerText }}
        icon={<PhoneIphone sx={{ fontSize: "12pt", color: "black" }} />}
        label="+47 949 86 709"
      />
      <Chip
        sx={{
          backgroundColor: "transparent",
          fontSize: "12pt",
          color: "black",
        }}
        style={{ color: themeContext.footerText }}
        icon={<Mail sx={{ fontSize: "12pt", color: "black" }} />}
        label="taheera@hotmail.com"
      />
      <Chip
        sx={{
          backgroundColor: "transparent",
          fontSize: "12pt",
          color: "black",
        }}
        style={{ color: themeContext.footerText }}
        icon={<Mail sx={{ fontSize: "12pt", color: "black" }} />}
        label="taheera@hotmail.com"
      />
    </div>
  );
};

export default Contact;
