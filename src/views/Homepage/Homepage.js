import React from "react";
import "./homepage.scss";
import meg from "../../assets/meg.jpeg";
import ImageWithBorder from "../../components/ImageWithBorder/ImageWithBorder";
import { Facebook, GitHub, Instagram, Email } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";

const Homepage = () => {
  return (
    <div className="homepage">
      <Grid
        container
        className="homepage"
        spacing={0}
      >
        <Grid item xs={0} md={6}>
          <ImageWithBorder src={meg} alt="Taheera Ahmed" width="20%" />
        </Grid>
        <Grid item xs={0} md={6}>
          <h1>Taheera Ahmed</h1>
          <p>24 år | 4. klasse datateknologi | Trondheim</p>
          <p>Jeg er gira på livet for øyeblikket </p>
          <div className="icons">
            <a
              href="https://www.facebook.com/taheera.ahmed"
              rel="noreferrer"
              target="_blank"
            >
              <IconButton>
                <Facebook fontSize="large" />
              </IconButton>
            </a>
            <a
              href="https://github.com/taheeraahmed"
              rel="noreferrer"
              target="_blank"
            >
              <IconButton>
                <GitHub fontSize="large" />
              </IconButton>
            </a>
            <a
              href="https://www.instagram.com/taheera_/"
              rel="noreferrer"
              target="_blank"
            >
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
        </Grid>
      </Grid>
    </div>
  );
};

export default Homepage;
