import { Button, ButtonGroup } from "@mui/material";
import { ThemeContext } from "styled-components";
import React, { useContext  } from "react";
import { useTranslation } from "react-i18next";
import ReactGA from "react-ga4";

const lngs = {
  en: { nativeName: "English" },
  no: { nativeName: "Norsk" },
};

const handleClick = (e, language) => {
  ReactGA.event({
    category: "Language",
    action: language,
  });
}

const LanguageButton = () => {
  const { i18n } = useTranslation();
  const themeContext = useContext(ThemeContext);

  return (
    <ButtonGroup>
      {Object.keys(lngs).map((lng) => (
        <Button
          color="secondary"
          key={lng}
          disableElevation
          sx={{
            "&.MuiButton-root": {
              fontWeight: i18n.resolvedLanguage === lng ? "1000" : "normal",
              textTransform: "capitalize",
              background:
                i18n.resolvedLanguage === lng ? themeContext.colorOpacity : "",
              marginLeft: "8px",
              padding: '2px 8px 2px 8px',
              fontSize: '12pt',
              color: themeContext.color,
              border: `1px ${themeContext.color} solid`,
              "&:hover": {
                border: `1px ${themeContext.color} solid`,
                color: themeContext.color,
              },
            },
          }}
          type="submit"
          onClick={(e) => {
            i18n.changeLanguage(lng) && handleClick(e, lng);
          }}
        >
          {lngs[lng].nativeName}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default LanguageButton;
