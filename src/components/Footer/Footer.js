import React from "react";
import "./footer.scss";
import "../../styles/fonts.scss";
import { Grid } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import Contact from "./Contact/Contact";
import NavLinks from "./NavLinks/NavLinks";


const Footer = () => {
  return (
    <div className="footer">
    <Grid
      container
      spacing={5}
    >
      <Grid item
      md={4}
      xs={12}
      >
        <h3>Kontakt</h3>
        <Contact/>
      </Grid>
      <Grid item
      md={4}
      xs={12}  
      >
        <h3>Meny</h3>
        <NavLinks/>
      </Grid>
      <Grid item
      md={4}
      xs={12}>
        <h3>Github repository</h3>
        <br/>
        <div className="github-icon">
        <a activeClassName="active" href="https://github.com/taheeraahmed/taheera.no-vol-2">
          <GitHub sx={{fontSize:70}}/>
          <br/>
        All kildekoden til nettsiden<br/>
        kan finnes her
        </a>
        
        </div>
      </Grid>
    </Grid>
    </div>
  );
};

export default Footer;
