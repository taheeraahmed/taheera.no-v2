import React, { useEffect } from "react";
import { Grid, Stack } from "@mui/material";
import ImageWithDescription from "../../components/ImageWithDescription/ImageWithDescription";
import "./projects.scss";
import Gradients from "../../assets/images/gradients.jpeg";
import Classification from "../../assets/images/klassifisering.png";
import Kmeans from "../../assets/images/kmeans.png";
import Shell from "../../assets/images/terminal.jpeg";
import Chatbot from "../../assets/images/chatbot.jpeg";
import MSD from "../../assets/images/MSD.jpg";
import ML from "../../assets/images/ML.png";
import CVDL from "../../assets/images/cv_dl.png";
import Dreamknit from "../../assets/images/dreamknit.jpeg";
import Fotogjengen from "../../assets/images/fotogjengen.png";
import StyledChip from "../../components/StyledChip/StyledChip";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectList = [
    {
      src: MSD,
      heading: t("projects.MSD"),
      href: "https://github.com/taheeraahmed/tdt17-visuell-intelligens/",
      description: t("projects.MSDDescription"),
      chipList: [
        "Python",
        t("projects.dl"),
        t("projects.medical"),
        t("projects.cv"),
        "MONAI",
        "Git",
      ],
    },
    {
      src: ML,
      heading: t("projects.mlproject"),
      href: "https://github.com/taheeraahmed/tdt4173-project",
      description: t("projects.mlprojectdesc"),
      chipList: ["Python", t("projects.ml"), "scikit-learn"],
    },
    {
      src: CVDL,
      heading: t("projects.cvdlproject"),
      href: "https://github.com/taheeraahmed/tdt4173-project",
      description: t("projects.cvdlprojectdesc"),
      chipList: [
        "Python",
        t("projects.dl"),
        t("projects.cv"),
        "scikit-learn",
        "PyTorch",
      ],
    },
    {
      src: Gradients,
      heading: t("projects.thispage"),
      href: "https://taheera.no",
      description: t("projects.thisPageDescription"),
      chipList: ["React", "Javascript", "Gradients", "Git"],
    },
    {
      src: Fotogjengen,
      heading: t("projects.fotogang"),
      href: "https://github.com/Fotogjengen/",
      description: t("projects.fotogangDescription"),
      chipList: [
        "Typescript",
        "Kotlin",
        "React",
        "Microsoft Azure",
        "Docker",
        "SQL",
        "Git",
      ],
    },
    {
      src: Dreamknit,
      heading: t("projects.dreamknit"),
      href: "https://app.dreamknit.no",
      description: t("projects.dreamknitDescription"),
      chipList: ["Django", "React", "JavaScript", "Microsoft Azure"],
    },
    {
      src: Classification,
      heading: t("projects.classification"),
      href: "https://github.com/taheeraahmed/Forest-Type-Cover-Classification",
      description: t("projects.classificationDescription"),
      chipList: ["Python", "TensorFlow/Keras", "Supervised learning"],
    },
    {
      src: Chatbot,
      heading: t("projects.chatbot"),
      href: "https://github.com/taheeraahmed/Chat-bots",
      description: t("projects.chatbotDesc"),
      chipList: ["Python", t("projects.ai"), "TensorFlow"],
    },
    {
      src: Kmeans,
      heading: "K-means",
      href: "https://github.com/taheeraahmed/K-means-cluster",
      description: t("projects.kmeans"),
      chipList: ["Python", t("projects.ai"), "Data mining"],
    },
    {
      src: Shell,
      heading: t("projects.shell"),
      href: "https://github.com/taheeraahmed/Shell-Implementation",
      description: t("projects.shellDesc"),
      chipList: ["C", t("projects.os")],
    },
  ];

  return (
    <div className="projects">
      <Stack container spacing={2} alignItems="center" justify="center">
        <Grid item md={12}>
          <h1>{t("common.projects")}</h1>
          <h4 style={{ textAlign: "center" }}>{t("projects.subtitle")}</h4>
        </Grid>
        {projectList.map((project, index) => (
          <Grid item md={8} key={index}>
            <ImageWithDescription
              src={project.src}
              heading={project.heading}
              href={project.href}
            >
              {project.description}
              <StyledChip chipList={project.chipList} />
            </ImageWithDescription>
          </Grid>
        ))}
      </Stack>
    </div>
  );
};

export default Projects;
