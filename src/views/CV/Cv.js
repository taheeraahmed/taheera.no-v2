import React  from "react";
import "./cv.scss";
import { Document, Page, pdfjs } from "react-pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

const Cv = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

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
        <Document file="CV_taheera.pdf">
          <Page pageNumber={1} />
        </Document>
      </center>
    </div>
  );
};

export default Cv;
