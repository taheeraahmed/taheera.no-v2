import React from "react";
import "./footer.scss";
import "../../styles/fonts.scss";
import { Grid } from "@mui/material";
//import { GitHub } from "@mui/icons-material";
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
        <h3>Github-repo</h3>

        <a href="https://todo.no">
          <p>GitHub-repoet til nett-</p>
          <p>siden kan finnes her</p>
        </a>
      </Grid>
    </Grid>
    </div>
  );
};

export default Footer;
