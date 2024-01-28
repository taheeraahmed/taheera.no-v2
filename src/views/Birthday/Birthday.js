import React, { useEffect, useRef, useState } from "react";
import CalendarWithCoupons from "../../components/TilAndre/Coupons";
import "./Birthday.scss";
import { Stack } from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";
import FrontPageText from "../../components/TilAndre/FrontPageText";
import Confetti from "react-confetti";

const CouponView = () => {
  const nextWindowRef = useRef(null);
  const [countdown, setCountdown] = useState("");
  const today = new Date();
  const isAfterFeb15 =
    today.getMonth() > 1 || (today.getMonth() === 1 && today.getDate() >= 15);

  const calculateCountdown = () => {
    const now = new Date();
    const year = now.getFullYear();
    const feb15 = new Date(year, 1, 15);
    const diff = feb15 - now;

    if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setCountdown(
        `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`
      );
    } else {
      setCountdown(null);
    }
  };

  useEffect(() => {
    if (!isAfterFeb15) {
      const interval = setInterval(calculateCountdown, 1000);
      calculateCountdown(); // Initial call

      return () => clearInterval(interval); // Clear interval on component unmount
    }
  }, [isAfterFeb15]);

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

  if (!isAfterFeb15) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "24px",
          fontFamily: "Source Code Pro,ui-monospace",
          fontWeight: "200",
          cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>💛</text></svg>")
      16 0,
    auto`,
        }}
      >
        {countdown}
      </div>
    );
  }

  return (
    <>
      {today.getMonth() === 2 && today.getDate() === 15 && (
        <Confetti height={"1500vh"} />
      )}
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
              <ArrowDownward
                fontSize="large"
                style={{ paddingTop: "5px" }}
                className="hover-effect"
              />
            </button>
          </Stack>
        </div>
        <div className="text-container" ref={nextWindowRef} style={{ height: "100vh" }}>
          <CalendarWithCoupons />
        </div>
      </div>
    </>
  );
};

export default CouponView;
