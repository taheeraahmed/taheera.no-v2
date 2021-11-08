import React, {useState, useEffect}  from "react";
import "./cv.scss";
import { Document, Page,pdfjs } from 'react-pdf';

const url = process.env.PUBLIC_URL+ "/CV_taheera.pdf"


const Cv = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  console.log(numPages,pageNumber)
  
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
