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

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const thispage = ['React', 'Javascript', 'Gradients']
  const classification = ['Python', 'TensorFlow/Keras', 'Supervised learning']
  const kmeans =  ['Python', 'Kunstig Intelligens', 'Data mining']
  const shell =  ['C', 'Operativ systemer']
  const chatbot =  ['Python', 'Kunstig Intelligens', 'TensorFlow']
  const fg = ['Typescript', 'Kotlin' , 'React']
  const dreamknit = ['Django', 'React', 'JavaScript']

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
          <ImageWithDescription src={Gradients} heading="Denne nettsiden">
            Kost meg med å lage en React-app. Brukt noen Material-UI
            komponenter, men har laget de fleste selv.
            <StyledChip chipList={thispage}/>
          </ImageWithDescription>
        </Grid>
        <Grid item md={8}>
          <ImageWithDescription src={Fotogjengen} heading="Fotogjengen sin nettside">
            Jobbet med å utvikle nettsiden til fotogjengen på Samfundet.
            Teknologier vi bruker: TypeScript React, Kotlin, Docker. Github repo-ene kan finnes <a href="https://github.com/Fotogjengen/">her</a>
            <br/>
            Foto credz: <a href="https://foto.samfundet.no">foto.samfundet.no</a>
            <StyledChip chipList={fg}/>
          </ImageWithDescription>
        </Grid>

        <Grid item md={8}>
          <ImageWithDescription src={Dreamknit} heading="Dreamknit sin nettside">
            Utviklet en nettside med Dreamknit for å selge fantastiske strikkeoppskrifter ved hjelp av en genial strikkealgoritme.
            Nettsiden kan finnes <a href="https://www.dreamknit.no/">her</a>
            <StyledChip chipList={dreamknit}/>
          </ImageWithDescription>
        </Grid>
        <Grid item md={8}>
          <ImageWithDescription src={Classification} heading="Klassifisering av skogtyper">
            I dette prosjektet lages det en modell for å
            forutsi skogdekktype basert på kun
            kartografiske variabler, gitt av et datasett fra Kaggle. Målet er å klassifisere de seks forskjellige
            skogdekketypene. Modellen har en accuracy på 85%.
            <StyledChip chipList={classification}/>
          </ImageWithDescription>
        </Grid>
        <Grid item md={8}>
          <ImageWithDescription src={Chatbot} heading="Chatbot">
            Laget tre forskjellige chatbotter i Python: (1) Rule-based, (2)
            Retrieval-based og (3) Deep learning based. Her har jeg brukt
            forskjellige metoder for å få svar fra chatbotten.
            <StyledChip chipList={chatbot}/>
          </ImageWithDescription>
        </Grid>
        <Grid item md={8}>
          <ImageWithDescription src={Kmeans} heading="Kmeans">
            Implementerte K means algoritmen (i Python) som brukes for
            klassifisering av ukjente datapunkter
            <StyledChip chipList={kmeans}/>
          </ImageWithDescription>
        </Grid>
        <Grid item md={8}>
          <ImageWithDescription src={Shell} heading="Shell">
            Implementerte et relativt simpelt shell i C som kan gjøre basic
            operasjoner som cd, pipe og ls
            <StyledChip chipList={shell}/>
          </ImageWithDescription>
        </Grid>
      </Stack>
    </div>
  );
};

export default Projects;
