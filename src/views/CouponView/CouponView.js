import React, { useEffect, useRef } from "react";
import CalendarWithCoupons from "../../components/Coupons/Coupons";
import "./calendar.scss";
import { Stack } from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";
import FrontPageText from "../../components/Coupons/FrontPageText";
import Confetti from "react-confetti";

const CouponView = () => {
  const nextWindowRef = useRef(null);
  const today = new Date();
  const isMarch15 = today.getMonth() === 2 && today.getDate() === 15;
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
    <>
      {isMarch15 && <Confetti height={"1500vh"} />}
      <div
        className="calendar"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + "/bursdag1.jpeg"})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="text-container">
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <FrontPageText />
            <button type="button" className="btn" onClick={scrollToNextWindow}>
              <ArrowDownward fontSize="large" style={{ paddingTop: "5px" }} />
            </button>
          </Stack>
        </div>
        <div ref={nextWindowRef} style={{ height: "100vh" }}>
          <CalendarWithCoupons />
        </div>
      </div>
    </>
  );
};

export default CouponView;
