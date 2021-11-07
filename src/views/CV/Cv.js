import React, { useState } from "react";
import "./cv.scss";
import { Document, Page } from "react-pdf";

import PDF from "./CV_taheera.pdf";

const Cv = () => {
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
        <Document file={PDF}>
          <Page pageNumber={1} />
        </Document>
      </a>
    </div>
  );
};

export default Cv;
