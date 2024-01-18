import React, { useContext, useEffect } from "react";
import "./about.scss";
import { Grid, Paper, Stack, useMediaQuery, useTheme } from "@mui/material";
import Tur from "../../assets/images/tur.jpg";
import BucketHat from "../../assets/images/buckethat.jpg";
import Trene from "../../assets/images/trene.jpg";
import Lese from "../../assets/images/lese.jpg";
import ImageWithDescription from "../../components/ImageWithDescription/ImageWithDescription";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "styled-components";

const About = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
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

  let size;
  if (isSmallScreen) {
    size = 0;
  } else if (isMediumScreen) {
    size = 0;
  } else {
    size = 2;
  }

  return (
    <div className="about">
      <Stack spacing={2} alignItems="center" justify="center">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={size}
        >
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
                <center>
                  <ImageWithDescription src={item.src} heading={item.heading}>
                    {item.desc}
                  </ImageWithDescription>
                </center>
              </Paper>
              {isSmallScreen ? <br /> : null}
            </Grid>
          ))}
        </Grid>
      </Stack>
    </div>
  );
};

export default About;
