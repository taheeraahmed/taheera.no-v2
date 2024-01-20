import React, { useEffect, useRef } from "react";
import CalendarWithCoupons from "../../components/Coupons/Coupons";
import "./calendar.scss";
import { IconButton, Stack, Typography } from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";

const CouponView = () => {
  const nextWindowRef = useRef(null);
  const scrollToNextWindow = () => {
    if (nextWindowRef.current) {
      window.scrollTo({
        top: nextWindowRef.current.offsetTop,
        behavior: "smooth",
      });
      localStorage.setItem("hasScrolled", "true");
    }
  };
  useEffect(() => {
    const hasScrolled = localStorage.getItem("hasScrolled");
    if (hasScrolled === "true" && nextWindowRef.current) {
      window.scrollTo({
        top: nextWindowRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div className="calendar">
      <div className="text-container">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <h1>30 dager med Andre</h1>
          <Typography
            variant="body"
            style={{ width: "40%", textAlign: "center" }}
          >
            Okei jeg vet du er helt elendig med julekalendere 🎄, men dette er
            inspirert av en julekalender. MEN i stedet for at det er 24 gaver
            🎁, er det 30 fordi du blir 30 år #gammel 👴👵
          </Typography>
          <Typography
            variant="body"
            style={{ width: "40%", textAlign: "center" }}
          >
            Fra og med 15. februar skal du få 30 gaver 🎉, noen små, men også
            noen store. Alle gavene er ting jeg som minner meg om deg 💭, og
            ting jeg (tror) jeg vet at du liker 💖
          </Typography>
          <Typography
            variant="body"
            style={{ width: "40%", textAlign: "center" }}
          >
            Du må sjekke denne siden hver dag til du blir 30 hihi 😄 for å vite
            hvilken gave som tilhører hvilken dag. For hver dag får du en kode
            🔑 som sier hvilken pakke du skal åpne.
          </Typography>

          <IconButton onClick={scrollToNextWindow} className="glowy-button">
            <ArrowDownward fontSize="large" />
          </IconButton>
        </Stack>
      </div>
      <div ref={nextWindowRef} style={{ height: "100vh" }}>
        <CalendarWithCoupons />
      </div>
      <br />
      <br />
    </div>
  );
};

export default CouponView;
