import React from "react";
import { Chip } from "@mui/material";
import { Mail, PhoneIphone } from "@mui/icons-material";
import "./contact.scss";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const themeContext = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <div className="contact">
      <p
        style={{
          padding: "0 8em 0 8em",
          color: themeContext.footerText,
          lineHeight: 1.3,
          fontWeight: "lighter",
        }}
      >
        {t("common.contactDesc")}
      </p>
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
