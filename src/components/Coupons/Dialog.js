import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ConfettiExplosion from "react-confetti-explosion";

const AlertDialog = ({ coupon }) => {
  const [open, setOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

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
        variant="outlined"
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
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default AlertDialog;
