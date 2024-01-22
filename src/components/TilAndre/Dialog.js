import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ConfettiExplosion from "react-confetti-explosion";
import { getCouponById } from "../../api/api";
import { Divider, Typography } from "@mui/material";
import "./styles.css";

const AlertDialog = ({ coupon }) => {
  const [open, setOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [couponDetails, setCouponDetails] = useState(null);

  const [isCouponDateMarch15, setIsCouponDateMarch15] = useState(false);
  const today = new Date();
  const isMarch15 = today.getMonth() === 2 && today.getDate() === 15;

  const daysUntilMarch15 = () => {
    const today = new Date();
    let year = today.getFullYear();
    const march15 = new Date(year, 2, 15); // March 15th of the current year

    // If today is after March 15th, set the year to the next year
    if (today > march15) {
      year++;
    }

    const nextMarch15 = new Date(year, 2, 15);
    const diffTime = Math.abs(nextMarch15 - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const checkIfCouponMarch15 = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert to milliseconds
    return date.getMonth() === 2 && date.getDate() === 15;
  };
  useEffect(() => {
    const fetchCoupon = async () => {
      try {
        const details = await getCouponById(coupon._id);
        setCouponDetails(details);
      } catch (error) {
        console.error("Failed to fetch coupon details:", error);
      }
    };

    if (coupon && coupon._id) {
      fetchCoupon();
      if (coupon && coupon.available_date) {
        setIsCouponDateMarch15(checkIfCouponMarch15(coupon.available_date));
      }
    }
  }, [coupon]);

  const handleClickOpen = () => {
    setOpen(true);
    if (isMarch15) {
      setShowConfetti(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setShowConfetti(false);
  };
  const [isHovered, setIsHovered] = React.useState(false);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString(); // You can customize the format as needed
  };

  const defaultStyle = {
    fontSize: "4vw",
    textShadow: "0 0 10px rgba(255,255,255, 0.2)",
    transition: "text-shadow 0.3s ease-in-out", // Add this line for the transition
    cursor: "pointer",
  };

  const hoverStyle = {
    ...defaultStyle,
    animation: "radiate 2s infinite ease-in-out",
  };
  const emojiPattern = ["👴", "💛"];
  const numberOfRepeats = 16; // Adjust the number of repeats as needed
  const emojis = [];

  for (let i = 0; i < numberOfRepeats; i++) {
    emojis.push(...emojiPattern);
  }

  return (
    <React.Fragment>
      {showConfetti && <ConfettiExplosion />}
      <div
        onClick={handleClickOpen}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={isHovered ? hoverStyle : defaultStyle}
      >
        {coupon.type}
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {isCouponDateMarch15 ? (
          <>
            <h1
              style={{
                WebkitTextFillColor: "#00000F",
                textAlign: "center",
                fontSize: "30px",
                color: "transparent",
                paddingTop: "25px",
              }}
            >
              Gratulerer kjæresten miiiiin
            </h1>
            <p
              style={{
                textAlign: "center",
                fontSize: "9pt",
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
          <>
            <h1
              style={{
                WebkitTextFillColor: "#00000F",
                textAlign: "center",
                fontSize: "30px",
                paddingTop: "20px",
              }}
            >
              {coupon && coupon.available_date
                ? formatDate(coupon.available_date)
                : "Loading..."}
            </h1>
            <DialogContent
              style={{
                textAlign: "center",
                color: "black",
                margin: 0,
                paddingTop: 1,
                paddingBottom: 1,
              }}
            >
              <Divider/>
              <Typography variant="overline" style={{ textAlign: "center" }}>
                det er bare {daysUntilMarch15()} dager til bursdagen din💛
              </Typography>
              <Divider/>
            </DialogContent>
          </>
        )}

        {couponDetails && couponDetails.desc ? (
          <DialogTitle id="alert-dialog-title" style={{ textAlign: "center" }}>
            <Typography variant="body1" style={{ textAlign: "center" }}>
              {couponDetails.desc}
            </Typography>
          </DialogTitle>
        ) : null}

        <DialogContent style={{ textAlign: "center", color: "black" }}>
          <Typography variant="body2" id="alert-dialog-description">
            Finn gaven med disse emojiiene!!
          </Typography>
          <Typography style={{ fontSize: "40px" }}>
            {couponDetails ? couponDetails.code : "Loading..."}
          </Typography>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default AlertDialog;
