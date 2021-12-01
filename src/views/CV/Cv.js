import React, {useState, useEffect }  from "react";
import "./cv.scss";
import { Document, Page,pdfjs } from 'react-pdf';
import { useTranslation } from "react-i18next";


const url = process.env.PUBLIC_URL+ "/CV_taheera.pdf"


const Cv = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
          href={process.env.PUBLIC_URL + "/CV_taheera.pdf"}
        >
          {" "}
          {t("common.here")}
        </a>
      </p>
      <center>
        <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={1} />
        </Document>
      </center>
    </div>
  );
};

export default Cv;
