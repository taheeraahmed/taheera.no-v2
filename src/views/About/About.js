import React, {useEffect} from "react";
import "./about.scss";
import { Grid, Stack } from "@mui/material";
import Tur from "../../assets/tur.jpg";
import BucketHat from "../../assets/buckethat.jpg";
import Trene from "../../assets/trene.jpg";
import Lese from "../../assets/lese.jpg"
import ImageWithDescription from "../../components/ImageWithDescription/ImageWithDescription";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="about">
      <Stack container spacing={2} alignItems="center" justify="center">
        <Grid item md={12}>
          <h1>{t("common.aboutme")} </h1>
          <p style={{ textAlign: "center" }}>{t("aboutme.subtitle")}</p>
        </Grid>
        <Grid item md={8}>
          <ImageWithDescription src={Tur} heading={t("aboutme.turglad")}>
            {t("aboutme.turgladDescription")}
          </ImageWithDescription>
        </Grid>
        <Grid item md={8}>
          <ImageWithDescription src={BucketHat} heading={t("aboutme.knitting")}>
            {t("aboutme.knittingDescription")}
          </ImageWithDescription>
        </Grid>
        <Grid item md={8}>
          <ImageWithDescription
            src={Trene}
            heading={t("aboutme.weightLifting")}
          >
            {t("aboutme.weightLiftingDescription")}
          </ImageWithDescription>
        </Grid>
        <Grid item md={8}>
          <ImageWithDescription src={Lese} heading={t("aboutme.reading")}>
            {t("aboutme.readingDescription")}
          </ImageWithDescription>
        </Grid>
      </Stack>
    </div>
  );
};

export default About;
