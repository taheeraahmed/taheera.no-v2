import { Typography } from "@mui/material";
import React, { useState, useEffect } from 'react';
import "./styles.css";

const FrontPageText = () => {
  const emojiPattern = ["👴", "💛"];
  const numberOfRepeats = 16; // Adjust the number of repeats as needed
  const emojis = [];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const typographyStyle = {
    textAlign: "center",
    width: windowWidth > 800 ? '40%' : '100%', // 40% width if window width is more than 800px
  };
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
      <Typography variant="body"  style={typographyStyle}>
        Jeg tviler på at forecastking så for seg denne gaven:))
      </Typography>
      <Typography variant="body"  style={typographyStyle}>
        Okei jeg vet du er helt elendig med julekalendere 🎄, men dette er
        inspirert av en julekalender. MEN i stedet for at det er 24 gaver 🎁, er
        det 30 fordi du blir 30 år #gammel 👴👵
      </Typography>
      <Typography variant="body"  style={typographyStyle}>
        Fra og med 15. februar skal du få 30 gaver 🎉, noen små, men også noen
        store. Alle gavene er ting som minner meg om deg 💭, og ting jeg (tror
        jeg) vet at du liker 💖
      </Typography>
      <Typography variant="body"  style={typographyStyle}>
        Du må sjekke denne siden hver dag til du blir 30 hihi for å vite hvilken
        gave som tilhører hvilken dag. For hver dag får du en kode 🔑 som sier
        hvilken pakke du skal åpne. Hvorfor jeg valgte å gjøre det på denne
        måten, og ikke bare skrive dato, i stedet for kode spør du? Jeg spør meg
        selv om det samme i det jeg skriver dette :)))
      </Typography>
      <Typography variant="body"  style={typographyStyle}>
        Liten tilleggs ting: Du må vite HVOR MYE JEG HATER OG PAKKE INN GAVER.
        Uansett glhf, håper du liker gaven min 🥰
      </Typography>
    </>
  );
};

export default FrontPageText;
