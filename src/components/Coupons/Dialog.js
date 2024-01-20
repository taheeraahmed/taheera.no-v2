import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ConfettiExplosion from "react-confetti-explosion";
import { getCouponById } from "../../api/api";
import { Typography } from "@mui/material";

const AlertDialog = ({ coupon }) => {
  const [open, setOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [couponDetails, setCouponDetails] = useState(null);

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
    }
  }, [coupon]);

  const handleClickOpen = () => {
    const today = new Date();
    const isMarch15 = today.getMonth() === 2 && today.getDate() === 15;

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

  const defaultStyle = {
    fontSize: "40px",
    textShadow: "0 0 10px rgba(255,255,255, 0.2)",
    transition: "text-shadow 0.3s ease-in-out", // Add this line for the transition
    cursor: "pointer",
  };

  const hoverStyle = {
    ...defaultStyle,
    textShadow:
      "0 0 20px rgba(255,255,255, 0.5), 0 0 30px rgba(255,255,255, 0.7)",
  };

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
        {couponDetails && couponDetails.desc ? (
          <DialogTitle id="alert-dialog-title" style={{ textAlign: "center" }}>
            {couponDetails.desc}
          </DialogTitle>
        ) : null}

        <DialogContent style={{ textAlign: "center", color: "black" }}>
          <Typography varient="body1" id="alert-dialog-description">
            Finn gaven med disse emojiiene!!
          </Typography>
          <Typography varient="body1" id="alert-dialog-description">
            {couponDetails ? couponDetails.code : "Loading..."}
          </Typography>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default AlertDialog;
