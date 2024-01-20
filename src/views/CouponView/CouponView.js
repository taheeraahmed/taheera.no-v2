import React from "react";
import CalendarWithCoupons from "../../components/Coupons/Coupons";
import "./calendar.scss";
import { Stack, TabScrollButton, Typography } from "@mui/material";

const CouponView = () => {
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
            Okei jeg vet du er helt elendig med julekalendere, men dette er
            inspirert av en julekalender. MEN i stedet for at det er 24 gaver,
            er det 30 fordi du blir 30 år #gammel
          </Typography>
          <Typography
            variant="body"
            style={{ width: "40%", textAlign: "center" }}
          >
            Fra og med 15. februar skal du få 30 gaver, noen små, mens også noen
            store. Alle gavene er ting jeg som minner meg om deg, og ting jeg
            (tror) jeg vet at du liker
          </Typography>
        </Stack>
      </div>
      <CalendarWithCoupons />
      <br />
      <br />
    </div>
  );
};

export default CouponView;
