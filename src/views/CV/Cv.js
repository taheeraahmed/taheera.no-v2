import React, {useState, useEffect, useContext}  from "react";
import "./cv.scss";
import { Document, Page,pdfjs } from 'react-pdf';
import { ThemeContext } from "styled-components";

const url = process.env.PUBLIC_URL+ "/CV_taheera.pdf"


const Cv = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    const themeContext = useContext(ThemeContext);

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
        Her ligger CV-en min. For mer detaljer rundt CV-en kan du gjerne sjekke
        ut{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/taheera-ahmed-997750158/"
        >
          LinkedIn
        </a>
        {" "}profilen min 
      </p>
      <p>
        Dersom det skulle være ønkselig kan du laste ned CV-en min{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href={process.env.PUBLIC_URL + "/CV_taheera.pdf"}
        >
          her
        </a>
      </p>
      <center>
        <Document 
          file={url}
          onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={1} />
        </Document>
      </center>
    </div>
  );
};

export default Cv;
