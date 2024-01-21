import { Typography } from "@mui/material";
import React from "react";
import "./styles.css";

const FrontPageText = () => {
  const emojiPattern = ["👴", "💛"];
  const numberOfRepeats = 16; // Adjust the number of repeats as needed
  const emojis = [];

  for (let i = 0; i < numberOfRepeats; i++) {
    emojis.push(...emojiPattern);
  }

  const today = new Date();
  const isMarch15 = today.getMonth() === 2 && today.getDate() === 15;

  return (
    <>
      {isMarch15 ? (
        <>
          <h1
            style={{
              textAlign: "center",
              color: "transparent",
              paddingTop: "25px",
            }}
          >
            Gratulerer kjæresten miiiiin
          </h1>
          <p
            style={{
              textAlign: "center",
              fontSize: "16pt",
              paddingTop: "-2px",
            }}
          >
            {emojis.map((emoji, index) => (
              <span
                key={index}
                className="wave"
                style={{ "--char-index": index }}
              >
                {emoji}
              </span>
            ))}
          </p>
        </>
      ) : (
        <h1>30 dager med André</h1>
      )}
      <Typography variant="body" style={{ width: "40%", textAlign: "center" }}>
        Jeg tviler på at forecastking så for seg denne gaven:))
      </Typography>
      <Typography variant="body" style={{ width: "40%", textAlign: "center" }}>
        Okei jeg vet du er helt elendig med julekalendere 🎄, men dette er
        inspirert av en julekalender. MEN i stedet for at det er 24 gaver 🎁, er
        det 30 fordi du blir 30 år #gammel 👴👵
      </Typography>
      <Typography variant="body" style={{ width: "40%", textAlign: "center" }}>
        Fra og med 15. februar skal du få 30 gaver 🎉, noen små, men også noen
        store. Alle gavene er ting som minner meg om deg 💭, og ting jeg (tror
        jeg) vet at du liker 💖
      </Typography>
      <Typography variant="body" style={{ width: "40%", textAlign: "center" }}>
        Du må sjekke denne siden hver dag til du blir 30 hihi for å vite hvilken
        gave som tilhører hvilken dag. For hver dag får du en kode 🔑 som sier
        hvilken pakke du skal åpne.
      </Typography>
    </>
  );
};

export default FrontPageText;
