import React, { useState, useEffect, useContext } from "react";
import "./cv.scss";
import { Document, Page, pdfjs } from "react-pdf";
import { useTranslation } from "react-i18next";
import ReactGA from "react-ga4";
import { FileDownload } from "@mui/icons-material";
import { Button } from "@mui/material";
import { ThemeContext } from "styled-components";

const CV = {
  en: process.env.PUBLIC_URL + "/CV_taheera_en.pdf",
  no: process.env.PUBLIC_URL + "/CV_taheera_no.pdf",
};

const Cv = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("");
  const [cv, setCv] = useState(CV[i18n.language]);
  const themeContext = useContext(ThemeContext);

  const styles = {
    background: {
      boxShadow: themeContext.boxShad,
      background: themeContext.gradient,
      borderRadius: "80px",
    },
  };

  const handleClick = (e, language) => {
    ReactGA.event({
      category: "Download CV",
      action: "Download CV",
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setLanguage(i18n.language);
    setCv(CV[language]);
  }, [i18n.language, cv, language]);

  const [, setNumPages] = useState(null);
  const [, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <div className="cv">
      <h1>Cv</h1>
      <center>
        <Document file={cv} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={1} />
        </Document>
      </center>
      <br />
      <Button
        sx={styles.background}
        variant="contained"
        endIcon={<FileDownload />}
        rel="noreferrer"
        target="_blank"
        href={cv}
        onClick={(e) => handleClick(e)}
      >
        Download CV
      </Button>
    </div>
  );
};

export default Cv;
