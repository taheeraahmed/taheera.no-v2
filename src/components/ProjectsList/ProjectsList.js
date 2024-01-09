import React, { useContext } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Gradients from "../../assets/images/gradients.jpeg";
import Classification from "../../assets/images/klassifisering.png";
import Kmeans from "../../assets/images/kmeans.png";
import Shell from "../../assets/images/terminal.jpeg";
import MSD from "../../assets/images/MSD.jpg";
import ML from "../../assets/images/ML.png";
import CVDL from "../../assets/images/cv_dl.png";
import Dreamknit from "../../assets/images/dreamknit.jpeg";
import Fotogjengen from "../../assets/images/fotogjengen.png";
import StyledChip from "../../components/StyledChip/StyledChip";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "styled-components";

const ProjectsList = () => {
  const { t } = useTranslation();
  const themeContext = useContext(ThemeContext);

  const styles = {
    maxWidth: 445,
    backgroundColor: themeContext.paperCardBackground,
  };
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
      chipList: ["Python", t("projects.ml"), "scikit-learn", "Git"],
    },
    {
      src: CVDL,
      heading: t("projects.cvdlproject"),
      href: "https://github.com/taheeraahmed/tdt4265-project",
      description: t("projects.cvdlprojectdesc"),
      chipList: [
        "Python",
        t("projects.dl"),
        t("projects.cv"),
        "scikit-learn",
        "PyTorch",
        "Git",
      ],
    },
    {
      src: Gradients,
      heading: t("projects.thispage"),
      href: "https://taheera.no",
      description: t("projects.thisPageDescription"),
      chipList: ["React", "JavaScript", "Gradients", "Git"],
    },
    {
      src: Fotogjengen,
      heading: t("projects.fotogang"),
      href: "https://github.com/Fotogjengen/",
      description: t("projects.fotogangDescription"),
      chipList: [
        "TypeScript",
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
      chipList: ["Django", "React", "JavaScript", "Microsoft Azure", "Git"],
    },
    {
      src: Classification,
      heading: t("projects.classification"),
      href: "https://github.com/taheeraahmed/Forest-Type-Cover-Classification",
      description: t("projects.classificationDescription"),
      chipList: ["Python", "TensorFlow/Keras", "Supervised learning"],
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
    <>
      {projectList.map((project, index) => (
        <Card sx={styles} elevation={0}>
          <a href={project.href} style={{ textDecoration: "none" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image={project.src}
                alt={project.heading}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.heading}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ color: themeContext.text }}
                >
                  {project.description}
                </Typography>
                <StyledChip chipList={project.chipList} />
              </CardContent>
            </CardActionArea>
          </a>
        </Card>
      ))}
    </>
  );
};

export default ProjectsList;
