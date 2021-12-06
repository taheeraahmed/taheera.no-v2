import React, {useState, useEffect }  from "react";
import "./cv.scss";
import { Document, Page,pdfjs } from 'react-pdf';
import { useTranslation } from "react-i18next";
import ReactGA from "react-ga4";


const CV = {
  en: process.env.PUBLIC_URL + "/CV_taheera_en.pdf",
  no: process.env.PUBLIC_URL + "/CV_taheera_no.pdf",
};

const Cv = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('');
  const [cv, setCv] = useState(CV[i18n.language]);

  const handleClick = (e, language) => {
    ReactGA.event({
      category: "Download CV",
      action: 1,
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
      <p>
        {t("cv.subtitle")}{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/taheera-ahmed-997750158/"
        >
          LinkedIn
        </a>{" "}
      </p>
      <p>
        {t("cv.subtitle2")}{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href={cv}
          onClick={(e) => handleClick(e)}
        >
          {" "}
          {t("common.here")}
        </a>
      </p>
      <center>
        <Document file={cv} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={1} />
        </Document>
      </center>
    </div>
  );
};

export default Cv;
