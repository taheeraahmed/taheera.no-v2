import React from "react";
import Typography from "@mui/material/Typography";
import "./imageWithDescription.scss";
import { Grid } from "@mui/material";
import ImageWithBorder from "../ImageWithBorder/ImageWithBorder";

const ImageWithDescription = ({ src, heading, children }) => {
  return (
    <Grid 
      container
      alignItems="center"
    >
      <Grid item xs={12} md={6}>
      <ImageWithBorder
        width="80%"
        src={src}
        alt={heading}
      />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography gutterBottom variant="h5">
          {heading}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {children}
        </Typography>
    </Grid>
    </Grid>
  );
};
export default ImageWithDescription;
