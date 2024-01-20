import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// TODO: Add correct information
const AlertDialog = ({ coupon }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
      {/* TODO: Make this prettier */}
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
