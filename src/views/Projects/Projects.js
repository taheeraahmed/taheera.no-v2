import React, {useEffect} from "react";
import { Grid, Stack } from "@mui/material";
import ImageWithDescription from "../../components/ImageWithDescription/ImageWithDescription";
import "./projects.scss";
import Gradients from "../../assets/gradients.jpeg";
import Classification from "../../assets/klassifisering.png";
import Kmeans from "../../assets/kmeans.png";
import Shell from "../../assets/terminal.jpeg";
import Chatbot from "../../assets/chatbot.jpeg";
import Dreamknit from "../../assets/dreamknit.jpeg"
import Fotogjengen from "../../assets/fotogjengen.png"
import StyledChip from "../../components/StyledChip/StyledChip";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const thispage = ['React', 'Javascript', 'Gradients']
  const classification = ['Python', 'TensorFlow/Keras', 'Supervised learning']
  const kmeans = ["Python", t("projects.ai"), "Data mining"];
  const shell =  ['C', t('projects.os')]
  const chatbot = ["Python", t("projects.ai"), "TensorFlow"];
  const fg = ['Typescript', 'Kotlin' , 'React']
  const dreamknit = ['Django', 'React', 'JavaScript']

  return (
    <div className="projects">
      <Stack container spacing={2} alignItems="center" justify="center">
        <Grid item md={12}>
          <h1>{t("common.projects")}</h1>
          <p style={{ textAlign: "center" }}>{t("projects.subtitle")}</p>
        </Grid>
        <Grid item md={8}>
          <ImageWithDescription
            src={Gradients}
            heading={t("projects.thispage")}
          >
            {t("projects.thisPageDescription")}
            <StyledChip chipList={thispage} />
          </ImageWithDescription>
        </Grid>
        <Grid item md={8}>
          <ImageWithDescription
            src={Fotogjengen}
            heading={t("projects.fotogang")}
          >
            {t("projects.fotogangDescription")}
            <a href="https://github.com/Fotogjengen/"> {t("common.here")}</a>
            <br />
            {t("projects.fotoGangDescription2")}:{" "}
            <a href="https://foto.samfundet.no">foto.samfundet.no</a>
            <StyledChip chipList={fg} />
          </ImageWithDescription>
        </Grid>

        <Grid item md={8}>
          <ImageWithDescription
            src={Dreamknit}
            heading={t("projects.dreamknit")}
          >
            {t("projects.dreamknitDescription")}
            <a href="https://www.dreamknit.no/"> {t("common.here")}</a>
            <StyledChip chipList={dreamknit} />
          </ImageWithDescription>
        </Grid>
        <Grid item md={8}>
          <ImageWithDescription
            src={Classification}
            heading={t("projects.classification")}
          >
            {t("projects.classificationDescription")}
            <StyledChip chipList={classification} />
          </ImageWithDescription>
        </Grid>
        <Grid item md={8}>
          <ImageWithDescription src={Chatbot} heading={t("projects.chatbot")}>
            {t("projects.chatbotDesc")}
            <StyledChip chipList={chatbot} />
          </ImageWithDescription>
        </Grid>
        <Grid item md={8}>
          <ImageWithDescription src={Kmeans} heading="K-means">
            {t("projects.kmeans")}
            <StyledChip chipList={kmeans} />
          </ImageWithDescription>
        </Grid>
        <Grid item md={8}>
          <ImageWithDescription src={Shell} heading={t("projects.shell")}>
            {t("projects.shellDesc")}
            <StyledChip chipList={shell} />
          </ImageWithDescription>
        </Grid>
      </Stack>
    </div>
  );
};

export default Projects;
