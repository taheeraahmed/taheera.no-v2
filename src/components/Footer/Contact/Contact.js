import React from "react";
import { Chip } from "@mui/material";
import { Mail, PhoneIphone } from "@mui/icons-material";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <Chip
        sx={{
          backgroundColor: "transparent",
          fontSize: "12pt",
          color: "black",
        }}
        icon={<PhoneIphone sx={{ fontSize: "12pt", color: "black" }} />}
        label="+47 949 86 709"
      />
      <Chip
        sx={{
          backgroundColor: "transparent",
          fontSize: "12pt",
          color: "black",
        }}
        icon={<Mail sx={{ fontSize: "12pt", color: "black" }} />}
        label="taheera@hotmail.com"
      />
    </div>
  );
};

export default Contact;
