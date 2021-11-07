import React from "react";
import { Grid, Stack } from "@mui/material";
import Card from "../../components/Card/Card";
import "./projects.scss";
import Gradients from "../../assets/gradients.jpeg";
import Classification from "../../assets/klassifisering.png";
import Kmeans from "../../assets/kmeans.png";
import Shell from "../../assets/terminal.jpeg";
import Chatbot from "../../assets/chatbot.jpeg";
import Dreamknit from "../../assets/dreamknit.jpeg"
import Fotogjengen from "../../assets/fotogjengen.png"

const Projects = () => {
  return (
    <div className="projects">
      <Stack container spacing={2} alignItems="center" justify="center">
        <Grid item md={12}>
          <h1>Prosjekter</h1>
          <p style={{ textAlign: "center" }}>
            Dette er et knippe av de prosjektene jeg har fullført
          </p>
        </Grid>
        <Grid item md={8}>
          <Card src={Gradients} heading="Denne nettsiden">
            Kost meg med å lage en React-app. Brukt noen Material-UI
            komponenter, men har laget de fleste selv.
          </Card>
        </Grid>
        <Grid item md={8}>
          <Card src={Fotogjengen} heading="Fotogjengen sin nettside">
            Jobbet med å utvikle nettsiden til fotogjengen på Samfundet.
            Teknologier vi bruker: TypeScript React, Kotlin, Docker. Github repo-ene kan finnes <a href="https://github.com/Fotogjengen/">her</a>
          </Card>
        </Grid>

        <Grid item md={8}>
          <Card src={Dreamknit} heading="Dreamknit sin nettside">
            Utviklet en nettside med Dreamknit for å selge fantastiske strikkeoppskrifter ved hjelp av en genial strikkealgoritme.
            Nettsiden kan finnes <a href="https://www.dreamknit.no/">her</a>
          </Card>
        </Grid>
        <Grid item md={8}>
          <Card src={Classification} heading="Klassifisering av skogtyper">
            I dette prosjektet lages det en modell som bruker dyp læring for å
            forutsi skogdekktype (den vanligste typen tredekke) basert på kun
            kartografiske variabler. Modellen bruker et datasett fra Kaggle for
            læring. Målet er å klassifisere de seks forskjellige
            skogdekketypene. Modellen har en accuracy på 85%.
          </Card>
        </Grid>
        <Grid item md={8}>
          <Card src={Chatbot} heading="Chatbot">
            Laget tre forskjellige chatbotter i Python: (1) Rule-based, (2)
            Retrieval-based og (3) Deep learning based. Her har jeg brukt
            forskjellige metoder for å få svar fra chatbotten.
          </Card>
        </Grid>
        <Grid item md={8}>
          <Card src={Kmeans} heading="Kmeans">
            Implementerte K means algoritmen (i Python) som brukes for
            klassifisering av ukjente datapunkter
          </Card>
        </Grid>
        <Grid item md={8}>
          <Card src={Shell} heading="Shell">
            Implementerte et relativt simpelt shell i C som kan gjøre basic
            operasjoner som cd, pipe og ls
          </Card>
        </Grid>
      </Stack>
    </div>
  );
};

export default Projects;
