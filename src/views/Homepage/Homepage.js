import React, {useEffect} from "react";
import "./homepage.scss";
import meg from "../../assets/meg.jpeg";
import ImageWithBorder from "../../components/ImageWithBorder/ImageWithBorder";
import { Facebook, GitHub, Instagram, Email, LinkedIn } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="homepage">
      <Grid container className="homepage" spacing={10}>
        <Grid item className="image" xs={12} md={6}>
          <ImageWithBorder src={meg} alt="Taheera Ahmed" width="40%" />
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="text">
          <h1>Taheera Ahmed</h1>
          <div className="chips">
          <p>24 år</p>  
          <div className="circle"/>
          <p>4. klasse datateknologi </p> <div className="circle"/>  <p>Trondheim</p>
          </div>
          <span>
          <p>Jeg er gira på livet for øyeblikket. </p>
          <p>Dersom du er en ikke-teknisk person men er nysgjerrig på hva jeg driver med, kan du sjekke ut <a href="https://www.youtube.com/watch?v=CmkaDiaAB9E&ab_channel=TaheeraAhmed">denne videoen</a>.</p>
          </span>
          </div>
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
              href="https://www.linkedin.com/in/taheera-ahmed-997750158/"
              rel="noreferrer"
              target="_blank"
            >
              <IconButton>
                <LinkedIn fontSize="large" />
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
