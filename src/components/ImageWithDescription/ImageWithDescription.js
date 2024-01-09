import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import "./imageWithDescription.scss";
import { Grid } from "@mui/material";
import ImageWithBorder from "../ImageWithBorder/ImageWithBorder";
import { ThemeContext } from "styled-components";

const ImageWithDescription = ({ src, heading, children, href }) => {
  const themeContext = useContext(ThemeContext);

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} md={6}>
        <ImageWithBorder width="80%" src={src} alt={heading} />
      </Grid>
      <Grid item xs={12} md={6}>
        <a href={href}>
          <Typography
            gutterBottom
            variant="h1"
            sx={{
              fontFamily: "Source Code Pro, monospace",
              fontSize: "3em",
              fontWeight: "800",
            }}
          >
            {heading}
          </Typography>
        </a>
        <Typography variant="body2" sx={{ color: themeContext.text }}>
          {children}
        </Typography>
      </Grid>
    </Grid>
  );
};
export default ImageWithDescription;
