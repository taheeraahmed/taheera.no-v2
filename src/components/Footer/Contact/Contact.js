import React from "react";
import { Chip, Typography } from "@mui/material";
import { Mail } from "@mui/icons-material";
import "./contact.scss";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const themeContext = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <div className="contact">
      <Typography
        variant="body2"
        style={{
          padding: "0 6em 0 6em",
          color: themeContext.footerText,
        }}
      >
        {t("common.contactDesc")}
      </Typography>
      <Chip
        sx={{
          backgroundColor: "transparent",
          color: "black",
        }}
        style={{ color: themeContext.footerText }}
        icon={<Mail sx={{ color: "black" }} />}
        label="taheera@hotmail.com"
      />
    </div>
  );
};

export default Contact;
