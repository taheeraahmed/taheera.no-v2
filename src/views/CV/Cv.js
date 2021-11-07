import React, { useState } from "react";
import "./cv.scss";
import { Document, Page, pdfjs } from "react-pdf";

import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

import PDF from "./CV_taheera.pdf";

const Cv = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
  
  return (
    <div className="cv">
      <h1>Cv</h1>
      <p>
        Her ligger CV-en min. For mer detaljer rundt denne kan du gjerne sjekke
        ut{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/taheera-ahmed-997750158/"
        >
          LinkedIn profilen min
        </a>
      </p>
      <a
        href={process.env.PUBLIC_URL + "/CV_taheera.pdf"}
        rel="noreferrer"
        target="_blank"
      >
        <Document file="CV_taheera.pdf">
          <Page pageNumber={1} />
        </Document>
      </a>
    </div>
  );
};

export default Cv;
