import { Masonry } from "@mui/lab";
import "./projects.scss";
import { useEffect } from "react";
import ProjectsList from "../../components/ProjectsList/ProjectsList";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Stack } from "@mui/material";

const Projects = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("md"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let projectDisplay;
  if (isSmallScreen) {
    projectDisplay = (
      <Stack spacing={3}>
        <ProjectsList />
      </Stack>
    );
  } else if (isMediumScreen) {
    projectDisplay = (
      <Masonry columns={2} spacing={3}>
        <ProjectsList />
      </Masonry>
    );
  } else {
    projectDisplay = (
      <Masonry columns={3} spacing={3}>
        <ProjectsList />
      </Masonry>
    );
  }

  return <div className="projects">{projectDisplay}</div>;
};

export default Projects;
