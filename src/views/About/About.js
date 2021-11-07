import Card from "../../components/Card/Card";
import React from "react";
import "./about.scss";
import { Grid, Stack } from "@mui/material";
import Tur from "../../assets/tur.jpg";
import BucketHat from "../../assets/buckethat.jpg";
import Trene from "../../assets/trene.jpg";
import Lese from "../../assets/lese.jpg"

const About = () => {
  return (
    <div className="about">
      <Stack container spacing={2} alignItems="center" justify="center">
        <Grid item md={12}>
          <h1>Om meg</h1>
          <p style={{ textAlign: "center" }}>
            Litt kort info om hvem jeg er, hva jeg gjør på fritiden og hva jeg liker
          </p>
        </Grid>
        <Grid item md={8}>
          <Card src={Tur} heading="Turglad">
            Jeg er selvfølgelig veldig glad i å gå turer. Hvem er vel ikke det?
            Går ikke så mye på tur alene da, pleier å gå med venner :))) Den fineste turen jeg har vært på var også den verste: Skåla 1638 moh. 
          </Card>
        </Grid>
        <Grid item md={8}>
          <Card src={BucketHat} heading="Strikking">
            Strikking er en hobby jeg tok på meg under corona tider. Har siden
            den gang strikket opp til flere gensere og mange par med votter
            (fordi hele familien min plutselig skulle ha et par hver??)
          </Card>
        </Grid>
        <Grid item md={8}>
          <Card src={Trene} heading="Styrketrening">
            Veldig glad i å løfte vekter, jo tyngre jo bedre. Kan faktisk skryte
            på meg to PR-er i benk på 50 og knebøy på 100. Har holdt på med
            styrketrening siden starten på videregående.
          </Card>
        </Grid>
        <Grid item md={8}>
          <Card src={Lese} heading="Lese">
            Også en hobby som dukket opp under corona. Hatet det som barn, elsker det som voksen. Omg jeg skrev nettopp voksen. Mest glad i å lese på sommeren, fordi da kan jeg lese ute i sola og chille maks
          </Card>
        </Grid>
      </Stack>
    </div>
  );
};

export default About;
