import React from "react";
import "./homepage.scss";
import meg from "../../assets/meg.jpeg";
import ImageWithBorder from "../../components/ImageWithBorder/ImageWithBorder";
import { Facebook, GitHub, Instagram, Email } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="text">
        <h1>Taheera Ahmed</h1>
        <p>24 år | 4. klasse datateknologi | Trondheim</p>
        <p>Jeg er gira på livet for øyeblikket </p>
        <div className="icons">
          <a href="https://www.facebook.com/taheera.ahmed">
            <IconButton>
              <Facebook fontSize="large" />
            </IconButton>
          </a>
          <a href="https://github.com/taheeraahmed">
            <IconButton>
              <GitHub fontSize="large" />
            </IconButton>
          </a>
          <a href="https://www.instagram.com/taheera_/">
            <IconButton>
              <Instagram fontSize="large" />
            </IconButton>
          </a>
          <a href="mailto:taheera@hotmail.com">
            <IconButton>
              <Email fontSize="large" />
            </IconButton>
          </a>
        </div>
      </div>
      <ImageWithBorder src={meg} alt="Taheera Ahmed" width="20%" />
    </div>
  );
};

export default Homepage;
