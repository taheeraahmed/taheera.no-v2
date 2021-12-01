import { Button, ButtonGroup } from '@mui/material';
import { ThemeContext } from "styled-components";
import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next';

const lngs = {
  en: { nativeName: "English" },
  no: { nativeName: "Norsk" },
};


const LanguageButton = () => {
    const { i18n } = useTranslation();
    const themeContext = useContext(ThemeContext);

    const styles = {
      "&.MuiButton-root": {
        border: `1px ${themeContext.color} solid`,
        color: themeContext.color,
        marginLeft: '8px',
        "&:hover": {
          border: `1px ${themeContext.color} solid`,
          color: themeContext.color,
        },
      },
    };
    console.log(themeContext.color)
    return (
      <ButtonGroup>
        {Object.keys(lngs).map((lng) => (
          <Button
            color="secondary"
            key={lng}
            disableElevation
            sx={styles}
            type="submit"
            onClick={() => {
              i18n.changeLanguage(lng);
            }}
          >
            {lngs[lng].nativeName}
          </Button>
        ))}
      </ButtonGroup>
    );
}

export default LanguageButton
