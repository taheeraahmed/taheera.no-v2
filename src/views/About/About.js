import React, { useContext, useEffect } from "react";
import "./about.scss";
import { Grid, Paper, Stack } from "@mui/material";
import Tur from "../../assets/images/tur.jpg";
import BucketHat from "../../assets/images/buckethat.jpg";
import Trene from "../../assets/images/trene.jpg";
import Lese from "../../assets/images/lese.jpg";
import ImageWithDescription from "../../components/ImageWithDescription/ImageWithDescription";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "styled-components";

const About = () => {
  const { t } = useTranslation();
  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const about = [
    {
      heading: t("aboutme.turglad"),
      desc: t("aboutme.turgladDescription"),
      src: Tur,
    },
    {
      heading: t("aboutme.knitting"),
      desc: t("aboutme.knittingDescription"),
      src: BucketHat,
    },
    {
      heading: t("aboutme.weightLifting"),
      desc: t("aboutme.weightLiftingDescription"),
      src: Trene,
    },
    {
      heading: t("aboutme.reading"),
      desc: t("aboutme.readingDescription"),
      src: Lese,
    },
    // Add more items here as needed
  ];

  return (
    <div className="about">
      <Stack spacing={2} alignItems="center" justify="center">
        <Grid container spacing={2}>
          {about.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              {" "}
              {/* xs=12 for full width on smaller screens, md=6 for half width on medium screens */}
              <Paper
                elevation={0}
                sx={{
                  maxWidth: 900,
                  padding: 3,
                  backgroundColor: themeContext.paperCardBackground,
                }}
              >
                <ImageWithDescription src={item.src} heading={item.heading}>
                  {item.desc}
                </ImageWithDescription>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </div>
  );
};

export default About;