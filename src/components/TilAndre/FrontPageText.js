import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./styles.css";
import { getText } from "../../api/api";

const FrontPageText = () => {
  const emojiPattern = ["👴", "💛"];
  const numberOfRepeats = 16; // Adjust the number of repeats as needed
  const emojis = [];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [text, setText] = useState("");

  useEffect(() => {
    // Fetch text from the API
    const fetchText = async () => {
      try {
        const responseText = await getText();
        setText(responseText);
      } catch (error) {
        console.error("Error fetching text:", error);
      }
    };

    // Fetch text and check if it's March 15 on component mount
    fetchText();

    // Event listener to update window width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const typographyStyle = {
    textAlign: "center",
    width: windowWidth > 800 ? "40%" : "100%", // 40% width if window width is more than 800px
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
        <>{text.headline !== "" && <h1>{text.headline}</h1>}</>
      )}
      {text !== "" ? (
        <>
          <Typography variant="overline" style={typographyStyle}>
            {text.subheadline}
          </Typography>
          <Typography variant="body" style={typographyStyle}>
            {text.text[0]}
          </Typography>
          <Typography variant="body" style={typographyStyle}>
            {text.text[1]}
          </Typography>
          <Typography variant="body" style={typographyStyle}>
            {text.text[2]}
          </Typography>
          <Typography variant="body" style={typographyStyle}>
            {text.text[3]}
          </Typography>
        </>
      ) : null}
    </>
  );
};

export default FrontPageText;
